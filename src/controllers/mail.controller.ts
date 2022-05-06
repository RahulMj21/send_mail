import { NextFunction, Request, Response } from "express";
import BigPromise from "../utils/BigPromise";

class MailController {
  sendMail = BigPromise(
    async (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({
        success: true,
        message: "mail has been sent",
      });
    }
  );
}

export default new MailController();
