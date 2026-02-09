import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    taskName : {
        type:String,
        required: true
    },
    due : {
        type: Date,
        required: true
    }
})

export default mongoose.model(task, taskSchema)