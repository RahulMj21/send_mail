import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import CustomError from "../utils/CustomErrorHandler";

const validateResources =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      const error = JSON.parse(err.message);
      return next(new CustomError(422, error[0].message));
    }
  };

export default validateResources;
