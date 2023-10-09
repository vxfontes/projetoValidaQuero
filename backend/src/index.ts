import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { definirFormatos } from "./configs/formatoPadrao";

const port = 3003;
const ip = '192.168.0.125';

AppDataSource.initialize().then(async () => {
    const app = express() // iniciando express
    app.use(morgan('dev')) // registros
    app.use(cors()); // permissão para front
    app.use(express.json())
    app.use(routes)
    // definirFormatos() // caso nao tenham formatos definidos ainda (rodar apenas uma vez)

    // app.listen(port, ip, () => console.log("O servidor está rodando na porta", port, "com ip", ip));
    app.listen(port, () => console.log("O servidor está rodando na porta", port));

}).catch(error => console.log(error))
