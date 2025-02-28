"use client";

import * as yup from "yup";
import MUILabel from "@/app/react-hook-form/mui-label";
import RHFTextfield from "@/app/react-hook-form/rhf-textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { getInTouch } from "@/app/utils/api";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  // schema
  const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    mobno: yup
      .string()
      .matches(/^[0-9]+$/, "Mobile number must be digits only") // Mobile number validation
      .required("Mobile number is required"),
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

  const onSubmit = handleSubmit(async (data) => {
    const payload = { ...data };
    delete payload.isVerified; // If `isVerified` exists, make sure it's removed before sending

    try {
      const response = await getInTouch(payload);

      if (response.error) {
        reset();
        toast.error("Something went wrong");
      } else {
        reset();
        toast.success("Our team will contact you soon!");
      }
    } catch (error) {
      console.error(error);
      reset(); // Reset in case of error to clear the form
      toast.error("An unexpected error occurred");
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MUILabel label="Name" htmlFor="username" required />
            <RHFTextfield label="Enter Your Name" name="username" />
          </Grid>

          <Grid item xs={12}>
            <MUILabel label="Email" htmlFor="email" required />
            <RHFTextfield label="Enter Your Business Email" name="email" />
          </Grid>

          <Grid item xs={12}>
            <MUILabel label="Phone Number" htmlFor="mobno" required />
            <RHFTextfield name="mobno" label="Enter Your Phone Number" />
          </Grid>

          <Grid item xs={12}>
            <MUILabel label="Message" htmlFor="message" required />
            <RHFTextfield name="message" label="Your Message" minRows={5} multiline />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              color="info"
              variant="contained"
              size="large"
              disabled={isSubmitting} // Disable the submit button while submitting
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
