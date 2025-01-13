import express from 'express';
import { port, connectDb } from './config/db.js';

const app = express()

app.listen(port, connectDb);