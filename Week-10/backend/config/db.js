import mongoose from "mongoose";

const dbConnector = async ()=>{
    try {
        // console.log(process.env.DB_NAME,process.env.DB_URL);
        
        await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}?appName=Cluster0`);
    } catch (error) {
        throw error
    }
}


export {
    dbConnector
}