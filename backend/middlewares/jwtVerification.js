import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandler";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return next(errorHandler(401, "You are not authenticated"));
};
