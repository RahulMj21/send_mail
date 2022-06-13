class CustomError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message = "bad request", status = 400) {
    return new CustomError(status, message);
  }
}

export default CustomError;
