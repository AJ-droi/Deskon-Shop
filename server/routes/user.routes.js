import express from 'express'
import  * as User from '../controllers/user-controller.js'

const router = express.Router()



router.post('/register', User.registerUser) 
router.post('/login', User.loginUser); 

export default router