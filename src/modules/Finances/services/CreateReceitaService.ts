import { inject, injectable } from "tsyringe";
import { ICreateReceitaDTO } from "../dtos/ICreateReceitaDTO";
import { IReceitaRepository } from "../repositories/IReceitaRepository";

@injectable()
export class CreateReceitaService {
  constructor(
    @inject("ReceitaRepository")
    private receitaRepository: IReceitaRepository
  ) {}

  async execute(data: ICreateReceitaDTO): Promise<ICreateReceitaDTO> {
    return await this.receitaRepository.create(data);
  }
}
