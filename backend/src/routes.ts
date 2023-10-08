import { Router } from "express";
import { UserController } from "./controller/UserController";
import { FormatoController } from "./controller/FormatoController";
import { TemplateController } from "./controller/TemplateController";

const routes = Router();
const UsuarioController = new UserController();
const FormatController = new FormatoController();
const TemplateControl = new TemplateController();


// usuarios
routes.get("/users", UsuarioController.all);
routes.get("/users/:matricula", UsuarioController.one);
routes.post("/users", UsuarioController.create);
routes.delete("/users/:matricula", UsuarioController.remove);
routes.post("/login", UsuarioController.auth);

// formato
routes.get("/formato", FormatController.all);
routes.post("/formato", FormatController.create);

// template
routes.post("/template", TemplateControl.create);
routes.get("/template", TemplateControl.all);
routes.get("/template/:id", TemplateControl.one);

export default routes;
