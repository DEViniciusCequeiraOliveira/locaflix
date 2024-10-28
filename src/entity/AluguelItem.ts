import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aluguel } from "./Aluguel";
import { Filme } from "./Filme";

@Entity()
export class AluguelItem {
    @PrimaryGeneratedColumn()
    id: Number;
    @ManyToOne((type) => Aluguel, (aluguel) => aluguel.id)
    aluguel: Aluguel;
    @ManyToOne((type) => Filme, (filme) => filme.id)
    filme: Filme;
    @Column()
    valorUnitario: Number;

    constructor(id: Number, aluguel: Aluguel, filme: Filme, valorUnitario: Number) {
        this.id = id;
        this.aluguel = aluguel;
        this.filme = filme;
        this.valorUnitario = valorUnitario;
    }
}