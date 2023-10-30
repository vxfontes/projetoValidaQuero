import { Router } from "express";
import { UserController } from "./controller/UserController";
import { FormatoController } from "./controller/FormatoController";
import { TemplateController } from "./controller/TemplateController";
import { ArquivoController } from "./controller/ArquivoController";
import { UserPerfilController } from "./controller/UserPerfilController";

const routes = Router();
const UsuarioController = new UserController();
const FormatController = new FormatoController();
const TemplateControl = new TemplateController();
const ArquivoControl = new ArquivoController();
const PerfilController = new UserPerfilController();


// usuarios
routes.get("/users", UsuarioController.all);
routes.get("/users/:matricula", UsuarioController.one);
routes.post("/users", UsuarioController.create);
routes.get("/users/verify/:matricula", UsuarioController.verify);
routes.delete("/users/:matricula", UsuarioController.remove);
routes.post("/login", UsuarioController.auth);

// formato
routes.get("/formato", FormatController.all);
routes.post("/formato", FormatController.create);

// template
routes.post("/template", TemplateControl.create);
routes.get("/template", TemplateControl.all);
routes.get("/template/pendente", TemplateControl.pendentes);
routes.get("/template/:id", TemplateControl.one);
routes.delete("/template/:id", TemplateControl.excluir); // exclui somente templates pendentes
routes.get("/template/aprovar/:id", TemplateControl.aprovar);
routes.post("/template/status", TemplateControl.mudarStatus);

// arquivos
routes.post("/arquivo", ArquivoControl.create);
routes.get("/arquivo", ArquivoControl.all);
routes.get("/arquivo/:id", ArquivoControl.one);

// joins de usuario
routes.get("/user/templates/:matricula", PerfilController.templates);
routes.get("/user/arquivos/:matricula", PerfilController.arquivos);


export default routes;
