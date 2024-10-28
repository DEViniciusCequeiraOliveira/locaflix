import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class Aluguel {
    @PrimaryGeneratedColumn()
    id: Number;
    @ManyToOne((type) => Cliente, (cliente) => cliente.id)
    cliente: Cliente;
    @Column()
    dataInicial: Date;
    @Column()
    dataFinal: Date;

    constructor(id: Number, cliente: Cliente, dataInicial: Date, dataFinal: Date) {
        this.id = id;
        this.cliente = cliente;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
    }
}