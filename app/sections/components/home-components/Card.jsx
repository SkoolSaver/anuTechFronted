import { Box, Grid, Link, Stack, Typography } from "@mui/material";

function Card({ header, content, cardDetails, hideReadMore }) {
  return (
    <Stack
      sx={{
        padding: "40px 24px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        alignItems: "center",
        margin: "24px auto",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "700",
          fontSize: { xs: "24px", sm: "28px", md: "32px" },
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {header}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px" },
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
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {cardDetails.lists.map((data, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  background: "#131313b8",
                  padding: "32px 0px",
                }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {data.icon}
                </Box>

                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {data.header}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#81868f",
                    lineHeight: "1.8",
                    maxWidth: "80%",
                    textAlign: "center",
                  }}
                >
                  {data.content}
                </Typography>

                {hideReadMore ? null : (
                  <Link
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "#6674c0",
                      marginTop: "auto",
                    }}
                  >
                    Read More
                  </Link>
                )}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default Card;
