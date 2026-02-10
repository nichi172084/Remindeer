import { Scenes } from "telegraf";
import { registerButton } from "../Buttons/register.buttons.js";

export const loginWizard = new Scenes.WizardScene("LOGIN_ID", 
    async (ctx) => {
        await ctx.reply("I am Remindeer, I can help you remind your task with simple and \
            user friendly approach. But first, do you have an existing account?", registerButton())
        ctx.wizard.next()
    },
    async (ctx) =>{

    }
)

loginWizard.action("login" , async (ctx) =>{
    await ctx.reply("Please enter your email")
    ctx.scene.leave()
})

loginWizard.action("register", async (ctx) => {
    await ctx.reply("Please register")
    ctx.scene.leave()
})
