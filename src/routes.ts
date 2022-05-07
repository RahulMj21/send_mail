import { Router } from "express";
import Mail from "./controllers/mail.controller";
import validateResources from "./middlewares/validateResources";
import { MailSchema } from "./schema/mail.schema";

const router = Router();

router.route("/send").post(validateResources(MailSchema), Mail.sendMail);

export default router;
