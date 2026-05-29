import express from 'express'
import cors from 'cors'
import 'dotenv/config' // Loads MONGODB_URI from .env
import connectDB from './config/mongodb.js'
import connectCloudnary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import tryOnRoute from './routes/tryOnRoute.js';

//app config
const app =express()
const port = process.env.PORT || 4000
connectDB() // Attempt to connect to the database
console.log("Connecting to:", process.env.MONGODB_URI);
connectCloudnary()


//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.use('/api/try-on', tryOnRoute);

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT: '+port))

