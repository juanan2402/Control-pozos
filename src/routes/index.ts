import { Router } from "express";

const router =  Router();
import {getPozos, createPozo, updatePozoEstado} from "../controllers/index.controllers";

router.get('/pozos',getPozos);
router.post('/pozos',createPozo);
router.patch('/pozos/:id',updatePozoEstado);


export default router;