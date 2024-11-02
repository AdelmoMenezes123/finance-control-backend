import { Despesa } from "@prisma/client";
import { injectable } from "tsyringe";
import { prisma } from "../../../config/database";
import { ICreateDespesaDTO } from "../dtos/ICreateDespesaDTO";
import { IDespesaRepository } from "./IDespesaRepository";

@injectable()
export class DespesaRepository implements IDespesaRepository {
  async create(data: ICreateDespesaDTO): Promise<Despesa> {
    return await prisma.despesa.create({
      data,
    });
  }

  async listByMonthAndYear(userId: number, mes: number, ano: number): Promise<Despesa[]> {
    return await prisma.despesa.findMany({
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
