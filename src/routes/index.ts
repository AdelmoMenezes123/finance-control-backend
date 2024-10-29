import { Router } from "express";
import { UsersController } from "../modules/users/controllers/UsersController";

const routes = Router();
const usersController = new UsersController();

routes.post("/users", (req, res) => usersController.register(req, res));
routes.post("/login", (req, res) => usersController.login(req, res));

export { routes };
