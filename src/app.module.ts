import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {TypeOrmModule} from "@nestjs/typeorm"
import { Task } from "./tasks/entities/task.entitiy";

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "tasks.db",
      entities: [Task],
      synchronize: true
    })



    ,TasksModule
  ],
  // providers: [],
})
export class AppModule {}
