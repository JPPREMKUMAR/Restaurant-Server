import mongoose, { SchemaType } from "mongoose"


const foodItemSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    categoryId: { type: SchemaType.ObjectId, ref: 'Category' },
    imageUrl: { type: String, required: true },
    isAvailable: { type: Boolean, default: false },

}, { timestamps: true })


const FoodItem = mongoose.model("FoodItem", foodItemSchema)

export default FoodItem