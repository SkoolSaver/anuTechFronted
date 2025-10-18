"use client";
import React from "react";
import { Box, Container, IconButton, Typography, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const tncSrc = "/tnc.pdf";

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', top: 8, left: 8, zIndex: 50 }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', color: 'inherit' }}>
          <IconButton aria-label="back" sx={{ bgcolor: 'rgba(255,255,255,0.85)' }}>
            <ArrowBackIcon />
          </IconButton>
        </a>
      </Box>

      <iframe
        src={tncSrc}
        title="Terms & Conditions PDF"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
      />
    </Box>
  );
}
