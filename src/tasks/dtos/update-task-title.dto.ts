import { IsString, MinLength } from "class-validator";

export class UpdateTaskTitle{
    @IsString()
    @MinLength(1)
    title: string;

}