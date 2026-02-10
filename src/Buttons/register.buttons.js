import { Markup } from "telegraf";

export const registerButton = () => {
    return Markup.inlineKeyboard(
        [[ Markup.button.callback("Yes", 'login') ], [ Markup.button.callback("No", 'register')]])
}