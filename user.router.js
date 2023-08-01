    import express from 'express';
const router = express.Router();

//import controller
import * as UserController from '../controller/user.controller.js'; 

router.post("/save",UserController.save);

router.get("/fetch",UserController.fetch);

router.delete("/delete/:id",UserController.deleteUser);

router.patch("/update",UserController.updateUser);

router.post("/login",UserController.login);

export default router;