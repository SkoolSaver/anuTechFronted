import { InputLabel } from "@mui/material";
const RequiredComponent = () => {
  return <span style={{ color: "red" }}>*</span>;
};
export default function MUILabel({ label, htmlFor, required }) {
  return (
    <InputLabel htmlFor={htmlFor} sx={{ cursor: "pointer", color: "white" }}>
      {label} {required && <RequiredComponent />}
    </InputLabel>
  );
}
