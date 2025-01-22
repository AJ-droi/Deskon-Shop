import express from 'express'
import  * as Auth from '../controllers/auth-controller.js'

const router = express.Router()



router.post('/register', Auth.registerUser) 
router.post('/login', Auth.loginUser); 
router.post('/verify-user', Auth.verifyUser)
router.post('/forgot-password', Auth.forgotPassword)
router.post('/reset-password', Auth.resetPassword)

export default router