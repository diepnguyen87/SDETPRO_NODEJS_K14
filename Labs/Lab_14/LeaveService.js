"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeService_1 = __importDefault(require("./EmployeeService"));
const Utilities_1 = __importDefault(require("./Utilities"));
class LeaveService {
    static generateUnpaidLeave(period) {
        EmployeeService_1.default.employeeList.forEach(employee => {
            let unpaidLeaveDays = Utilities_1.default.generateRandomLeaveDays();
            let periodArr = this.unpaidLeavePeriodMap.get(employee.getEmpID());
            if (periodArr) {
                periodArr.push({ period, unpaidLeaveDays });
            }
            else {
                this.unpaidLeavePeriodMap.set(employee.getEmpID(), [{ period, unpaidLeaveDays }]);
            }
        });
    }
    static getUnpaidLeaveByEmpID(empID, expectedPeriod) {
        let periodArr = LeaveService.unpaidLeavePeriodMap.get(empID);
        if (periodArr) {
            for (const period of periodArr) {
                if (period["period"] === expectedPeriod) {
                    return period["unpaidLeaveDays"];
                }
            }
            console.log(`[INFO] Not found unpaid leave info for ${empID} by period ${expectedPeriod} ==> return 0 as default`);
            return 0;
        }
        else {
            throw new Error(`[ERROR] Employee ID [${empID}] is incorrect`);
        }
    }
}
LeaveService.unpaidLeavePeriodMap = new Map();
exports.default = LeaveService;
//# sourceMappingURL=LeaveService.js.map