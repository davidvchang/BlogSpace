import {pool} from '../bd.js'

export const getCommentsBlogs = async (req, res) => {
    const {id_blog} = req.params

    try {
        const comments = await pool.query("SELECT * FROM comments WHERE blog_id = $1", [id_blog])
        res.status(200).json(comments.rows) 
    } catch (ex) {
        res.status(500).json({ message: "An error has occurred to get comments", error: ex.message })
    }
}

export const postComment = async (req, res) => {
    const {comment} = req.body
    const user_id = req.user.id
    const {id_blog} = req.params

    try {
        await pool.query("INSERT INTO comments (comment, user_id, blog_id) VALUES ($1, $2, $3)", [comment, user_id, id_blog])
        res.status(201).json("The comment has been added correctly")
    } catch (ex) {
        res.status(500).json({ message: "An error has occurred to post comment", error: ex.message })
    }
}