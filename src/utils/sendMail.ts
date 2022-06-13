import nodemailer from "nodemailer";

const submitMail = async ({
  from,
  subject,
  html,
}: {
  from: string;
  subject: string;
  html: string;
}) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = transport.sendMail({
      from,
      to: process.env.MAIL_USER,
      subject,
      html,
    });

    return info;
  } catch (error: any) {
    return false;
  }
};

export default submitMail;
