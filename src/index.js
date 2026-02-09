import app from "./app.js"
import { connectDB } from './config/database.js'


const launch = async ()=>{
    try{
        await connectDB()
        await app.launch()
        console.log("successfully launched")
    }catch(e){
        console.log(e)
    }
}

launch()