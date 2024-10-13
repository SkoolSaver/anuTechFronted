import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip"; // Import Chip component

// ----------------------------------------------------------------------

export default function RHFAutocomplete({
  name,
  label,
  type,
  helperText,
  placeholder,
  options,
  ...others
}) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        if (type === "multipleSelect") {
          return (
            <Autocomplete
              {...field}
              multiple
              options={options}
              onChange={(event, newValue) => {
                setValue(name, newValue, { shouldValidate: true });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={label}
                  sx={{
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
                  error={!!error}
                  helperText={error ? error.message : helperText}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                    style: { color: "white" },
                  }}
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                    }}
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <li
                  {...props}
                  style={{
                    backgroundColor: selected ? "skyblue" : "transparent",
                    color: selected ? "white" : "black",
                  }}
                >
                  {option}
                </li>
              )}
              {...others}
            />
          );
        }

        return (
          <Autocomplete
            {...field}
            options={options}
            onChange={(event, newValue) =>
              setValue(name, newValue, { shouldValidate: true })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={label}
                sx={{
                  mt: 1,
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
                error={!!error}
                helperText={error ? error.message : helperText}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                  style: { color: "white" },
                }}
              />
            )}
            {...others}
          />
        );
      }}
    />
  );
}
