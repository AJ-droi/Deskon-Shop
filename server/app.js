import express from 'express';
import { port, connectDb } from './config/db.js';
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express()

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/product", productRoutes);

app.listen(port, connectDb);