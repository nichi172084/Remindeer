import dotenv from 'dotenv'
import { Telegraf } from "telegraf";
import { task } from './Commands/TaskComposer/task.composer.js';
import { stageInstance } from './config/stage.js';
import { session } from "telegraf";

dotenv.config()

const app = new Telegraf(process.env.BOT_TOKEN)

// setup Stage
app.use(session())
app.use(stageInstance.middleware())
app.on('err')
app.start((ctx) => ctx.scene.enter("LOGIN_ID"))

app.help((ctx) => {
    ctx.reply("Hi")
})

app.use(task)
export default app

