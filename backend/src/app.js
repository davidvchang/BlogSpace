import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/api/blogs")

export default app