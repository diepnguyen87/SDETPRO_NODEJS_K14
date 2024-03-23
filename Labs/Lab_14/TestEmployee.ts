import EmployeeService from "./EmployeeService";
import LeaveService from "./LeaveService";
import Utilities from "./Utilities";

// Create 3 fulltime employees, 2 contract employees
let employeeList = EmployeeService.createEmployee()

// Create 3 periods
let period1 = Utilities.getPeriod(2024, 1)
let period2 = Utilities.getPeriod(2024, 2)
let period3 = Utilities.getPeriod(2024, 3)

// Generate random unpaid leave days for each employee
LeaveService.generateUnpaidLeave(period1)
LeaveService.generateUnpaidLeave(period2)

//Calculate Total Salary
let totalSalary1 = EmployeeService.calculateTotalSalary(employeeList, period1)
console.log(`Total salary payment for ${period1}: ${totalSalary1}`);

let totalSalary2 = EmployeeService.calculateTotalSalary(employeeList, period2)
console.log(`Total salary payment for ${period2}: ${totalSalary2}`);

let totalSalary3 = EmployeeService.calculateTotalSalary(employeeList, period3)
console.log(`Total salary payment for ${period3}: ${totalSalary3}`);

// Sort employee list by actual salary
let sortedEmployeeListBySalary = EmployeeService.sortAscendingEmplooyeeListByActualSalary(period1)

let employeeWithHighestSalary = sortedEmployeeListBySalary[sortedEmployeeListBySalary.length - 1].toStringByPeriod(period1)
let employeeWithLowestSalary = sortedEmployeeListBySalary[0].toStringByPeriod(period1)

console.log(`Employee with highest salary in ${period1}: ${employeeWithHighestSalary}`);
console.log(`Employee with lowest salary in ${period1}: ${employeeWithLowestSalary}`);

// Sort employee list by name
let sortedEmployeeListByName = EmployeeService.sortAscendingEmployeeListByName()
EmployeeService.showEmployeeListByName(sortedEmployeeListByName)