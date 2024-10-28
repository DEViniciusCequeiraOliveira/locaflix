import { Column, Double, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Secao } from "./Secao";

@Entity()
export class Filme {

    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    nome: String;
    @Column()
    nota: Number;
    @Column()
    duracao: Number;
    @Column()
    valorAluguel: Number;
    @Column()
    estoque: Number;
    @ManyToMany(() => Secao)
    @JoinTable()
    secao : Secao[];


    constructor(id: number, nome: String, nota: Number, duracao: Number, valorAluguel: Number, estoque: Number, secao : Secao[]) {
        this.id = id;
        this.nome = nome;
        this.nota = nota;
        this.duracao = duracao;
        this.valorAluguel = valorAluguel;
        this.estoque = estoque;
        this.secao = secao

    }

}