import { Router } from "express";
import { FilmeController } from "../controllers/FilmeController";

const router = Router();

router.get("/filme", FilmeController.getAll);
router.get("/filme/:id",FilmeController.getOne)
router.post("/filme", FilmeController.create);
router.put("/filme/:id",FilmeController.update)

export default router;
