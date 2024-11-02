// Registra as dependências com o Tsyringe
import { container } from "tsyringe";
import { IReceitaRepository } from "../../modules/Finances/repositories/IReceitaRepository";
import { ReceitaRepository } from "../../modules/Finances/repositories/ReceitaRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { PrismaUsersRepository } from "../../modules/users/repositories/PrismaUsersRepository";

// Registrando o repositório de usuários
container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository);
container.registerSingleton<IReceitaRepository>("ReceitaRepository", ReceitaRepository);
