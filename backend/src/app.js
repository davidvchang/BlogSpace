import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import BlogsRoutes from './routes/blogs.routes.js'
import UsersRoutes from './routes/users.routes.js'
import CommentsRoutes from './routes/comments.routes.js'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api/blogs", BlogsRoutes)
app.use("/api/users", UsersRoutes)
app.use("/api/comments", CommentsRoutes)

export default app