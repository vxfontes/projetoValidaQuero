import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { Usuario } from "../entity/User"
import { PerfilEnum } from "../entity/Perfil";
import bcrypt = require("bcrypt");
import { arquivoRepository, templateRepository, userRepository } from "../configs/repository";
import { StatusEnum } from "../entity/Status";

export class UserController {

    /**
     * 
     * @param request 
     * @param response todos os usuarios do sistema
     */
    async all(request: Request, response: Response) {
        try {

            const usuarios = await userRepository.find({
                select: ["nome", "matricula", "perfil", "verificado"],
                relations: ["template", "arquivo"]
            });

            const result = usuarios.map(async (usuario) => {
                const templatesAtivos = usuario.template.filter((template) => template.status === StatusEnum.Ativo).length;
                const templatesDesativados = usuario.template.filter((template) => template.status === StatusEnum.Desativado).length;
                const arquivosAprovados = usuario.arquivo.filter((arquivo) => arquivo.aprovado === true).length;
                const arquivosNaoAprovados = usuario.arquivo.filter((arquivo) => arquivo.aprovado === false).length;

                const formattedResult = {
                    ...usuario,
                    template: {
                        ativo: templatesAtivos,
                        desativado: templatesDesativados
                    },
                    arquivo: {
                        aprovados: arquivosAprovados,
                        naoaprovados: arquivosNaoAprovados
                    }
                };

                return formattedResult
            });

            const results = await Promise.all(result);

            response.status(201).json({ status: 'success', message: 'Usuários encontrados com sucesso', usuarios: results });
        } catch (error) {
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
            const user = await userRepository.findOne({
                where: { matricula },
                select: ["nome", "matricula", "perfil", "verificado"],
                relations: ["template", "arquivo"]
            });

            if (!user) {
                throw new Error("Usuário não encontrado")
            }

            const templatesAtivos = user.template.filter((template) => template.status === StatusEnum.Ativo).length;
            const templatesDesativados = user.template.filter((template) => template.status === StatusEnum.Desativado).length;
            const arquivosAprovados = user.arquivo.filter((arquivo) => arquivo.aprovado === true).length;
            const arquivosNaoAprovados = user.arquivo.filter((arquivo) => arquivo.aprovado === false).length;

            const formattedResult = {
                ...user,
                template: {
                    ativo: templatesAtivos,
                    desativado: templatesDesativados
                },
                arquivo: {
                    aprovados: arquivosAprovados,
                    naoaprovados: arquivosNaoAprovados
                }
            };

            response.status(201).json({ status: 'success', message: 'Usuário encontrado com sucesso', usuario: formattedResult });
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }


    /**
     * 
     * @param request nome, matricula, senha, verificado, perfil
     * @param response verifica se a matricula ja existe e retorna usuario criado ou não
     */
    async create(request: Request, response: Response) {
        try {
            const { nome, matricula, senha, perfil } = request.body;

            if (!matricula || !matricula || !senha || !perfil) {
                throw new Error("Todos os campos são obrigatórias.");
            }

            // Verificar se o perfil fornecido é válido
            if (!Object.values(PerfilEnum).includes(perfil)) {
                throw new Error('Perfil inválido');
            }

            const existingUser = await userRepository.findOne({ where: { matricula } });

            if (existingUser) {
                throw new Error('Matrícula já existe no banco de dados');
            } else {
                const hashedSenha = await bcrypt.hash(senha, 10);
                const user = Object.assign(new Usuario(), {
                    nome, matricula, senha: hashedSenha, verificado: false, perfil,
                });

                const userSubset = { nome, matricula, verificado: false, perfil };
                await userRepository.save(user);

                response.status(201).json({ status: 'success', message: 'Usuário criado com sucesso', usuario: userSubset });
            }
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
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
            const userToRemove = await userRepository.findOneBy({ matricula })

            if (!userToRemove) throw new Error("Usuário não encontrado");

            if (userToRemove.verificado) throw new Error("Usuário verificado não pode ser excluido")

            await userRepository.remove(userToRemove);

            response.status(201).json({ status: 'success', message: `Usuário de matrícula: ${matricula} deletado com sucesso` });
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }


    /**
     * 
     * @param request matricula e senha
     * @param response login efetuado ou não
    */
    async auth(request: Request, response: Response) {

        try {
            const { matricula, senha } = request.body;

            if (!matricula || !senha) {
                throw new Error("Matrícula e senha são obrigatórias.");
            }

            const user = await userRepository.findOne({ where: { matricula: matricula } });

            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            const isPasswordValid = bcrypt.compareSync(senha, user.senha);
            if (!isPasswordValid) {
                throw new Error("Credenciais inválidas.");
            }

            const { nome, verificado, perfil } = user;
            const userSubset = { nome, matricula, verificado, perfil };

            response.status(201).json({ status: 'success', message: 'Login efetuado com sucesso', usuario: userSubset });
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }


    /**
     * 
     * @param request matricula e senha
     * @param response verificação efetuada ou não
    */
    async verify(request: Request, response: Response) {

        try {
            const matricula = request.params.matricula;

            if (!matricula) {
                throw new Error("Matrícula é obrigatória");
            }

            const user = await userRepository.findOne({ where: { matricula: matricula } });

            if (!user) {
                throw new Error("Usuário não encontrado");
            } else {
                user.verificado = true;
                await userRepository.save(user)

                response.status(201).json({ status: "success", message: "Usuário verificado com sucesso" });
            }
        } catch (error) {
            response.status(500).json({ status: 'error', message: error.message, error: error });
        }
    }


    /**
     * 
     * @param request 
     * @param response todos os usuarios pendentes do sistema
     */
    async pendente(request: Request, response: Response) {
        try {

            const usuarios = await userRepository.find({
                select: ["nome", "matricula", "perfil", "verificado"],
                where: { verificado: false }
            });

            response.status(201).json({ status: 'success', message: 'Usuários encontrados com sucesso', usuarios: usuarios });
        } catch (error) {
            response.status(500).json({ status: 'error', message: 'Erro ao obter usuários', error: error });
        }
    }
}