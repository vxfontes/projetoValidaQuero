import { AppDataSource } from "../data-source";
import { Formato } from "../entity/Formato";
import { Usuario } from "../entity/User";

export const userRepository = AppDataSource.getRepository(Usuario)
export const formatoRepository = AppDataSource.getRepository(Formato)