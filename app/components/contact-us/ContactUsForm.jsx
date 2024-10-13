"use client";

import * as yup from "yup";

import MUILabel from "@/app/react-hook-form/mui-label";
import RHFTextfield from "@/app/react-hook-form/rhf-textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { getInTouch } from "@/app/utils/api";
import { toast } from "react-toastify";
const ContactUsForm = () => {
  // schema
  const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter valid mail")
      .required("Email required"),
    mobno: yup.string().required("mobile no is required"),
    message: yup.string().required("Message is required"),
  });

  // default values
  const defaultValues = {
    username: "",
    email: "",
    mobno: "",
    message: "",
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
  console.log(process.env.NEXT_PUBLIC_HOST_API);

  const onsubmit = handleSubmit(async (data) => {
    const payload = {
      ...data,
    };
    delete payload.isVerified;
    try {
      const response = await getInTouch(payload);

      if (response.error) {
        reset();

        toast.error("Something went wrong");
      } else {
        reset();
        toast.success("Our Team Will Contact Soon...!");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onsubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <MUILabel label="Name" htmlFor="username" required />
            <RHFTextfield label="Enter Your Name" name="username" />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <MUILabel label="Email" htmlFor="email" required />

            <RHFTextfield label="Enter Your Business Email" name="email" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <MUILabel label="Phone Number" htmlFor="mobile-no" required />
            <RHFTextfield name="mobno" label="Enter Your Phone number" />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <MUILabel label="Message" htmlFor="message" required />
            <RHFTextfield
              name="message"
              label="Message"
              minRows={5}
              multiline
            />
          </Grid>

          {/* <Grid item xs={12}>
      {showAlert.alert && displayAlert(showAlert.message)}
    </Grid> */}
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              fullWidth
              color="info"
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default ContactUsForm;
