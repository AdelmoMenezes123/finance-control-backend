import { inject, injectable } from "tsyringe";
import { ICreateReceitaDTO } from "../dtos/ICreateReceitaDTO";
import { IReceitaRepository } from "../repositories/IReceitaRepository";

@injectable()
export class ListReceitasService {
  constructor(
    @inject("ReceitaRepository")
    private receitaRepository: IReceitaRepository
  ) {}

  async execute(userId: number, mes: number, ano: number): Promise<ICreateReceitaDTO[]> {
    return await this.receitaRepository.listByMonthAndYear(userId, mes, ano);
  }
}
