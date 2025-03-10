import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import BlogsRoutes from './routes/blogs.routes.js'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api/blogs", BlogsRoutes)
app.use("/api/users", )

export default app