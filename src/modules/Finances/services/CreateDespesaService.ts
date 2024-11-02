import { inject, injectable } from "tsyringe";
import redisClient from "../../../config/redisClient";
import { ICreateDespesaDTO } from "../dtos/ICreateDespesaDTO";
import { IDespesaRepository } from "../repositories/IDespesaRepository";

@injectable()
export class CreateDespesaService {
  constructor(
    @inject("DespesaRepository")
    private despesaRepository: IDespesaRepository
  ) {}

  async execute(data: ICreateDespesaDTO): Promise<ICreateDespesaDTO> {
    const despesa = await this.despesaRepository.create(data);
    await redisClient.del("despesas"); // Limpa o cache de despesas ao adicionar nova entrada
    return despesa;
  }
}
