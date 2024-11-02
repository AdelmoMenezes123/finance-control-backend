// src/routes/finances.routes.ts
import { Router } from "express";
import { DespesaController } from "../modules/Finances/controllers/DespesaController";
import { ReceitaController } from "../modules/Finances/controllers/ReceitaController";
import { authMiddleware } from "../shared/middlewares/authMiddleware";
import { cacheMiddleware } from "../shared/middlewares/cacheMiddleware";
import { validateInput } from "../shared/middlewares/validateInput";
import { DespesaSchema, ReceitaSchema } from "./../validations/financeValidation";

const financesRoutes = Router();
const receitaController = new ReceitaController();
const despesaController = new DespesaController();

financesRoutes.post("/receitas", authMiddleware, validateInput(ReceitaSchema), receitaController.create);
financesRoutes.get("/receitas", authMiddleware, cacheMiddleware("receitas", 60), receitaController.list);

financesRoutes.post("/despesas", authMiddleware, validateInput(DespesaSchema), despesaController.create);
financesRoutes.get("/despesas", authMiddleware, cacheMiddleware("despesas", 60), despesaController.list);

export { financesRoutes };
