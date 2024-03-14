import { Router } from "express";
import {  postProduct} from "../controllers/products";

const router = Router();

router.post('/', postProduct)


export default router;