import {Router} from 'express'
import {getUsers, postUser, loginUser} from '../controllers/users.controller.js'

const router = Router()

router.get("/", getUsers)
router.post("/", postUser)

router.post("/login", loginUser)

export default router