import { NextFunction, Request, Response } from "express";
import { MailInput } from "../schema/mail.schema";
import BigPromise from "../utils/BigPromise";
import CustomError from "../utils/CustomErrorHandler";
import submitMail from "../utils/sendMail";

class MailController {
  healthCheck = BigPromise(
    async (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json({
        success: true,
        message: "all good..",
      });
    }
  );
  sendMail = BigPromise(
    async (
      req: Request<{}, {}, MailInput["body"]>,
      res: Response,
      next: NextFunction
    ) => {
      const info = await submitMail(req.body);
      if (!info) return next(new CustomError(500, "email sending error"));

      return res.status(200).json({
        success: true,
        message: "mail has been sent",
      });
    }
  );
}

export default new MailController();
