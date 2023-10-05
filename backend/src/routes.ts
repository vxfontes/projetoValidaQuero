import { Router } from "express";
import { UserController } from "./controller/UserController";

const routes = Router();
const UsuarioController = new UserController()

routes.get("/users", UsuarioController.all);
routes.get("/users/:matricula", UsuarioController.one);
routes.post("/users", UsuarioController.create);
routes.delete("/users/:matricula", UsuarioController.remove);
routes.post("/login", UsuarioController.auth);

export default routes;
