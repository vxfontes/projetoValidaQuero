import { AppDataSource } from "../data-source";
import { Arquivo } from "../entity/Arquivo";
import { Formato } from "../entity/Formato";
import { Template } from "../entity/Template";
import { Usuario } from "../entity/User";

export const userRepository = AppDataSource.getRepository(Usuario)
export const formatoRepository = AppDataSource.getRepository(Formato)
export const templateRepository = AppDataSource.getRepository(Template)
export const arquivoRepository = AppDataSource.getRepository(Arquivo)