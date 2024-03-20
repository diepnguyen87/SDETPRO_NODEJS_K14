"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeService_1 = __importDefault(require("./EmployeeService"));
const LeaveService_1 = __importDefault(require("./LeaveService"));
const Utilities_1 = __importDefault(require("./Utilities"));
// Create 3 fulltime employees, 2 contract employees
let employeeList = EmployeeService_1.default.createEmployee();
// Create 3 periods
let period1 = Utilities_1.default.getPeriod(2024, 1);
let period2 = Utilities_1.default.getPeriod(2024, 2);
let period3 = Utilities_1.default.getPeriod(2024, 3);
// Generate random unpaid leave days for each employee
LeaveService_1.default.generateUnpaidLeave(period1);
LeaveService_1.default.generateUnpaidLeave(period2);
//Calculate Total Salary
let totalSalary1 = EmployeeService_1.default.calculateTotalSalary(employeeList, period1);
console.log(`Total salary payment for ${period1}: ${totalSalary1}`);
let totalSalary2 = EmployeeService_1.default.calculateTotalSalary(employeeList, period2);
console.log(`Total salary payment for ${period2}: ${totalSalary2}`);
let totalSalary3 = EmployeeService_1.default.calculateTotalSalary(employeeList, period3);
console.log(`Total salary payment for ${period3}: ${totalSalary3}`);
// Sort employee list by actual salary
let sortedEmployeeListBySalary = EmployeeService_1.default.sortAscendingEmplooyeeListByActualSalary(period1);
let employeeWithHighestSalary = sortedEmployeeListBySalary[sortedEmployeeListBySalary.length - 1].toStringByPeriod(period1);
let employeeWithLowestSalary = sortedEmployeeListBySalary[0].toStringByPeriod(period1);
console.log(`Employee with highest salary in ${period1}: ${employeeWithHighestSalary}`);
console.log(`Employee with lowest salary in ${period1}: ${employeeWithLowestSalary}`);
// Sort employee list by name
let sortedEmployeeListByName = EmployeeService_1.default.sortAscendingEmployeeListByName();
EmployeeService_1.default.showEmployeeListByName(sortedEmployeeListByName);
//# sourceMappingURL=TestEmployee.js.map