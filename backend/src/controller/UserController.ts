import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Usuario } from "../entity/User"

export class UserController {

    private userRepository = AppDataSource.getRepository(Usuario)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const matricula = request.params.matricula

        const user = await this.userRepository.findOne({
            where: { matricula }
        })

        if (!user) {
            return "Usuário não encontrado"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { nome, matricula, senha, verificado, perfil } = request.body;

        const user = Object.assign(new Usuario(), {
            nome, matricula, senha, verificado, perfil,
        })

        return this.userRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const matricula = (request.params.matricula)

        let userToRemove = await this.userRepository.findOneBy({ matricula })

        if (!userToRemove) {
            return "Usuário não encontrado"
        }

        await this.userRepository.remove(userToRemove)

        return "Usuário deletado"
    }

}