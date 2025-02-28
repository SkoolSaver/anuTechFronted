"use client"; 

import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import UserCard from "./user-card/user-card";
import { popins } from "@/app/google-fonts/fonts";
import { useRouter } from "next/navigation";

const OurTeamList = () => {
  const router = useRouter(); 

  const handleViewAllClick = () => {
    router.push("/team"); 
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5, px: 2 }}>
      <Typography
        textAlign="center"
        variant="h2"
        fontSize={30}
        color="white"
        className={popins.className}
        fontWeight={600}
      >
        Our Founding Team
      </Typography>
      <Box
        my={4}
        gap={4}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
      >
        {[
          {
            name: "Jawahar Reddy",
            id: 12,
            image: "/images/jawahar-reddy.jpg",
            role: "Chief Executive Officer",
            experience: "4+ years",
          },
          {
            name: "G. Gopi",
            id: 13,
            image: "/images/gopi.jpg",
            role: "Managing Director",
            experience: "3+ years",
          },
          {
            name: "Shubham Dubey",
            id: 14,
            image: "/images/shubham-dubey.jpg",
            role: "Chief Technology Officer",
            experience: "6+ years",
          },
          {
            name: "Rishi Preetham Sanagala",
            id: 15,
            image: "/images/rishi.jpg",
            role: "Chief Operations Officer",
            experience: "3+ years",
          },
        ].map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          size="large"
          variant="contained"
          sx={{ bgcolor: "white", color: "black" }}
          onClick={handleViewAllClick}
        >
          View All Team
        </Button>
      </Box>
    </Container>
  );
};

export default OurTeamList;
