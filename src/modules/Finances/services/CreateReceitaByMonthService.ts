import { PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";

@injectable()
export class CreateReceitaByMonthService {
  constructor(private prisma: PrismaClient) {}

  async getReceitasByMonth(userId: number, month: number, year: number) {
    return this.prisma.receita.findMany({
      where: {
        userId,
        data: {
          gte: new Date(year, month - 1, 1),
          lte: new Date(year, month, 0),
        },
      },
    });
  }
}
