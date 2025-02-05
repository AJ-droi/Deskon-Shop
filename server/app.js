import express from 'express';
import { port, connectDb } from './config/db.js';
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import cors from 'cors'

const app = express()
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/auth", authRoutes)
app.use("/product", productRoutes);

app.listen(port, connectDb);

