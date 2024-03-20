"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContractEmployee_1 = __importDefault(require("./ContractEmployee"));
const FullTimeEmployee_1 = __importDefault(require("./FullTimeEmployee"));
const LeaveService_1 = __importDefault(require("./LeaveService"));
const Payslip_1 = __importDefault(require("./Payslip"));
const Utilities_1 = __importDefault(require("./Utilities"));
class EmployeeService {
    static createEmployee() {
        //Create Fulltime Employee
        let fulltimeEmp1 = new FullTimeEmployee_1.default("Nguyễn Văn Linh", new Date(1980, 11, 32));
        let fulltimeEmp2 = new FullTimeEmployee_1.default("Đinh Bộ Lĩnh", new Date(1990, 7, 30));
        let fulltimeEmp3 = new FullTimeEmployee_1.default("Dương Văn Nga", new Date(1995, 0, 31));
        //Create Contract Employee
        let contractEmp4 = new ContractEmployee_1.default("Trương Lăng Hách", new Date(1977, 9, 15));
        let contractEmp5 = new ContractEmployee_1.default("Bạch Lộc", new Date(1979, 1, 1));
        this.employeeList = [fulltimeEmp1, fulltimeEmp2, fulltimeEmp3, contractEmp4, contractEmp5];
        return this.employeeList;
    }
    static calculateTotalSalary(employeeList, period) {
        let totalAmount = 0;
        for (const employee of employeeList) {
            // get unpaidLeaveDay by employeeID and period
            let unpaidLeaveDays = 0;
            try {
                unpaidLeaveDays = LeaveService_1.default.getUnpaidLeaveByEmpID(employee.getEmpID(), period);
            }
            catch (error) {
                console.error(error.message);
                return Utilities_1.default.formatUSDCurrency(0);
            }
            // Generate payslip
            let payslip = new Payslip_1.default(period, unpaidLeaveDays, employee.getBaseSalary());
            // Set payslip for employee
            employee.setPeriodMap(period, payslip, unpaidLeaveDays);
            // Accumulate each salary
            totalAmount += payslip.getActualSalary();
        }
        return Utilities_1.default.formatUSDCurrency(totalAmount);
    }
    static sortAscendingEmplooyeeListByActualSalary(period) {
        let empList = [...EmployeeService.employeeList];
        empList.sort((emp1, emp2) => {
            let object1 = emp1.getPeriodMap().get(period);
            let object2 = emp2.getPeriodMap().get(period);
            if (object1 && object2) {
                return object1.payslip.getActualSalary() - object2.payslip.getActualSalary();
            }
            else {
                if (!object1 && !object2) {
                    return 0; // Both objects are missing, consider them equal
                }
                else if (!object1) {
                    return 1; // object1 is missing, put emp1 after emp2
                }
                else {
                    return -1; // object2 is missing, put emp1 before emp2
                }
            }
        });
        return empList;
    }
    static sortAscendingEmployeeListByName() {
        let empList = [...EmployeeService.employeeList];
        empList.sort((emp1, emp2) => {
            // Compare employee full names alphabetically
            return emp1.getEmpFullName().localeCompare(emp2.getEmpFullName());
        });
        return empList;
    }
    static showEmployeeListByName(empList) {
        empList.forEach(employee => {
            console.log(employee.getEmpFullName());
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map