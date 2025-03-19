import {Router} from 'express'
import {getUsers, postUser, loginUser} from '../controllers/users.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get("/", getUsers)
router.post("/", postUser)

router.post("/login", loginUser)

router.get("/autenticatedUser", verifyToken, (req, res) => {
    res.json(req.user); 
});

export default router