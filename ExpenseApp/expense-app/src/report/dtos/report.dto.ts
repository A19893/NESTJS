import {IsNumber,IsPositive,IsNotEmpty, IsString, IsOptional} from "class-validator"
import { ReportType } from "src/report/data";
import {Exclude,Expose} from "class-transformer"
export class CreateReportDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount: number;
    

  @IsNotEmpty()
  @IsString()
   source: string;
}

export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    @Exclude() 
    created_at:Date;

    @Exclude()
    updated_at:Date;
    type: ReportType;
    
    @Expose({name:"createdAt"})
    transformCreatedAt(){
        return this.created_at
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this,partial)
    }
}
