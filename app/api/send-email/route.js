
import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const { username, email, mobno, message } = await req.json();
    console.log("hhhhh")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,

      },
    });

    const mailOptions = {
      from:process.env.GMAIL_USER,
      to: process.env.GMAIL_TO,
      subject: `New Message from ${username}`,
      html: `
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobno}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
  
    console.error("Email error:", error);
    return Response.json({ error: "Email sending failed" }, { status: 500 });
  }
}