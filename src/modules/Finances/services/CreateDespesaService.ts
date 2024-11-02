import { inject, injectable } from "tsyringe";
import { ICreateDespesaDTO } from "../dtos/ICreateDespesaDTO";
import { IDespesaRepository } from "../repositories/IDespesaRepository";

@injectable()
export class CreateDespesaService {
  constructor(
    @inject("DespesaRepository")
    private despesaRepository: IDespesaRepository
  ) {}

  async execute(data: ICreateDespesaDTO): Promise<ICreateDespesaDTO> {
    return await this.despesaRepository.create(data);
  }
}
