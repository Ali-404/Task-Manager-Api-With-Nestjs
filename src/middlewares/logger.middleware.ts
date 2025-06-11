import { NestMiddleware } from "@nestjs/common";

export class LoggerMiddleware implements  NestMiddleware {
    use(req: Request, res: Response, next: (error?: Error | any) => void) {
        console.log("New Request with: " + req.method)
        return next()
    }

}