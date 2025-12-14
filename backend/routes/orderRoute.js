import  express from 'express'
import {placeOrder,placeOrderRazorpay,userOrder,updateStatus, allOrders, placeOrderStripe, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)


orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

orderRouter.post('/userorders',authUser,userOrder)

//veryfy paymen
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter
