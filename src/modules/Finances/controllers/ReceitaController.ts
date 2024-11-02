import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReceitaService } from "../services/CreateReceitaService";
import { ListReceitasService } from "../services/ListReceitasService";

export class ReceitaController {
  async create(req: Request, res: Response): Promise<Response> {
    const { descricao, valor, data, categoria } = req.body;
    const userId = req["user"].id;

    const createReceita = container.resolve(CreateReceitaService);

    const receita = await createReceita.execute({
      descricao,
      valor,
      data,
      categoria,
      userId,
    });

    return res.status(201).json(receita);
  }

  async list(req: Request, res: Response): Promise<Response> {
    const { mes, ano } = req.query;
    const userId = req["user"].id;

    const listReceitas = container.resolve(ListReceitasService);

    const receitas = await listReceitas.execute(userId, Number(mes), Number(ano));

    return res.json(receitas);
  }
}
