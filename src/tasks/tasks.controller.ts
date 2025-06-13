import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskTitle } from "./dtos/update-task-title.dto";
import { DeleteResult } from "typeorm";

@Controller('tasks')
export class TasksController {

    constructor(
        private _tasksService: TasksService
    ) {}

    @Get("/")
    index(){
        return this._tasksService.findAll();
    }

    @Post("/store")
    store(@Body() dto: CreateTaskDto){
        return this._tasksService.create(dto)
    }

    @Patch(":id/update")
    update( @Param("id") id:number, @Body() {title}: UpdateTaskTitle){
        return this._tasksService.updateTitle(id, title)
    }

    @Delete(":id/delete")
    delete(@Param("id") id: number): Promise<DeleteResult>{
        return this._tasksService.delete(id)
    }

}
