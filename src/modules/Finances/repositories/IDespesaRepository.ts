import { ICreateDespesaDTO } from "../dtos/ICreateDespesaDTO";

export interface IDespesaRepository {
  create(data: ICreateDespesaDTO): Promise<ICreateDespesaDTO>;
  listByMonthAndYear(userId: number, mes: number, ano: number): Promise<ICreateDespesaDTO[]>;
}
