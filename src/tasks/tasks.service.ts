import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entitiy";
import {  Repository } from "typeorm";
import { CreateTaskDto } from './dtos/create-task.dto';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private _taskRepo:Repository<Task>,
    ) {}

    findAll(): Promise<Task[]>{
        return this._taskRepo.find();
    }

    create(creationDto:CreateTaskDto ) : Promise<Task>{
        const newTask = this._taskRepo.create(creationDto)
        return this._taskRepo.save(newTask)
    }

    findOne(id: number): Promise<Task> {
        return this._taskRepo.findOneBy({ id });
    }

    async updateTitle(id:number, title:string): Promise<Task>{
        const task = await this.findOne(id)
        if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
        task.title = title
        return await this._taskRepo.save(task)
    }

    async delete(id:number){
        const task = await this.findOne(id)
        if (!task) throw new NotFoundException(`Taks with ID ${id} not found`);
        return await this._taskRepo.delete(task)
    }

}
