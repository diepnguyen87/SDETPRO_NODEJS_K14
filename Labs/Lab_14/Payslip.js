"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("./Utilities"));
class Payslip {
    constructor(period, unpaidLeaveDays, baseSalary) {
        this.unpaidLeaveDays = unpaidLeaveDays;
        let totalWorkingDays = Utilities_1.default.getTotalWorkingDaysByPeriod(period);
        this.actualWorkingDays = totalWorkingDays - unpaidLeaveDays;
        this.baseSalary = baseSalary;
        this.actualSalary = Utilities_1.default.convertToInteger((baseSalary / totalWorkingDays) * this.actualWorkingDays);
    }
    getUnpaidLeaveDays() {
        return this.unpaidLeaveDays;
    }
    setUnpaidLeaveDays(unpaidLeaveDays) {
        this.unpaidLeaveDays = unpaidLeaveDays;
    }
    getActualWorkingDate() {
        return this.actualWorkingDays;
    }
    setActualWorkingDate(actualWorkingDays) {
        this.actualWorkingDays = actualWorkingDays;
    }
    getActualSalary() {
        return this.actualSalary;
    }
    setActualSalary(actualSalary) {
        this.actualSalary = actualSalary;
    }
    toString() {
        return `{
                \tactual working days: ${this.actualWorkingDays},
                \tactual salary: ${this.actualSalary}}`;
    }
}
exports.default = Payslip;
//# sourceMappingURL=Payslip.js.map