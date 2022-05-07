import { object, string, TypeOf } from "zod";

export const MailSchema = object({
  body: object({
    from: string({ required_error: "sender is required" })
      .min(3, "sender must contain atleast 3 characters")
      .max(20, "sender must contain less than 20 characters"),
    to: string({ required_error: "receiver email is required" }).email(
      "please provide a valid receiver email"
    ),
    subject: string({ required_error: "subject is required" })
      .min(3, "subject must contain atleast 3 characters")
      .max(40, "subject must contain less than 40 characters"),
    html: string({ required_error: "html is required" }),
  }),
});

export type MailInput = TypeOf<typeof MailSchema>;
