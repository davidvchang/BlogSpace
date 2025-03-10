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