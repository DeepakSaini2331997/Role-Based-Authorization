import express from "express"
const app = express()
import {port} from "./config/env.js"
import errorHandler from "./middleware/errorHandler.js"
import router from "./routes/projectRoutes.js"

app.use(express.json())

//use routes
app.use("/api",router)

//use error handler
app.use(errorHandler)

app.listen(port,()=>{
    console.log("Connect successfully on port"+port)
})