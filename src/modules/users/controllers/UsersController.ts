import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";
import { GetUserByEmailService } from "../services/GetUserByEmailService";
import { AuthService } from "./../../services/AuthService";

export class UsersController {
  private authService: AuthService;

  constructor() {
    this.authService = container.resolve(AuthService);
  }

  // Método para registrar um novo usuário
  async register(request: Request, response: Response): Promise<Response> {
    const { email, password, nome } = request.body;

    const obterUserService = container.resolve(GetUserByEmailService);
    const createUserService = container.resolve(CreateUserService);

    // Verifica se o usuário já existe
    const existingUser = await obterUserService.execute(email);
    if (existingUser) {
      return response.status(400).json({ message: "Email já cadastrado!" });
    }

    // Criptografa a senha e cria o usuário
    const hashedPassword = await this.authService.hashPassword(password);
    const user = createUserService.execute({ nome, email, password: hashedPassword });

    return response.status(201).json({ user });
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
