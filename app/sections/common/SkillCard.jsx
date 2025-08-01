import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

function SkillCard({ header, content, skills }) {
  return (
    <>
      <Stack
        sx={{
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1056px",
          alignItems: "center",
          margin: "24px auto",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {header}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            color: "#81868f",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          {content}
        </Typography>
        <Grid
          container
          sx={{ marginTop: "48px" }}
          rowGap="20px"
          columnSpacing={{ xs: 1, sm: 3, md: 4 }}
        >
          {skills.map((skill, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Box
                  sx={{
                    padding: "10px 14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    padding: "20px 14px",
                    cursor: "pointer",
                    border: "1px solid #fff",
                    transition: "transform 0.5s",
                    "&:hover": {
                      background: "#0f0f0f",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    width={90}
                    height={90}
                    src={`/skills/${skills[index]}`}
                    alt="#"
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}

export default SkillCard;
