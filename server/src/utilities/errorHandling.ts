import type { Request as req, Response as res, NextFunction as next } from "express";

export const newError = (errorMessage: string, errorCode: number) => {
  const newErr = new Error(errorMessage);
  //@ts-ignore
  newErr.statusCode = errorCode || 500;
  return newErr;
};

export const ErrorHandling = (error: Error, req: req, res: res, next: next) => {
  //@ts-ignore
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong in our server";
  res.status(status).json({ statusCode: status, message, ok: false, data: null });
};
