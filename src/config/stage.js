import { Stage } from "telegraf/scenes";
import { loginWizard } from "../Scenes/login.scene.js";

export const stageInstance = new Stage([loginWizard])
