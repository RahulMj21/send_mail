import nodemailer from "nodemailer";

const submitMail = async ({
  from,
  to,
  subject,
  html,
}: {
  from: string;
  to: string;
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
      to,
      subject,
      html,
    });

    return info;
  } catch (error: any) {
    return false;
  }
};

export default submitMail;
