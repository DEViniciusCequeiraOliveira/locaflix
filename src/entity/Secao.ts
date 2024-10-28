import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Secao {

    @PrimaryGeneratedColumn()
    id: Number;
    nome: String;

    constructor(id: Number, nome: String) {
        this.id = id;
        this.nome = nome;
    }
}