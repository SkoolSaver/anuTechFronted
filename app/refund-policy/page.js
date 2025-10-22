"use client";
import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function RefundPolicyPage() {
  return (
    <Box sx={{ background: '#ffffff', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" mb={3}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', color: 'inherit' }}>
            <IconButton aria-label="back">
              <ArrowBackIcon />
            </IconButton>
          </a>
          <Typography variant="h4" ml={1} fontWeight={700}>
            Cancellation & Refund Policy
          </Typography>
        </Box>

        <Box sx={{ p: 3, background: '#fff', borderRadius: 2 }}>
          <Typography variant="h6" color="textSecondary">
            Refund & Cancellation Policy
          </Typography>

          <Typography paragraph mt={2}>
            <strong>Services:</strong>
            Amount once paid is non-refundable, except in cases of duplicate payment or verified technical/access issues. Refund requests must be made on the same day of payment by emailing gopi@skoolsaver.com.
          </Typography>

          <Typography paragraph>
            <strong>Products:</strong>
            Returns or replacements are accepted within 7 days of delivery only if the product is damaged, defective, or incorrect. Approved refunds will be processed within 10–15 working days to the original payment method.
          </Typography>

          <Typography paragraph>
            <strong>Cancellations:</strong>
            No cancellation is allowed once the service has been initiated or the product dispatched.
          </Typography>

          <Typography paragraph>
            For all support, please contact gopi@skoolsaver.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
