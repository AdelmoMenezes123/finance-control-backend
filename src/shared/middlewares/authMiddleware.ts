import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { AuthService } from "./../../modules/services/AuthService";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authService = container.resolve(AuthService);

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = authService.verifyToken(token);
    req["user"] = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
