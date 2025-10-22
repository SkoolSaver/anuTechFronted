"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function TermsConditionsPage() {
  return (
    <Box sx={{ background: '#ffffff', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" mb={3}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', color: 'inherit' }}>
            <ArrowBackIcon />
          </a>
          <Typography variant="h4" ml={1} fontWeight={700}>
            Terms & Conditions
          </Typography>
        </Box>

        <Box sx={{ p: 3, background: '#fff', borderRadius: 2 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Effective Date: 22/10/2025
          </Typography>

          <Typography paragraph mt={2}>
            Welcome to Skoolsaver Private Limited (“we”, “us”, “our”). By using our website [www.skoolsaver.com] or purchasing our products/programs, you agree to the following terms:
          </Typography>

          <Typography paragraph>
            <strong>Use:</strong> You must be 18+ or use under guardian supervision. Use our site only for lawful purposes.
          </Typography>

          <Typography paragraph>
            <strong>Products & Services:</strong> We sell both physical products and digital programs. Prices and details may change at any time without notice.
          </Typography>

          <Typography paragraph>
            <strong>Payments:</strong> All payments are processed securely through our online payment system in the currency selected by you.
          </Typography>

          <Typography paragraph>
            <strong>Delivery:</strong> Product delivery timelines are estimated and may vary.
          </Typography>

          <Typography paragraph>
            <strong>Ownership:</strong> All service materials, logos, and content belong to Skoolsaver Private Limited. Do not copy or share without permission.
          </Typography>

          <Typography paragraph>
            <strong>Refunds & Cancellations:</strong> Covered under our <a href="/refund-policy">Refund Policy</a>.
          </Typography>

          <Typography paragraph>
            <strong>Liability:</strong> We are not liable for indirect, incidental, or consequential losses arising from your use of our website.
          </Typography>

          <Typography paragraph>
            <strong>Changes:</strong> We may update these Terms anytime. Please check this page periodically.
          </Typography>

          <Typography paragraph>
            For any queries, contact gopi@skoolsaver.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
