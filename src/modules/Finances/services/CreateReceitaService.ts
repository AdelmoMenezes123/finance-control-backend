import { PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";

@injectable()
export class CreateReceitaService {
  constructor(private prisma: PrismaClient) {}

  async createReceita(userId: number, descricao: string, valor: number, data: Date, categoria: string) {
    return this.prisma.receita.create({
      data: {
        userId,
        descricao,
        valor,
        data,
        categoria,
      },
    });
  }
}
