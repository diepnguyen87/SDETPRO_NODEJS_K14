import Utilities from "./Utilities"

export default class Payslip {

    private unpaidLeaveDays: number
    private actualWorkingDays: number
    private baseSalary: number
    private actualSalary: number

    constructor(period: string, unpaidLeaveDays: number, baseSalary: number) {
        this.unpaidLeaveDays = unpaidLeaveDays
        let totalWorkingDays = Utilities.getTotalWorkingDaysByPeriod(period)
        this.actualWorkingDays = totalWorkingDays - unpaidLeaveDays
        this.baseSalary = baseSalary
        this.actualSalary = Utilities.convertToInteger((baseSalary / totalWorkingDays) * this.actualWorkingDays)
    }

    getUnpaidLeaveDays(): number {
        return this.unpaidLeaveDays
    }

    setUnpaidLeaveDays(unpaidLeaveDays: number): void {
        this.unpaidLeaveDays = unpaidLeaveDays
    }

    getActualWorkingDate() {
        return this.actualWorkingDays
    }

    setActualWorkingDate(actualWorkingDays: number): void {
        this.actualWorkingDays = actualWorkingDays
    }

    getActualSalary(): number {
        return this.actualSalary
    }

    setActualSalary(actualSalary: number): void {
        this.actualSalary = actualSalary
    }

    toString() {
        return `{
                \tactual working days: ${this.actualWorkingDays},
                \tactual salary: ${this.actualSalary}}`;
    }
}