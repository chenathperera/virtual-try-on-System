import userModel from "../models/userModel.js"; // FIX: Added .js extension
import validator from "validator";
import bcrypt from "bcrypt"; 
import jwt from 'jsonwebtoken'


// Helper function to create a JWT token
const createToken = (id) => {
    // Note: It's best practice to include a short expiration time for tokens
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// rout login (To be implemented)
const loginUser = async (req, res) => {
    try {

        const {  email, password } = req.body;
        
        // 1. Check if user already exists
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesnt exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        // 2. Validate input fields
        if (isMatch) {

            const token = createToken(user._id)
            res.json({ success: true,token})

        }else{

            res.json({ success: false, message: "Invalid credentials" })
        }
        
    } catch (error) {

        console.log("Error in registerUser:", error);
        res.json({ success: false, message: error.message })


    }
}

// rout register
const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;
        
        // 1. Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // 2. Validate input fields
        if (!name) {
            return res.json({ success: false, message: "Please provide a name" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" })
        }

        // 3. Hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // 4. Create and save new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            // Assuming you might add a default user type later, e.g., role: 'user'
        })

        const user = await newUser.save()
        
        // 5. Generate token and send response
        const token = createToken(user._id)
        res.json({ success: true, token })


    } catch (error) {

        console.log("Error in registerUser:", error);
        res.json({ success: false, message: error.message })


    }
}

// rout admin login (To be implemented)
const adminLogin = async (req, res) => {
    // Implementation for admin login goes here

    try {

        const {email,password} = req.body;

        if(email=== process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

                    const token = jwt.sign(email+password,process.env.JWT_SECRET);
                    res.json({ success: true, token });

        }else{

                res.json({ success: false, message: "Invalid Credintials" })
        
        }
  
    } catch (error) {

        console.log(error);
        res.json({ success: false, message:error.message })
        
    }

    
}

export { loginUser, registerUser, adminLogin }