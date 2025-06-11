import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {

    constructor(
        private _tasksService: TasksService
    ) {}

    @Get("/")
    index(){
        return this._tasksService.findAll();
    }

}
