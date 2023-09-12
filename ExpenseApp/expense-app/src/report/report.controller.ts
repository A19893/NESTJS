import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  // ParseUUIDPipe,
  ParseEnumPipe,
} from "@nestjs/common";
import { ReportType } from "src/report/data";
import { CreateReportDto, ReportResponseDto } from "./dtos/report.dto";
import { v4 as uuid } from "uuid";
import { ReportService } from "./report.service";
//Every entities in nest js is always be in class
@Controller("report/:type")
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  getAllReports(@Param("type") type: string): ReportResponseDto {
    return this.reportService.getAllReports(type);
  }

  @Get(":id")
  getAllIncomeReports2(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id") uuid: string,
  ): ReportResponseDto {
    return this.reportService.getReportById(type, uuid);
  }

  @Post()
  createData(
    @Body() { amount, source }: CreateReportDto,
    @Param("type") type: string,
  ) {
    this.reportService.createReport({ amount, source, type }, uuid);

    return "Created";
  }

  @Put("putRequest/:id")
  putData(
    @Param("id") uuid: string,
    @Body()
    body: {
      amount: number;
    },
  ): object {
    return this.reportService.updateData(uuid, body);
  }

  @HttpCode(204)
  @Delete("DELETE/:id")
  deleteData(@Param("id") uuid: string): string {
    return this.reportService.deleteReports(uuid);
  }
}
