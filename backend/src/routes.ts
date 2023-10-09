import { Router } from "express";
import { UserController } from "./controller/UserController";
import { FormatoController } from "./controller/FormatoController";
import { TemplateController } from "./controller/TemplateController";
import { ArquivoController } from "./controller/ArquivoController";

const routes = Router();
const UsuarioController = new UserController();
const FormatController = new FormatoController();
const TemplateControl = new TemplateController();
const ArquivoControl = new ArquivoController();


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
routes.delete("/template/:id", TemplateControl.excluir); // exclui somente templates pendentes
routes.get("/template/aprovar/:id", TemplateControl.aprovar);
routes.get("/template/desativar/:id", TemplateControl.desativar);

// arquivos
routes.post("/arquivo", ArquivoControl.create);
routes.get("/arquivo", ArquivoControl.all);
routes.get("/arquivo/:id", ArquivoControl.one);


export default routes;
