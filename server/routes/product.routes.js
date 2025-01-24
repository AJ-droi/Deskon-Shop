import express from 'express'
import  * as Product from '../controllers/product-controller.js'
import { isAdmin } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/add-product', Product.addProduct)
router.post('/add-category', Product.createCategory)
router.get('/all', isAdmin, Product.getAllProducts)
router.patch('/update/:id', Product.updateProduct)

export default router