import { Request } from "express";
const Request: Request;
declare module "express-serve-static-core" {
  interface Request {
    userId?: number; // Adiciona o campo user ao tipo Request
  }
}
