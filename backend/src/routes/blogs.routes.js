import {Router} from 'express'
import {getBlogs, postBlog, getOneBlog, deleteBlog} from '../controllers/blogs.controller.js'

const router = Router()

router.get("/", getBlogs)
router.post("/", postBlog)
router.get("/:id_blog", getOneBlog)
router.delete("/:id_blog", deleteBlog)
router.put("/:id_blog")

export default router