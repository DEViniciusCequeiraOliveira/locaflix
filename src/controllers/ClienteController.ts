import { Request, Response } from "express";
import { AppDataSource } from "../database/AppDataSource";
import { Cliente } from "../entity/Cliente";

export class ClienteController {
    static async getAll(req: Request, res: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);
        const cliente = await clienteRepository.find();
        res.json(cliente);
    }

    static async getOne(req: Request, res: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);
        const cliente = await clienteRepository.findOne({
            where: {
                id: Number.parseInt(req.params.id)
            }
        });
        res.json(cliente);
    }

    static async create(req: Request, res: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);
        const cliente = clienteRepository.create(req.body);
        const clienteSave = await clienteRepository.save(cliente);
        res.status(201).json(clienteSave);
    }

    static async update(req: Request, res: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);
        const cliente = await clienteRepository.findOne({
            where: {
                id: Number.parseInt(req.params.id)
            }
        });
        clienteRepository.merge(cliente!, req.body);
        const clienteSave = await clienteRepository.save(cliente!);
        res.status(201).json(clienteSave);
    }
}
