import nodemailer from "nodemailer";
export const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: process.env.EMAIL_PORT,
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject,
      text: HTML_TEMPLATE(text),
    });
    console.log("email sent");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};
