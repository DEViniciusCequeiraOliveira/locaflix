import { DataSource } from "typeorm";
import { Cliente } from "../entity/Cliente";
import { Filme } from "../entity/Filme";
import { Secao } from "../entity/Secao";
import { Aluguel } from "../entity/Aluguel";
import { AluguelItem } from "../entity/AluguelItem";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "locaflix",
    synchronize: true,
    logging: true,
    entities: [Filme, Cliente, Aluguel, AluguelItem, Secao],
});
