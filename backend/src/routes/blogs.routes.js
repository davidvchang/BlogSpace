import {Router} from 'express'

const router = Router()

router.get("/")
router.post("/")
router.get("/:id_blog")
router.delete("/:id_blog")
router.put("/:id_blog")

export default router