import mongoose, { SchemaType } from "mongoose"

const reviewSchema = new mongoose.Schema({

    userId: { type: SchemaType.ObjectId, ref: "User" },
    foodId: { type: SchemaType.ObjectId, ref: "FoodItem" },
    rating: { type: String },
    comment: { type: String }
}, { timestamps: true })


const Review = mongoose.model("Review", reviewSchema)


export default Review