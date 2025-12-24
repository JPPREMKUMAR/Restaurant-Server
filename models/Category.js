import mongoose from "mongoose"


const categorySchema = new mongoose.Schema({

    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: false },


}, { timestamps: true })


const Category = mongoose.model("Category", categorySchema)
export default Category