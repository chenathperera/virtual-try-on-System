import  express from 'express'
import {placeOrder,placeOrderRazorpay,placeOrderStrip,allOrder,userOrder,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/list',adminAuth,allOrder)
orderRouter.post('/status',adminAuth,updateStatus)


orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/strip',authUser,placeOrderStrip)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

orderRouter.post('/userorders',authUser,userOrder)

export default orderRouter
