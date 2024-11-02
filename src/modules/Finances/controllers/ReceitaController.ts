import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { CreateReceitaService } from "../services/CreateReceitaService";
import { ListReceitasService } from "../services/ListReceitasService";
import { ReceitaSchema } from "./../../../validations/financeValidation";
export class ReceitaController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      // Validando dados
      req.body.userId = req.userId;
      const receitaData = ReceitaSchema.parse(req.body);

      // Obter o serviço e criar a reseita
      const createReceita = container.resolve(CreateReceitaService);
      const receita = await createReceita.execute(receitaData);

      return res.status(201).json(receita);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      return res.status(500).json({ error: "Erro ao criar receita" });
    }
  }

  async list(req: Request, res: Response): Promise<Response> {
    const { mes, ano } = req.query;
    const userId = req.userId;

    const listReceitas = container.resolve(ListReceitasService);

    const receitas = await listReceitas.execute(userId, Number(mes), Number(ano));
    return res.json(receitas);
  }
}
