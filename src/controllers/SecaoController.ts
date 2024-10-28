import { Request, Response } from "express";
import { AppDataSource } from "../database/AppDataSource";
import { Secao } from "../entity/Secao";

export class SecaoController {
  static async getAll(res: Response) {
    const secaoRepository = AppDataSource.getRepository(Secao);
    const secao = await secaoRepository.find();
    res.json(secao);
  }

  static async getOne(req: Request, res: Response) {
    const secaoRepository = AppDataSource.getRepository(Secao);
    const secao = await secaoRepository.findOne({
      where: {
        id: Number.parseInt(req.params.id)
      }
    });
    res.json(secao);
  }

  static async create(req: Request, res: Response) {
    const secaoRepository = AppDataSource.getRepository(Secao);
    const secao = secaoRepository.create(req.body);
    const secaoSave = await secaoRepository.save(secao);
    res.status(201).json(secaoSave);
  }

  static async update(req: Request, res: Response) {
    const secaoRepository = AppDataSource.getRepository(Secao);
    const secao = await secaoRepository.findOne({
      where: {
        id: Number.parseInt(req.params.id)
      }
    });
    secaoRepository.merge(secao!, req.body);
    const secaoSave = await secaoRepository.save(secao!);
    res.status(201).json(secaoSave);
  }
}
