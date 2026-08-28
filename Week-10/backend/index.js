import express from "express";
import { asyncHandler } from "./utils/asyncHandler.js";
import { configDotenv } from "dotenv";
import { dbConnector } from "./config/db.js";
import cors from "cors";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

configDotenv()
const app  = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    exposedHeaders: ["Authorization"]

}))

app.get('/health',asyncHandler((req,res)=>{
    return res.json({
        data:"Hellow Buddy"
    })
}))


import userRouter from "./routers/user.routes.js"; 
import householdRouter from "./routers/household.routes.js";
import itemRouter from "./routers/item.routes.js"

app.use('/api/auth',userRouter);
app.use('/api/households',householdRouter);
app.use('/api/items',itemRouter)


await dbConnector()
.then(()=>{
    app.listen(5000,()=>{
        console.log("server is running in 5000");
    })
})
.catch((error)=>{
    console.log("error while starting server",error);
    process.exit(1);
})

