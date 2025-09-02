"use client";

import * as yup from "yup";
import MUILabel from "@/app/react-hook-form/mui-label";
import RHFTextfield from "@/app/react-hook-form/rhf-textfield";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  // Schema
  const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    mobno: yup
      .string()
      .matches(/^[0-9]+$/, "Mobile number must be digits only")
      .required("Mobile number is required"),
    message: yup.string().required("Message is required"),
  });

  // Default values
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

  const onSubmit = async (data) => {
    alert("Hello! Form submitted "); 
    console.log("Submitted Data:", data); 

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.error) {
        reset();
        toast.error("Something went wrong");
      } else {
        reset();
        toast.success("Our team will contact you soon!");
      }
    } catch (error) {
      console.error(error);
      reset();
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              variant="outlined"
              size="large"
              disabled={isSubmitting} 
              sx={{
                    '&:hover': {
                      backgroundColor: '#1976d2', // or your preferred blue shade
                      color: 'white',
                      borderColor: '#1976d2',
                    },
                   
                    
                  }}
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
