
// import nodemailer from "nodemailer";
// export async function POST(req) {
//   try {
//     const { username, email, mobno, message } = await req.json();
//     console.log("Node Mailer : ",email);
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.GMAIL_USER,
//         clientId: process.env.GMAIL_CLIENT_ID,
//         clientSecret: process.env.GMAIL_CLIENT_SECRET,
//         refreshToken: process.env.GMAIL_REFRESH_TOKEN,

//       },
//     });

//     const mailOptions = {
//       from:process.env.GMAIL_USER,
//       // to: process.env.GMAIL_TO,
//       to:email,
//       subject: `New Message from ${username}`,
//       html: `
//         <p><strong>Name:</strong> ${username}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${mobno}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//     return Response.json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
  
//     console.error("Email error:", error);
//     return Response.json({ error: "Email sending failed" }, { status: 500 });
//   }
// }

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { username, email, mobno, message } = await req.json();

    console.log("Sending emails to:", email, "and owner");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Use App Password
      },
    });

    // Email to Owner
    const ownerMail = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Sends to yourself
      subject: `New Contact Form Submission from ${username}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobno}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Email to User (Confirmation)
    const userMail = {
      from: process.env.GMAIL_USER,
      to: email, // Send confirmation to user
      subject: `Thank you for contacting SkoolSaver`,
      html: `
        <p>Hi ${username},</p>
        <p>Thank you for reaching out to us. We have received your message and our team will get back to you shortly.</p>
        <hr />
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,<br/>SkoolSaver Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMail);
    await transporter.sendMail(userMail);

    return Response.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}
