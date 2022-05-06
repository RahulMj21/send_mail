import { Router } from "express";
import Mail from "./controllers/mail.controller";

const router = Router();

router.route("/send").post(Mail.sendMail);

export default router;
