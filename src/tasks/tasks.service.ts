import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entitiy";
import { Repository } from "typeorm";
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

}
