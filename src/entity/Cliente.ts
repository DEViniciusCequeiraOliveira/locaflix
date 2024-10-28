import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    nome: string;
    @Column()
    cpf: string;
    @Column()
    email: string;

    constructor(id: Number, nome: string, cpf: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}