import mongoose, { SchemaType } from "mongoose"


const orderSchema = new mongoose.Schema({
    userId: { type: SchemaType.ObjectId, ref: 'User', required: true },
    items: { type: "array" },
    totalAmount: { type: String, required: true },
    orderStatus: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    deliveryAddress: { type: String, required: true }
}, { timestamps: true })


const Order = mongoose.model("Order", orderSchema)

export default Order