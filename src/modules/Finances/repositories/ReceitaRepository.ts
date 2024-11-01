import { injectable } from "tsyringe";
import { prisma } from "../../../config/database";
import { ICreateReceitaDTO } from "../dtos/ICreateReceitaDTO";
import { IReceitaRepository } from "./IReceitaRepository";

@injectable()
export class ReceitaRepository implements IReceitaRepository {
  async create(data: ICreateReceitaDTO) {
    return await prisma.receita.create({
      data,
    });
  }

  async listByMonthAndYear(userId: number, mes: number, ano: number) {
    return await prisma.receita.findMany({
      where: {
        userId,
        data: {
          gte: new Date(`${ano}-${mes}-01`),
          lt: new Date(`${ano}-${mes}-31`),
        },
      },
    });
  }
}
