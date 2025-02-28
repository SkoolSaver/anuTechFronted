import * as yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import MUILabel from "@/app/react-hook-form/mui-label";
import RHFTextfield from "@/app/react-hook-form/rhf-textfield";
import RHFAutocomplete from "@/app/react-hook-form/rhf-autocomplete";
import { experienceOptions, skillOptions } from "@/app/utils/constants";
import { toast } from "react-toastify";
import { applyJob } from "@/app/utils/api";

// options

const JobApplyForm = ({ openModal, data }) => {
  const [selectedResumeName, setSelectedResumeName] = useState("");

  const defaultValues = {
    jobid: data.designation || "",
    candidate_name: "",
    email: "",
    yoe: { id: data.experience, experience: data.experience } || null,
    candidate_location: data.location || "",
    candidate_mobno: "",
    skills: [],
    candidate_currentemployeement: "",
    myFile: null,
  };

  const schema = yup.object().shape({
    candidate_name: yup.string().required("Candidate Name is required"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    yoe: yup.object().required("Experience required"),
    candidate_location: yup.string().required("Location required"),
    candidate_mobno: yup.string().required("Mobile number is required"),
    skills: yup.array().min(2, "Must have at least 2 skills"),
    candidate_currentemployeement: yup
      .string()
      .required("Employment status required"),
    jobid: yup.string().required("Job ID is required"),
    myFile: yup.mixed().required("File is required"),
  });

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    setError,
    formState: { isSubmitting, errors },
  } = methods;

  const onsubmit = handleSubmit(async (values) => {
    const payload = {
      ...values,
      skills: values["skills"].join(","),
      yoe: values["yoe"].id,
      jobid: data.id,
    };
    console.log(payload);

    const formdata = new FormData();
    for (let i in payload) {
      formdata.append(i, payload[i]);
    }
    const response = await applyJob(formdata);
    if (response.error) {
      reset();
      toast.error("Something went wrong. Please try again!");
    } else {
      reset();
      toast.success("Our team will contact you soon!");
    }
  });

  // handling file changes
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validExtensions = ["pdf", "doc", "docx"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
      const validMimeTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (
        validExtensions.includes(fileExtension) &&
        validMimeTypes.includes(selectedFile.type)
      ) {
        if (selectedFile.size > 5 * 1024 * 1024) {
          toast.info("File size is more than 5 MB");
          return;
        }
        setValue("myFile", selectedFile, { shouldValidate: true });
        setSelectedResumeName(selectedFile.name);
      } else {
        setValue("myFile", undefined);
        setSelectedResumeName("");
        setError("myFile", { message: "Please select a valid PDF, DOC, or DOCX file" });
      }
    }
  };

  const handleSearch = (event) => {
    console.log(event.target.value);  // Consider implementing dynamic filtering here
  };

  return (
    <Dialog
      open={openModal.value}
      onClose={openModal.onFalse}
      aria-labelledby="alert-dialog-title"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#212121",
          p: 4,
          borderRadius: "5px",
          width: "600px",
        },
      }}
      aria-describedby="alert-dialog-description"
    >
      <FormProvider {...methods}>
        <form onSubmit={onsubmit}>
          <Grid container spacing={3}>
            {/* Job Role */}
            <Grid item xs={6}>
              <MUILabel label="Job Role" htmlFor="jobid" required />
              <RHFTextfield label="Your Job Role" name="jobid" />
            </Grid>

            {/* Current Employment */}
            <Grid item xs={6}>
              <MUILabel label="Current Employment" htmlFor="candidate_currentemployeement" required />
              <RHFTextfield label="Current Employment" name="candidate_currentemployeement" />
            </Grid>

            {/* Name */}
            <Grid item xs={6}>
              <MUILabel label="Name" htmlFor="candidate_name" required />
              <RHFTextfield label="Enter Your Name" name="candidate_name" />
            </Grid>

            {/* Email */}
            <Grid item xs={6}>
              <MUILabel label="Email" htmlFor="email" required />
              <RHFTextfield label="Enter Your Email" name="email" />
            </Grid>

            {/* Experience */}
            <Grid item xs={12}>
              <MUILabel label="Experience" htmlFor="yoe" required />
              <RHFAutocomplete
                options={experienceOptions}
                getOptionLabel={(option) => option.experience}
                label="Enter Your Experience"
                name="yoe"
              />
            </Grid>

            {/* Location */}
            <Grid item xs={6}>
              <MUILabel label="Location" htmlFor="candidate_location" required />
              <RHFTextfield label="Enter Your Location" name="candidate_location" />
            </Grid>

            {/* Mobile Number */}
            <Grid item xs={6}>
              <MUILabel label="Mobile No" htmlFor="candidate_mobno" required />
              <RHFTextfield label="Enter Your Mobile Number" name="candidate_mobno" />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <MUILabel label="Skills" htmlFor="skills" required />
              <RHFAutocomplete
                multiple
                options={skillOptions.map((option) => option.skill)}
                getOptionLabel={(option) => option}
                label="Enter Your Skills"
                name="skills"
              />
            </Grid>

            {/* File Upload */}
            <Grid
              item xs={12}
              sx={{ mt: 4 }}
              style={{
                minWidth: "530px",
                height: "100px",
                border: "1px dashed grey",
                borderRadius: "10px",
                backgroundColor: "#212121",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label htmlFor="file-input">
                <input
                  type="file"
                  name="fileUpload"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  id="file-input"
                  aria-label="Upload Resume"
                />
                <Button
                  variant="outlined"
                  component="span"
                  color="inherit"
                  startIcon={<CloudUploadIcon />}
                  style={{ alignSelf: "center", color: "white" }}
                  aria-label="Upload File"
                >
                  Upload File
                </Button>
              </label>
              {selectedResumeName && (
                <Typography variant="subtitle1" sx={{ mt: 2 }} color="white">
                  <span style={{ color: "#1976D2" }}>{selectedResumeName}</span> Uploaded
                </Typography>
              )}
              {errors?.myFile?.message && (
                <Typography variant="caption" color="error" sx={{ mt: 2 }}>
                  {errors?.myFile?.message}
                </Typography>
              )}
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default JobApplyForm;
