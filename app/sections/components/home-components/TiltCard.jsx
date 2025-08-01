"use client";

import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRef, useState } from "react";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";

// Helper functions for tilt effect
const tiltCard = (e, card, setMouse, gradientColor) => {
  const { clientX, clientY } = e;
  const { width, height, top, left } = card.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  const deltaX = (clientX - centerX) / width;
  const deltaY = (clientY - centerY) / height;

  setMouse({
    x: clientX,
    y: clientY,
  });

  const tiltX = deltaY * 15; // Customize tilt sensitivity
  const tiltY = -deltaX * 15; // Customize tilt sensitivity
  card.style.transform = `perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  card.style.transition = "transform 0.1s ease-out";
};

const resetTiltCard = (card) => {
  card.style.transform = "perspective(1500px) rotateX(0deg) rotateY(0deg)";
  card.style.transition = "transform 0.3s ease-out";
};

// Styled components
const AnimatedList = styled(List)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`;

function TiltCard({ isReverse, data, gradientColor }) {
  const card = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <Stack
      ref={card}
      component="section"
      onMouseMove={(e) => tiltCard(e, card.current, setMouse, gradientColor)}
      onMouseLeave={() => resetTiltCard(card.current)}
      sx={{
        maxWidth: "1056px",
        margin: "24px auto",
        padding: { xs: "32px 16px", md: "60px 32px" },
        borderRadius: "10px",
        bgcolor: "black",
        display: "flex",
        gap: { xs: "24px", md: "80px" },
        flexDirection: {
          xs: "column",
          md: `${isReverse ? "row" : "row-reverse"}`,
        },
        justifyContent: "center",
        alignItems: "center",
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease",
        overflow: "hidden",
        marginBottom: "120px",
      }}
    >
      {/* Left Side List */}
      <Stack
        width={{ xs: "100%", md: "45%" }}
        sx={{ overflowY: "scroll", maxHeight: "340px", scrollbarWidth: "none" }}
      >
        <AnimatedList>
          {data.leftSider.lists.map((e, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
                borderBottom: "1px solid #7273744a",
                paddingBottom: "16px",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  padding: "8px",
                  border: "1px solid #fff",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {e.icon}
              </Box>
              <Typography
                className={popins.className}
                sx={{
                  marginTop: "4px",
                  fontWeight: "700",
                  fontSize: "16px",
                  color: "white",
                }}
              >
                {e.header}
              </Typography>
              <Typography
                className={nunitoSans.className}
                sx={{ fontSize: "14px", color: "#81868f", lineHeight: "1.2" }}
              >
                {e.content}
              </Typography>
            </ListItem>
          ))}
        </AnimatedList>
      </Stack>

      {/* Right Side Content */}
      <Stack width={{ xs: "100%", md: "55%" }} display="flex">
        <Typography sx={{ marginBottom: "8px", color: "white" }}>
          {data.rightSide.name}
        </Typography>

        <Typography
          className={popins.className}
          sx={{
            marginBottom: "8px",
            fontWeight: "700",
            fontSize: "24px",
            color: "white",
          }}
        >
          {data.rightSide.header}
        </Typography>

        <Typography
          className={nunitoSans.className}
          sx={{ color: "white" }}
          fontSize={16}
          lineHeight={1.4}
        >
          {data.rightSide.content}
        </Typography>

        <Button
          sx={{
            maxWidth: "30%",
            borderRadius: "24px",
            padding: "8px 4px",
            marginTop: "24px",
            background: "#6674c0",
          }}
          variant="contained"
        >
          Read More
        </Button>
      </Stack>

      {/* Gradient Effect */}
      <Box
        sx={{
          background: `radial-gradient(${gradientColor}, transparent, transparent)`,
          width: "500px",
          filter: "blur(100px)",
          height: "300px",
          left: `${mouse.x - 150}px`,
          top: `${mouse.y - 150}px`,
          transition: "transform 0.1s ease-out",
          position: "absolute",
          pointerEvents: "none",
        }}
      ></Box>
    </Stack>
  );
}

export default TiltCard;
