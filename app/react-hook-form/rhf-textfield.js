import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function RHFTextfield({ name, label, ...others }) {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          {...field}
          sx={{
            mt: 1,
            color: "white",
            "& input, & textarea": {
              color: "white",
            },
            "& input::placeholder": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          id={name}
          variant="outlined"
          placeholder={label}
          {...others}
          error={!!error}
          helperText={error && error?.message}
        />
      )}
      name={name}
      control={control}
    />
  );
}
