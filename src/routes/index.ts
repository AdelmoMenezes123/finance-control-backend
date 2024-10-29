import { Request, Response, Router } from "express";
import { UsersController } from "../modules/users/controllers/UsersController";

const routes = Router();
const usersController = new UsersController();

routes.post("/users", (request: Request, response: Response) => usersController.create(request, response));

export { routes };
