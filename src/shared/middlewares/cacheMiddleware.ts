import { NextFunction, Request, Response } from "express";
import redisClient from "../../config/redisClient";

export const cacheMiddleware = (key: string, duration: number) => async (req: Request, res: Response, next: NextFunction) => {
  const cachedData = await redisClient.get(key);
  if (cachedData) {
    console.log("Respondendo com cache");
    return res.json(JSON.parse(cachedData));
  }

  const originalSend = res.json.bind(res);
  res.json = (data: any) => {
    redisClient.setex(key, duration, JSON.stringify(data));
    return originalSend(data);
  };

  next();
};
