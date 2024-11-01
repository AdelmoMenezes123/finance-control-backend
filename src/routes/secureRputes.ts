import { Router } from "express";
import { authMiddleware } from "../shared/middlewares/authMiddleware";

const secureRoutes = Router();

secureRoutes.use(authMiddleware);

secureRoutes.get("/dashboard", (req, res) => {
  res.json({ message: "Acesso concedido" });
});

export { secureRoutes };
