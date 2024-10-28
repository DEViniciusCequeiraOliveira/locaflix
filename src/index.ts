import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/AppDataSource";
import routes from "./routes/routes";


const app = express();
const port = 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    app.use("/api", routes);

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch(error => console.log("Erro na conexão ao banco de dados: ", error));