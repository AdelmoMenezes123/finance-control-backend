import { prisma } from "../../../config/database";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  async findById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async create(data: User): Promise<User> {
    return prisma.user.create({ data });
  }
}
