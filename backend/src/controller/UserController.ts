import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { Usuario } from "../entity/User"
import { PerfilEnum } from "../entity/Perfil";
import bcrypt = require("bcrypt");

export class UserController {

    private userRepository = AppDataSource.getRepository(Usuario)


    /**
     * 
     * @param request 
     * @param response todos os usuarios do sistema
     */
    async all(request: Request, response: Response) {
        try {
            const usuarios = await this.userRepository.find({
                select: ["nome", "matricula", "perfil", "verificado"]
            });
            response.status(201).json({ status: 'success', message: 'Usuário encontrados com sucesso', usuarios: usuarios });
        } catch (error) {
            console.error('Erro ao obter usuários:', error);
            response.status(500).json({ status: 'error', message: 'Erro ao obter usuários', error: error });
        }
    }


    /**
     * 
     * @param request matricula
     * @param response usuario que possui aquela matricula ou não
     */
    async one(request: Request, response: Response) {
        const matricula = request.params.matricula

        try {
            const user = await this.userRepository.findOne({
                where: { matricula },
                select: ["nome", "matricula", "perfil", "verificado"]
            });

            if (!user) {
                response.status(400).json({ status: 'error', message: "Usuário não encontrado" });
            }

            response.status(201).json({ status: 'success', message: 'Usuário encontrado com sucesso', usuario: user });
        } catch (error) {
            console.error('Erro ao procurar o usuário:', error);
            response.status(500).json({ status: 'error', message: 'Erro ao procurar o usuário', error: error });
        }
    }


    /**
     * 
     * @param request nome, matricula, senha, verificado, perfil
     * @param response verifica se a matricula ja existe e retorna usuario criado ou não
     */
    async create(request: Request, response: Response) {
        try {
            const { nome, matricula, senha, perfil } = request.query;

            if (!matricula || !matricula || !senha || !perfil) {
                return response.status(400).json({ status: 'error', message: "Todos os campos são obrigatórias." });
            }

            // Verificar se o perfil fornecido é válido
            if (!Object.values(PerfilEnum).includes(perfil)) {
                response.status(400).json({ status: 'error', message: 'Perfil inválido' });
                return;
            }

            const existingUser = await this.userRepository.findOne({ where: { matricula } });

            if (existingUser) {
                response.status(400).json({ status: 'error', message: 'Matrícula já existe no banco de dados' });
            } else {
                const hashedSenha = await bcrypt.hash(senha, 10);
                const user = Object.assign(new Usuario(), {
                    nome, matricula, senha: hashedSenha, verificado: false, perfil,
                });

                const userSubset = { nome, matricula, verificado: false, perfil };

                await this.userRepository.save(user);

                response.status(201).json({ status: 'success', message: 'Usuário criado com sucesso', usuario: userSubset });
            }
        } catch (error) {
            console.error('Erro ao criar o usuário:', error);
            response.status(500).json({ status: 'error', message: 'Erro ao criar o usuário', error: error });
        }
    }


    /**
     * 
     * @param request matricula do usuario
     * @param response se o usuario foi encontrado e deletado ou não
    */
    async remove(request: Request, response: Response) {
        const matricula = (request.params.matricula)

        try {
            let userToRemove = await this.userRepository.findOneBy({ matricula })

            if (!userToRemove) {
                response.status(400).json({ status: 'error', message: "Usuário não encontrado" });
            }

            await this.userRepository.remove(userToRemove)

            response.status(201).json({ status: 'success', message: `Usuário de matrícula: ${matricula} deletado com sucesso` });

        } catch (error) {
            console.error('Erro ao deletar o usuário:', error);
            response.status(500).json({ status: 'error', message: 'Erro ao deletar o usuário', error: error });
        }
    }

    /**
     * 
     * @param request matricula e senha
     * @param response login efetuado ou não
    */
    async auth(request: Request, response: Response) {

        try {
            const { matricula, senha } = request.query;

            if (!matricula || !senha) {
                return response.status(400).json({ status: 'error', message: "Matrícula e senha são obrigatórias." });
            }

            const user = await this.userRepository.findOne({ where: { matricula: matricula } });

            if (!user) {
                response.status(400).json({ status: 'error', message: "Usuário não encontrado" });
            }

            const isPasswordValid = await bcrypt.compare(senha, user.senha);
            if (!isPasswordValid) {
                return response.status(401).json({ status: 'error', message: "Credenciais inválidas." });
            }

            const { nome, verificado, perfil } = user;
            const userSubset = { nome, matricula, verificado, perfil };

            response.status(201).json({ status: 'success', message: 'Login efetuado com sucesso', usuario: userSubset });
        } catch (error) {
            console.error('Erro ao procurar o usuário:', error);
            response.status(500).json({ status: 'error', message: 'Erro ao procurar o usuário', error: error });
        }
    }
}