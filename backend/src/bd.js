import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {Pool} = pkg

const connection = process.env.POSTGRESQL_URI

export const pool = new Pool({
    connectionString: connection
})

export const openConnection = async () => {
    try {
        await pool.connect()
        console.log("Database connected")
    } catch (ex) {
        console.log("An error has ocurred to connect: ", ex)
    }
}