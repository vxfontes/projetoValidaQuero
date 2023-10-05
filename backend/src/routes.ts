import { Router } from "express";
import { UserController } from "./controller/UserController";
import { FormatoController } from "./controller/FormatoController";

const routes = Router();
const UsuarioController = new UserController()
const FormatController = new FormatoController()


// usuarios
routes.get("/users", UsuarioController.all);
routes.get("/users/:matricula", UsuarioController.one);
routes.post("/users", UsuarioController.create);
routes.delete("/users/:matricula", UsuarioController.remove);
routes.post("/login", UsuarioController.auth);

// formato
routes.get("/formato", FormatController.all);
routes.post("/formato", FormatController.create);

export default routes;
