import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import {map} from "rxjs"

export class CustomInterCeptor implements NestInterceptor {
  intercept(
    context: ExecutionContext, handler: CallHandler
    ) {
         
        console.log("This is intercepting the request")
        console.log(context)
        return handler.handle().pipe(
           map((data)=>{
            const response={
                ...data,
                createdAt:data.created_at
            }
            delete response.updated_at;
            delete response.created_at;
            console.log("this is intercepting the response")
            console.log(response)
            return response;
           })
        )
    }
}
