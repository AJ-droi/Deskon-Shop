import express from 'express';
import { port, connectDb } from './config/db.js';
import userRoutes from './routes/user.routes.js'

const app = express()

app.use(express.json())

app.use('/user', userRoutes)

app.listen(port, connectDb);