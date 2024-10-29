import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";

export class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password, nome } = request.body;
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ email, password, nome });
    return response.status(201).json(user);
  }
}
