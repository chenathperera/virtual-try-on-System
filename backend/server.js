import express from 'express'
import cors from 'cors'
import 'dotenv/config' // Loads MONGODB_URI from .env
import connectDB from './config/mongodb.js'
import connectCloudnary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

//app config
const app =express()
const port = process.env.PORT || 4000
connectDB() // Attempt to connect to the database
connectCloudnary()


//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)


app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT: '+port))

