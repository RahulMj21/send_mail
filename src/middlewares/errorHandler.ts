import { NextFunction, Request, Response } from "express";

const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = {
    status: 500,
    message: "Oops..something went wrong",
  };

  if (err?.status) {
    data.status = err.status;
    data.message = err.message;
  }

  return res.status(data.status).json({
    success: false,
    message: data.message,
  });
};

export default errorHandler;
