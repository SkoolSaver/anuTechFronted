import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

// ----------------------------------------------------------------------

export default function UserCard({ ...user }) {
  const {
    name,

    role,

    avatarUrl,
    experience,
  } = user;

  return (
    <Card
      sx={{
        textAlign: "center",
        bgcolor: "black",
        border: "1px solid white",
        transition: "transform 0.3s ease",
        borderRadius: 2,
        "&:hover": {
          background: "#0f0f0f",
          transform: "scale(1.05)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Avatar
          alt={name}
          src={`/asset ${user.id}.png`}
          sx={{
            width: 100,
            height: 100,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: "auto",
            // position: "absolute",
          }}
        />
      </Box>

      <ListItemText
        sx={{ mt: 7, mb: 1, color: "white" }}
        primary={name}
        secondary={role}
        primaryTypographyProps={{ typography: "subtitle1" }}
        secondaryTypographyProps={{
          component: "span",
          mt: 0.5,
          color: "primary",
        }}
      />
      <Typography variant="h6" color="warning" fontSize={18}>
        {experience}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 2.5 }}
      >
        <IconButton
          sx={{
            color: "white",
            "&:hover": {
              bgcolor: "red",
            },
          }}
        >
          {/* <Iconify icon={social.icon} /> */}
        </IconButton>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />
    </Card>
  );
}
