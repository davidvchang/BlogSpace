import {Router} from 'express'
import {getUsers, postUser, loginUser, getBlogsUserLogged} from '../controllers/users.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get("/", getUsers)
router.post("/", postUser)

router.post("/login", loginUser)

router.get("/autenticatedUser", verifyToken, (req, res) => {
    res.json(req.user); 
});

router.get("/my-blogs", verifyToken, getBlogsUserLogged)

export default router