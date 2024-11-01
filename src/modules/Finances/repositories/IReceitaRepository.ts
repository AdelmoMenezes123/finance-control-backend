import { ICreateReceitaDTO } from "../dtos/ICreateReceitaDTO";

export interface IReceitaRepository {
  create(data: ICreateReceitaDTO): Promise<ICreateReceitaDTO>;
  listByMonthAndYear(userId: number, mes: number, ano: number): Promise<ICreateReceitaDTO[]>;
}
