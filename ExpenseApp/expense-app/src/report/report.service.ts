import { ReportType, Data } from "src/report/data";
import { Injectable } from "@nestjs/common";
import { ReportResponseDto } from "./dtos/report.dto";

@Injectable()
export class ReportService {
  getAllReports(type): any {
    // const report=
    return Data.report.filter((report) => {
      if (report.type === type) return report;
    });
    // console.log(report)
    // return new ReportResponseDto(report)
  }

  getReportById(type: ReportType, uuid: string): ReportResponseDto {
    // const report=
    const report = Data.report
      .filter((item) => item.type === type)
      .find((item) => item.id === uuid);
    return new ReportResponseDto(report);
  }

  createReport(body, uuid) {
    Data.report.push({
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: body.type === "income" ? ReportType.INCOME : ReportType.EXPENSE,
    });
  }

  updateData(uuid, body) {
    const index = Data.report.findIndex((item) => item.id === uuid);
    Data.report[index] = {
      ...Data.report[index],
      amount: body.amount,
    };
    return Data.report[index];
  }

  deleteReports(uuid) {
    const index = Data.report.findIndex((item) => item.id === uuid);
    Data.report.splice(index, 1);
    return "Deleted";
  }
}
