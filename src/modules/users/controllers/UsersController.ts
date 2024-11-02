import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { CreateUserService } from "../services/CreateUserService";
import { GetUserByEmailService } from "../services/GetUserByEmailService";
import { UserSchema } from "./../../../validations/userValidation";
import { AuthService } from "./../../services/AuthService";

export class UsersController {
  private authService: AuthService;

  constructor() {
    this.authService = container.resolve(AuthService);
  }

  // Método para registrar um novo usuário
  async register(request: Request, response: Response): Promise<Response> {
    try {
      // Validando dados
      const usuarioData = UserSchema.parse(request.body);

      // Obter o serviço e criar a despesa
      const obterUserService = container.resolve(GetUserByEmailService);
      const createUserService = container.resolve(CreateUserService);

      // Verifica se o usuário já existe
      const existingUser = await obterUserService.execute(usuarioData.email);
      if (existingUser) {
        return response.status(400).json({ message: "Email já cadastrado!" });
      }

      // Criptografa a senha e cria o usuário
      const hashedPassword = await this.authService.hashPassword(usuarioData.password);
      usuarioData.password = hashedPassword;
      const user = createUserService.execute(usuarioData);

      return response.status(201).json({ user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map((err) => err.message);
        return response.status(400).json({ errors });
      }
      return response.status(500).json({ error: "Erro ao criar despesa" });
    }
  }

  // Método para login
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const obterUserService = container.resolve(GetUserByEmailService);

    const user = await obterUserService.execute(email);
    if (!user || !(await this.authService.comparePassword(password, user.password))) {
      return response.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = this.authService.generateToken(user);
    return response.json({ token });
  }
}
