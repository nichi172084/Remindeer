import { Composer } from "telegraf";
import { AddTask } from "../../Handlers/TaskHandler/task.handler.js";

export const task = new Composer()

task.command('add', AddTask) 