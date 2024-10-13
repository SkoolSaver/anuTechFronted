import { Box, Stack, Typography } from "@mui/material";
import { whyChoose } from "../helpers/content";
import { Info, Speed, SupportAgent, People } from "@mui/icons-material";

function DedicatedCardChoose({ title, data }) {
  return (
    <>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "700",
          fontSize: "32px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {title}
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          maxWidth: "1100px",
          padding: "32px 16px",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          marginBottom: "108px",
        }}
      >
        {data.lists.map((data, index) => {
          return (
            <Box
              key={index}
              sx={{
                border: "0.1px solid #81868f",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                width: "250px",
                gap: 2,
                transition: "transform 0.3s ease",
                borderRadius: "10px",
                "&:hover": {
                  background: "#0f0f0f",
                  transform: "scale(1.05)",
                },
              }}
            >
              {data.icon}
              <Typography
                sx={{
                  marginTop: "4px",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "white",
                }}
              >
                {data.header}
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#81868f", lineHeight: "1.2" }}
              >
                {data.content}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default DedicatedCardChoose;
