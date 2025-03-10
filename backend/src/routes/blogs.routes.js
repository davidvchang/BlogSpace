import {Router} from 'express'
import {getBlogs, postBlog} from '../controllers/blogs.controller.js'

const router = Router()

router.get("/", getBlogs)
router.post("/", postBlog)
router.get("/:id_blog")
router.delete("/:id_blog")
router.put("/:id_blog")

export default router