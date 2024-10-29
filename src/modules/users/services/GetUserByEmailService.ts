import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class GetUserByEmailService {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {}

  async execute(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }
}
