import { inject, injectable } from "tsyringe";
import { ICreateReceitaDTO } from "../dtos/ICreateReceitaDTO";
import { IReceitaRepository } from "../repositories/IReceitaRepository";
import redisClient from "./../../../config/redisClient";

@injectable()
export class CreateReceitaService {
  constructor(
    @inject("ReceitaRepository")
    private receitaRepository: IReceitaRepository
  ) {}

  async execute(data: ICreateReceitaDTO): Promise<ICreateReceitaDTO> {
    const receita = await this.receitaRepository.create(data);
    await redisClient.del("receitas"); // Limpa o cache de receitas ao adicionar nova entrada
    return receita;
  }
}
