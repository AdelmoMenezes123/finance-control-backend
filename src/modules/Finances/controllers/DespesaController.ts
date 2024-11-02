import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDespesaService } from "../services/CreateDespesaService";
import { ListDespesasService } from "../services/ListDespesasService";

export class DespesaController {
  async create(req: Request, res: Response): Promise<Response> {
    const { descricao, valor, data, categoria } = req.body;
    const userId = req["user"].id;

    const createDespesa = container.resolve(CreateDespesaService);

    const despesa = await createDespesa.execute({
      descricao,
      valor,
      data,
      categoria,
      userId,
    });

    return res.status(201).json(despesa);
  }

  async list(req: Request, res: Response): Promise<Response> {
    const { mes, ano } = req.query;
    const userId = req["user"].id;

    const listDespesas = container.resolve(ListDespesasService);

    const despesas = await listDespesas.execute(userId, Number(mes), Number(ano));

    return res.json(despesas);
  }
}
