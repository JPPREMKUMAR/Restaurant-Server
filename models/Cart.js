import mongoose, { SchemaType } from 'mongoose'


const cartSchema = new mongoose.Schema({
    userId: { type: SchemaType.ObjectId, ref: 'User' },
    items: { type: "array", required: true },
    totalPrice: { type: Number, required: true },

}, { timestamps: true })



const Cart = new mongoose.model("Cart", cartSchema)

export default Cart