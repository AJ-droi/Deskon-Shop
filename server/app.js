import express from 'express';
import { port, connectDb } from './config/db.js';
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.json())

app.use('/auth', authRoutes)

app.listen(port, connectDb);