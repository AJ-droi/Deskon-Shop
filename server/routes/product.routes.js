import express from 'express'
import  * as Product from '../controllers/product-controller.js'

const router = express.Router()

router.post('/add-product', Product.addProduct)

export default router