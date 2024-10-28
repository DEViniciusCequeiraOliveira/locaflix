import { Router } from "express";
import clienteRoutes from "./clienteRoutes";
import filmeRoutes from "./filmeRoutes";
import secaoRoutes from "./secaoRoutes";

const router = Router();

router.use(clienteRoutes); 
router.use(filmeRoutes); 
router.use(secaoRoutes); 



export default router;
