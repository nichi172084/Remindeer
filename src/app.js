import dotenv from 'dotenv'
import { Telegraf } from "telegraf";
import { task } from './Commands/TaskComposer/task.composer.js';

dotenv.config()

const app = new Telegraf(process.env.BOT_TOKEN)
app.start((ctx) =>{
    ctx.reply("I am Remindeer, I can help you remind your task with simple and user friendly approach. But first, do you have an existing account?")
})

app.help((ctx) => {
    ctx.reply("Hi")
})

app.use(task)
export default app

