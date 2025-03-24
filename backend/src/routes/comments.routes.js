import {Router} from 'express'
import {getCommentsBlogs, postComment} from '../controllers/comments.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get("/:id_blog", getCommentsBlogs)
router.post("/:id_blog", verifyToken, postComment)

export default router