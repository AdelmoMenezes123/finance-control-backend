// src/routes/finances.routes.ts
import { Router } from "express";
import { DespesaController } from "../modules/Finances/controllers/DespesaController";
import { ReceitaController } from "../modules/Finances/controllers/ReceitaController";
import { authMiddleware } from "../shared/middlewares/authMiddleware";

const financesRoutes = Router();
const receitaController = new ReceitaController();
const despesaController = new DespesaController();

financesRoutes.post("/receitas", authMiddleware, receitaController.create);
financesRoutes.get("/receitas", authMiddleware, receitaController.list);

financesRoutes.post("/despesas", authMiddleware, despesaController.create);
financesRoutes.get("/despesas", authMiddleware, despesaController.list);

export { financesRoutes };
