import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"

dotenv.config()


//Declare App 
const app = express()


// MIddlewares
app.use(express.json())
app.use(cors())

//Connect Database
connectDB()




//Routes 

app.get("/", (req, res) => {
    res.json({ message: "API WORKING", success: true })
})





//Start Server 

const PORT = process.env.PORT || 3000
const startServer = async () => {

    try {
        app.listen(PORT, () => {
            console.log(`Server Working On PORT ${PORT}`)
        })

    } catch (e) {
        console.log('Server Not Working')
    }
}

startServer()