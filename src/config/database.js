import mongoose from 'mongoose'

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_URI)
    }catch(e){
        console.log(`cant conect to DB: ${e}`)
    }
}