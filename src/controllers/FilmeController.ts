import { Request, Response } from "express";
import { AppDataSource } from "../database/AppDataSource";
import { Filme } from "../entity/Filme";

export class FilmeController {
  static async getAll(req: Request, res: Response) {
    const filmeRepository = AppDataSource.getRepository(Filme);
    const filme = await filmeRepository.find();
    console.log(filme)
    res.json(filme);
  }

  static async getOne(req: Request, res: Response) {
    const filmeRepository = AppDataSource.getRepository(Filme);
    const filme = await filmeRepository.findOne({
      where: {
        id: Number.parseInt(req.params.id)
      }
    });
    res.json(filme);
  }

  static async create(req: Request, res: Response) {
    const filmeRepository = AppDataSource.getRepository(Filme);
    const filme = filmeRepository.create(req.body);
    const filmeSave = await filmeRepository.save(filme);
    res.status(201).json(filmeSave);
  }

  static async update(req: Request, res: Response) {
    const filmeRepository = AppDataSource.getRepository(Filme);
    const filme = await filmeRepository.findOne({
      where: {
        id: Number.parseInt(req.params.id)
      }
    });
    filmeRepository.merge(filme!, req.body);
    const filmeSave = await filmeRepository.save(filme!);
    res.status(201).json(filmeSave);
  }
}
