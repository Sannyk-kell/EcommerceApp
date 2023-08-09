import express from "express";
import { 
    registerController,
    loginController,
    testController, 
} from '../controllers/authController.js'
import { isAdmin, requireSingIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController)

//LOGiN || POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSingIn, isAdmin, testController)

//protected route auth 
router.get('/user-auth', requireSingIn, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router;