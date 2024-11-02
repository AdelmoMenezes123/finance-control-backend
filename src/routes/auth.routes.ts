import { Router } from "express";
import { UsersController } from "../modules/users/controllers/UsersController";

const authRoutes = Router();
const usersController = new UsersController();

authRoutes.post("/register", (req, res) => usersController.register(req, res));
authRoutes.post("/login", (req, res) => usersController.login(req, res));

export { authRoutes };
