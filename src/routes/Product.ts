import { Router } from "express";
import * as ProductController from '../controllers/Product';
const router = Router();

router.get('/', ProductController.findAll);

router.get('/nuevo', (req, res) => { res.render("new", { title: "Nuevo" }) });
router.post('/nuevo', ProductController.create);

router.get('/editar', ProductController.findById)
router.post('/editar', ProductController.replaceOne)

router.post('/eliminar', ProductController.findByIdAndDelete)

export default router;