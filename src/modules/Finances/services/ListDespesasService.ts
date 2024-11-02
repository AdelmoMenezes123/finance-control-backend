// src/modules/finances/services/ListDespesasService.ts
import { inject, injectable } from "tsyringe";
import { ICreateDespesaDTO } from "../dtos/ICreateDespesaDTO";
import { IDespesaRepository } from "../repositories/IDespesaRepository";

@injectable()
export class ListDespesasService {
  constructor(
    @inject("DespesaRepository")
    private despesaRepository: IDespesaRepository
  ) {}

  async execute(userId: number, mes: number, ano: number): Promise<ICreateDespesaDTO[]> {
    return await this.despesaRepository.listByMonthAndYear(userId, mes, ano);
  }
}
