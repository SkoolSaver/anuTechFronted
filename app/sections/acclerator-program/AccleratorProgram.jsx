import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { popins } from "@/app/google-fonts/fonts";

const AccleratorProgram = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Page Title */}
      <Typography
        variant="h2"
        fontSize={40}
        fontWeight={700}
        textAlign="center"
        className={popins.className}
        sx={{ mb: 6, color: "white", textTransform: "uppercase" }}
      >
        Startup Accelerator Program
      </Typography>

      {/* Introduction */}
      <Typography
        variant="body1"
        sx={{ mb: 8, textAlign: "center", color: "gray", fontSize: 20 }}
      >
        Our Accelerator Program is designed to help startups and businesses
        scale rapidly with tailored resources, mentorship, funding, and a
        vast network of opportunities. <br /> We empower entrepreneurs to thrive in competitive markets!
      </Typography>

      {/* Program Details with Hover Effects */}
      <Box>
        {/* Mentorship & Guidance Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            1. Mentorship & Guidance
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            Our team of experienced mentors offers more than just advice—they
            provide tailored, strategic insights drawn from years of industry
            experience. Whether you're navigating the complexities of product
            development, go-to-market strategies, or scaling operations, our
            mentors stand by your side, guiding you through each critical phase
            of growth.
            <br />
            <br />
            <strong>What you can expect:</strong> One-on-one sessions, group
            workshops, and access to a wealth of knowledge that helps you turn
            your ideas into action. Our mentors will challenge your assumptions,
            push your limits, and help you unlock new possibilities for growth.
            Together, we'll create a roadmap tailored specifically for your
            business’s unique needs and goals.
            <br />
            <br />
            <em>
              "Success is best achieved with guidance—our mentors help you
              chart the path to success."
            </em>
          </Typography>
        </Box>

        {/* Funding Opportunities Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            2. Funding Opportunities
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            Finding the right investors can be a game-changer for your startup,
            and we’re here to help you connect with the right ones. Through our
            accelerator program, you will have access to a diverse pool of
            investors ranging from venture capitalists to angel investors who
            are actively looking for high-potential startups like yours.
            <br />
            <br />
            <strong>How we support you:</strong> We provide guidance on creating
            investor-ready pitches, financial projections, and a compelling
            business case. You’ll get introductions to top-tier investors,
            opportunities to present at exclusive pitch events, and access to
            grant programs and alternative funding.
            <br />
            <br />
            <em>
              "Funding your dreams is just the beginning—we help you sustain and
              scale."
            </em>
          </Typography>
        </Box>

        {/* Networking Opportunities Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            3. Networking Opportunities
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            Building a successful business is not just about having a great
            product—it's about having the right people in your corner. Our
            accelerator program connects you with a vibrant ecosystem of
            entrepreneurs, industry experts, investors, and potential partners
            to create invaluable connections that open doors to future
            collaborations and partnerships.
            <br />
            <br />
            <strong>What you’ll gain:</strong> Access to exclusive networking
            events, industry conferences, and one-on-one meetings with thought
            leaders who can provide critical insights into emerging trends and
            market opportunities.
            <br />
            <br />
            <em>
              "Your network is your net worth—accelerate your growth with the
              power of strategic connections."
            </em>
          </Typography>
        </Box>

        {/* Application Process Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            4. Application Process
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            Joining our Accelerator Program is easy and straightforward. We
            believe in a transparent and streamlined process, designed to get
            you started as quickly as possible. Once you apply, we review your
            application and respond within 48 hours with feedback and the next
            steps.
            <br />
            <br />
            <strong>Here’s how it works:</strong> Submit your startup’s
            information, including your product details, target market, and
            current growth stage. Our team will schedule a call with you to
            discuss your startup’s fit for the program and provide further
            insights into what to expect.
            <br />
            <br />
            <em>
              "Your application is the first step toward transforming your
              startup’s future—let’s get started!"
            </em>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AccleratorProgram;
