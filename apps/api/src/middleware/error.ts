import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Internal Server Error",
    name: err.name,
    message: err.message,
  });
};
