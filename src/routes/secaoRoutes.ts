import { Router } from "express";
import { SecaoController } from "../controllers/SecaoController";

const router = Router();

router.get("/secao", SecaoController.getAll);
router.post("/secao/:id", SecaoController.getOne);
router.post("/secao", SecaoController.create);
router.post("/secao/:id", SecaoController.update);

export default router;
