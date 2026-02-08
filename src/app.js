
import { Telegraf } from "telegraf";
import { task } from './Commands/TaskComposer/task.composer.js';

const app = new Telegraf(process.env.BOT_TOKEN)

app.start((ctx) =>{
    ctx.reply("Hello")
})

app.help((ctx) => {
    ctx.reply("Hi")
})

app.use(task)
export default app

