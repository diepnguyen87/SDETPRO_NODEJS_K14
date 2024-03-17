import EmployeeService from "./EmployeeService"
import Utilities from "./Utilities"

export default class LeaveService {
    static unpaidLeavePeriodMap: Map<string, { period: string, unpaidLeaveDays: number }[]> = new Map()

    static generateUnpaidLeave(period: string) {
        EmployeeService.employeeList.forEach(employee => {
            let unpaidLeaveDays = Utilities.generateRandomLeaveDays()
            let periodArr = this.unpaidLeavePeriodMap.get(employee.getEmpID())
            if (periodArr) {
                periodArr.push({ period, unpaidLeaveDays })
            } else {
                this.unpaidLeavePeriodMap.set(employee.getEmpID(), [{ period, unpaidLeaveDays }])
            }
        })
    }

    static getUnpaidLeaveByEmpID(empID: string, expectedPeriod: string): number {
        let periodArr = LeaveService.unpaidLeavePeriodMap.get(empID)
        if (periodArr) {
            for (const period of periodArr) {
                if (period["period"] === expectedPeriod) {
                    return period["unpaidLeaveDays"]
                }
            }
            console.log(`[INFO] Not found unpaid leave info for ${empID} by period ${expectedPeriod} ==> return 0 as default`);
            return 0
        } else {
            throw new Error(`[ERROR] Employee ID [${empID}] is incorrect`)
        }
    }
}