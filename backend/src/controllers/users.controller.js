import {pool} from '../bd.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users")
        res.status(200).json(users.rows)
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const postUser = async (req, res) => {
    const {name, last_name, email, password, profile_image_url} = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        await pool.query("INSERT INTO users (name, last_name, email, password, profile_image_url) VALUES ($1, $2, $3, $4, $5)", [name, last_name, email, hashedPassword, profile_image_url])
        res.status(201).json("Blog has been added correctly")
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const updateUser = async (req, res) => {
    const {name, last_name, profile_image_url} = req.body
    const user_id = req.user.id

    try {
        await pool.query("UPDATE users SET name = $1, last_name = $2, profile_image_url = $3 WHERE id_user = $4", [name, last_name, profile_image_url, user_id])

        const result = await pool.query("SELECT * FROM users WHERE id_user = $1", [user_id]);
        const user = result.rows[0];

        const token = jwt.sign(
            { id: user.id_user, email: user.email, name: user.name, last_name: user.last_name, profile_image_url: user.profile_image_url },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        
        res.status(200).json({ message: "User updated successfully", token });
    } catch (ex) {
        res.status(500).json("An error has ocurred to update: ", ex)
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user.id_user, email: user.email, name: user.name, last_name: user.last_name, profile_image_url: user.profile_image_url },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // El token expira en 1 hora
        );

        res.json({ message: "Login successful", token });
    } catch (ex) {
        res.status(500).json("An error has ocurred: ", ex)
    }
}

export const getBlogsUserLogged = async (req, res) => {
    const user_id = req.user.id
    
    try {
        const blogs = await pool.query("SELECT * FROM blogs WHERE user_id = $1", [user_id])
        res.status(200).json(blogs.rows)
    } catch (ex) {
        res.status(500).json({ message: "An error has occurred", error: ex.message })
    }
}