"use client";

import * as yup from "yup";

import React from "react";
import Grid from "@mui/material/Grid2";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import MainTitle from "../common/MainTitle";
import MUILabel from "@/app/react-hook-form/mui-label";
import RHFTextfield from "@/app/react-hook-form/rhf-textfield";
import { Button, Container, Typography } from "@mui/material";
import { popins } from "@/app/google-fonts/fonts";
import RHFAutocomplete from "@/app/react-hook-form/rhf-autocomplete";
import { priceRangeOptions, serviceOptions } from "@/app/utils/constants";
import { getAQuote } from "@/app/utils/api";

const GetAQuote = () => {
  // schema
  const schema = yup.object().shape({
    full_name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter valid mail")
      .required("Email required"),
    mobno: yup.string().required("mobile no is required"),
    about_project: yup.string().required("about_project is required"),
    location: yup.string().required("mobile no is required"),
    service: yup.object().required("Servive required"),
    price_range: yup.object().required("Price Range required"),
  });

  // default values
  const defaultValues = {
    full_name: "",
    email: "",
    mobno: "",
    about_project: "",
    location: "",
    service: null,
    price_range: null,
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
      price_range: data.price_range.priceRange,
      service: data.service.serviceName,
    };

    try {
      const response = await getAQuote(payload);
      if (response.error) {
        reset();

        toast.error("Something went wrong");
      } else {
        reset();
        toast.success("Our Team Will Contact Soon...!");
      }

      // if (data.status !== 200) {
      //   setErrorMsg(data);
      // } else {
      //   setErrorMsg(null);
      // }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div>
      <MainTitle title="Quotation And Consultation" />
      <Container maxWidth="sm" sx={{ py: 5 }}>
        <FormProvider {...methods}>
          <Typography
            py={2}
            variant="h4"
            className={popins.className}
            fontWeight={600}
            color="white"
          >
            Get A Free Quote
          </Typography>
          <form onSubmit={onsubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <MUILabel label="Full Name" htmlFor="full_name" required />
                <RHFTextfield label="Enter Your Full Name" name="full_name" />
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
                <MUILabel label="Location" htmlFor="location" required />
                <RHFTextfield name="location" label="Enter Your Location" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <MUILabel label="Select services" htmlFor="service" required />
                <RHFAutocomplete
                  options={serviceOptions}
                  getOptionLabel={(option) => option.serviceName}
                  name="service"
                  label="Enter Your service"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <MUILabel
                  label="Select Price Range"
                  htmlFor="price_range"
                  required
                />
                <RHFAutocomplete
                  options={priceRangeOptions}
                  getOptionLabel={(option) => option.priceRange}
                  name="price_range"
                  label="Enter Your Phone number"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <MUILabel
                  label="Tell me About Your Project"
                  htmlFor="about_project"
                  required
                />
                <RHFTextfield
                  name="about_project"
                  label="About Project"
                  minRows={5}
                  multiline
                />
              </Grid>

              {/* <Grid item xs={12}>
      {showAlert.alert && displayAlert(showAlert.about_project)}
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
      </Container>
    </div>
  );
};

export default GetAQuote;
