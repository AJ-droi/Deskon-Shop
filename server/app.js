import express from 'express';
import { port, connectDb } from './config/db.js';
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'

port:5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes)
app.use("/product", productRoutes);

app.listen(port, connectDb);

