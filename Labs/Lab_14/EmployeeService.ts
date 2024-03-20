import ContractEmployee from "./ContractEmployee"
import Employee from "./Employee"
import FullTimeEmployee from "./FullTimeEmployee"
import LeaveService from "./LeaveService"
import Payslip from "./Payslip"
import Utilities from "./Utilities"

export default class EmployeeService {
    static employeeList: Employee[]

    static createEmployee(): Employee[] {

        //Create Fulltime Employee
        let fulltimeEmp1 = new FullTimeEmployee("Nguyễn Văn Linh", new Date(1980, 11, 32))
        let fulltimeEmp2 = new FullTimeEmployee("Đinh Bộ Lĩnh", new Date(1990, 7, 30))
        let fulltimeEmp3 = new FullTimeEmployee("Dương Văn Nga", new Date(1995, 0, 31))

        //Create Contract Employee
        let contractEmp4 = new ContractEmployee("Trương Lăng Hách", new Date(1977, 9, 15))
        let contractEmp5 = new ContractEmployee("Bạch Lộc", new Date(1979, 1, 1))

        this.employeeList = [fulltimeEmp1, fulltimeEmp2, fulltimeEmp3, contractEmp4, contractEmp5]
        return this.employeeList
    }

    static calculateTotalSalary(employeeList: Employee[], period: string): string {
        let totalAmount: number = 0;

        for (const employee of employeeList) {
            // get unpaidLeaveDay by employeeID and period
            let unpaidLeaveDays = 0
            try {
                unpaidLeaveDays = LeaveService.getUnpaidLeaveByEmpID(employee.getEmpID(), period)
            } catch (error: any) {
                console.error((error as Error).message);
                return Utilities.formatUSDCurrency(0)
            }

            // Generate payslip
            let payslip = new Payslip(period, unpaidLeaveDays, employee.getBaseSalary())

            // Set payslip for employee
            employee.setPeriodMap(period, payslip, unpaidLeaveDays)

            // Accumulate each salary
            totalAmount += payslip.getActualSalary()
        }
        return Utilities.formatUSDCurrency(totalAmount)
    }

    static sortAscendingEmplooyeeListByActualSalary(period: string) {
        let empList = [...EmployeeService.employeeList]
        empList.sort((emp1, emp2) => {
            let object1 = emp1.getPeriodMap().get(period);
            let object2 = emp2.getPeriodMap().get(period);

            if (object1 && object2) {
                return object1.payslip.getActualSalary() - object2.payslip.getActualSalary();
            } else {
                if (!object1 && !object2) {
                    return 0; // Both objects are missing, consider them equal
                } else if (!object1) {
                    return 1; // object1 is missing, put emp1 after emp2
                } else {
                    return -1; // object2 is missing, put emp1 before emp2
                }
            }
        });
        return empList
    }

    static sortAscendingEmployeeListByName() {
        let empList = [...EmployeeService.employeeList]
        empList.sort((emp1, emp2) => {
            // Compare employee full names alphabetically
            return emp1.getEmpFullName().localeCompare(emp2.getEmpFullName());
        });
        return empList
    }

    static showEmployeeListByName(empList: Employee[]) {
        empList.forEach(employee => {
            console.log(employee.getEmpFullName());
        });
    }
}