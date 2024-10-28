import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const router = Router();

router.get("/cliente", ClienteController.getAll);
router.get("/cliente/:id",ClienteController.getOne)
router.post("/cliente", ClienteController.create);
router.put("/cliente:id", ClienteController.update);

export default router;

