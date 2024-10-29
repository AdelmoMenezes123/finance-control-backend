// Registra as dependências com o Tsyringe
import { container } from "tsyringe";
import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";
import { PrismaUsersRepository } from "../modules/users/repositories/PrismaUsersRepository";

// Registrando o repositório de usuários
container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository);
