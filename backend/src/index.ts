import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes"
import { Usuario } from "./entity/User";
import { PerfilEnum } from "./entity/Perfil";

const port = 3003;
const ip = '192.168.0.125';

const app = express() // iniciando express
app.use(morgan('dev')) // registros
app.use(cors()); // permissão para front
app.use(bodyParser.json())

AppDataSource.initialize().then(async () => {

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    /* Definindo qual porta a aplicação vai rodar */
    app.listen(port, ip, () => console.log("O servidor está rodando na porta", port, "com ip", ip));

    // insert new users for test -> body
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Usuario, {
    //         nome: "Teste nome 2",
    //         matricula: "234234444",
    //         senha: "234dsfdd",
    //         verificado: true,
    //         perfil: PerfilEnum.Time,
    //     })
    // )
}).catch(error => console.log(error))
