import {Router} from 'express'
import {getBlogs, postBlog, getOneBlog, deleteBlog, updateBlog} from '../controllers/blogs.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get("/", getBlogs)
router.post("/", postBlog)
router.get("/:id_blog", getOneBlog)
router.delete("/:id_blog", deleteBlog)
router.put("/:id_blog", updateBlog)

export default router