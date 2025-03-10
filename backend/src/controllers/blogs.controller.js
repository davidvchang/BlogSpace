import {pool} from '../bd.js'

export const getBlogs = async (req, res) => {
    try {
        const blogs = await pool.query("SELECT * FROM blogs")
        res.status(200).json(blogs.rows)
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const postBlog = async (req, res) => {
    const {title, content, image_url} = req.body

    try {
        await pool.query("INSERT INTO blogs (title, content, image_url) VALUES ($1, $2, $3)", [title, content, image_url])
        res.status(201).json("Blog has been added correctly")
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const getOneBlog = async (req, res) => {
    const {id_blog} = req.query
    try {
        const existBlog = await pool.query("SELECT COUNT(*) FROM blogs WHERE id_blog = $1", [id_blog])
        if(existBlog.rows[0].count > 0) {
            const blogs = await pool.query("SELECT * FROM blogs WHERE id_blog = $1", [id_blog])
            res.status(200).json(blogs.rows)
        }
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const deleteBlog = async (req, res) => {
    const {id_blog} = req.query
    try {
        const existBlog = await pool.query("SELECT COUNT(*) FROM blogs WHERE id_blog = $1", [id_blog])
        if(existBlog.rows[0].count > 0) {
            await pool.query("DELETE FROM blogs WHERE id_blog = $1", [id_blog])
            res.status(204).json("Blog has been deleted correctly")
        }
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const updateBlog = async (req, res) => {
    const {id_blog} = req.query
    const {title, content, image_url} = req.body
    try {
        const existBlog = await pool.query("SELECT COUNT(*) FROM blogs WHERE id_blog = $1", [id_blog])
        if(existBlog.rows[0].count > 0) {
            await pool.query("Update blogs set title = $1, content = $2, image_url = $3 WHERE id_blog = $4", [title, content, image_url, id_blog])
            res.status(204).json("Blog has been updated correctly")
        }
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}