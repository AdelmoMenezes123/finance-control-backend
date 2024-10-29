import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class CreateUserService {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {}

  async execute(data: User): Promise<User> {
    return this.usersRepository.create(data);
  }
}
