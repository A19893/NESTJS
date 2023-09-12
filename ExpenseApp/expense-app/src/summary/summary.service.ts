import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/report/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {

    constructor(private readonly reportService: ReportService){}
    calculateSummary(){
        const allExpenses=this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum,report)=>sum+report.amount,0)
        const allIncomes=this.reportService.getAllReports(ReportType.INCOME).reduce((sum,report)=>sum+report.amount,0)
        return {
            totalIncome:allIncomes,
            totalExpense:allExpenses,
            netIncome:allIncomes-allExpenses
        }
    }
}
