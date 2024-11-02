import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { CreateDespesaService } from "../services/CreateDespesaService";
import { ListDespesasService } from "../services/ListDespesasService";
import { ReceitaSchema } from "./../../../validations/financeValidation";

export class DespesaController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      // Validando dados
      req.body.userId = req["user"].id;
      const receitaData = ReceitaSchema.parse(req.body);

      // Obter o serviço e criar a receita
      const createDespesa = container.resolve(CreateDespesaService);
      const despesa = await createDespesa.execute(receitaData);

      return res.status(201).json(despesa);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => err.message);
        return res.status(400).json({ errors });
      }
      return res.status(500).json({ error: "Erro ao criar despesa" });
    }

    // const { descricao, valor, data, categoria } = req.body;
  }

  async list(req: Request, res: Response): Promise<Response> {
    const { mes, ano } = req.query;
    const userId = req["user"].id;

    const listDespesas = container.resolve(ListDespesasService);

    const despesas = await listDespesas.execute(userId, Number(mes), Number(ano));

    return res.json(despesas);
  }
}
