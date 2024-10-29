import { User } from "../entities/User";

export interface IUsersRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: User): Promise<User>;
}
