import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, default: 'user' },
    address: { type: "array", required: true },
    isActive: { type: Boolean, default: false }
}, { timestamps: true })


const User = mongoose.model('User', userSchema)

export default User