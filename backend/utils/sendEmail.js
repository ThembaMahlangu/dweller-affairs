import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

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
    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          extName: ".handlebars",
          partialsDir: "./views",
          defaultLayout: false,
        },
        viewPath: "./views",
        extName: ".handlebars",
      })
    );
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject,
      template: "verifyEmail",
      context: {
        token: text,
      },
    });
    console.log("email sent");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};
