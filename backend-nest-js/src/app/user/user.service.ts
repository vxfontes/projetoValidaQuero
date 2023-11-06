import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PerfilEnum } from './entities/perfil.entity';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) // adição de metodos para manipulação do banco de dados
        private readonly UserRepository: Repository<User>
    ) { }

    async create(createUserDto: CreateUserDto) {
        const { nome, matricula, senha, perfil } = createUserDto;

        if (!nome || !matricula || !senha || !perfil) {
            throw new Error("Todos os campos são obrigatórias.");
        }

        // Verificar se o perfil fornecido é válido
        if (!Object.values(PerfilEnum).includes(perfil)) {
            throw new Error('Perfil inválido');
        }

        const existingUser = await this.findOne(matricula)

        if (existingUser) {
            throw new Error('Matrícula já existe no banco de dados');
        } else {
            const hashedSenha = await bcrypt.hash(senha, 10);

            this.UserRepository.save(this.UserRepository.create({
                nome, matricula, senha: hashedSenha, verificado: false, perfil,
            }))

            return { nome, matricula, verificado: false, perfil }
        }
    }

    findAll() {
        return this.UserRepository.find({
            select: ["nome", "matricula", "perfil", "verificado"],
        })
    }

    findOne(matricula: string) {
        return this.UserRepository.findOne({
            where: { matricula },
            select: ["nome", "matricula", "perfil", "verificado"],
        })
    }

    async auth(user: AuthUserDto) {
        const { matricula, senha } = user;

        if (!matricula || !senha) {
            throw new Error("Matrícula e senha são obrigatórias.");
        }

        const existingUser = await this.UserRepository.findOne({ where: { matricula } })
        if (!existingUser) throw new Error("Usuário não encontrado");

        const isPasswordValid = bcrypt.compareSync(senha, existingUser.senha);
        if (!isPasswordValid) throw new Error("Credenciais inválidas.");

        const { nome, verificado, perfil } = existingUser;

        return { nome, matricula, verificado, perfil };
    }

    async verify(matricula: string) {
        if (!matricula) {
            throw new Error("Matrícula é obrigatória");
        }

        const user = await this.UserRepository.findOne({ where: { matricula } });

        if (!user) throw new Error("Usuário não encontrado");

        user.verificado = true;
        this.UserRepository.save(user);
    }

    pendente() {
        return this.UserRepository.find({
            select: ["nome", "matricula", "perfil", "verificado"],
            where: { verificado: false }
        });
    }

    async remove(matricula: string) {
        const existingUser = await this.findOne(matricula)

        if (!existingUser) throw new Error("Usuário não encontrado");
        if (existingUser.verificado) throw new Error("Usuário verificado não pode ser excluido")

        return this.UserRepository.remove(existingUser)
    }
}