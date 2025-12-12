import orderModel from "../models/orderModel";
import userModel from "../models/userModel";

const placeOrder = async (req,res) =>{

    try{

            const {userId,items,amount,address} = req.body


            const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment:false,
           date:Date.now()
            
        }

       
        
        const newOrder = new orderModel(orderData);
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true,message:"Place Order"})


        }catch(error){
                console.log(error)
                res.json({success:false,message:error.message})
        }

}



const placeOrderStrip = async (req,res) =>{
    
}


const placeOrderRazorpay = async (req,res) =>{
    
}

const allOrder = async (req,res) =>{
    
}


const userOrder = async (req,res) =>{
    
}

const updateStatus = async (req,res) =>{
    
}

export {placeOrder,placeOrderRazorpay,placeOrderStrip,allOrder,userOrder,updateStatus}