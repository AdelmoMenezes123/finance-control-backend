// src/routes/finances.routes.ts
import { Router } from "express";
import { ReceitaController } from "../modules/Finances/controllers/ReceitaController";
// import { DespesaController } from "../modules/finances/controllers/DespesaController";
import { authMiddleware } from "../shared/middlewares/authMiddleware";

const financesRouter = Router();
const receitaController = new ReceitaController();
// const despesaController = new DespesaController();

financesRouter.post("/receitas", authMiddleware, receitaController.create);
financesRouter.get("/receitas", authMiddleware, receitaController.list);

// financesRouter.post("/despesas", authMiddleware, despesaController.create);
// financesRouter.get("/despesas", authMiddleware, despesaController.list);

export { financesRouter };
