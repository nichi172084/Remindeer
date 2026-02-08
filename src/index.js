import dotenv from 'dotenv'
dotenv.config()

import app from "./app.js"

const launch = async ()=>{
    try{
        await app.launch()
        console.log("successfully launched")
    }catch(e){
        console.log(e)
    }
}

launch()