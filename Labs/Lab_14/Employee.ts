import Payslip from "./Payslip"

export default class Employee {
    private static id: number = 0
    protected empID: string
    protected empFullName: string
    protected empDOB: string
    protected baseSalary: number
    protected periodMap: Map<string, { payslip: Payslip, unpaidLeave: number }>

    constructor(fullName: string, dob: Date) {
        this.empID = `EMP_${this._generateEmployeeID()}`
        this.empFullName = fullName
        this.empDOB = dob.toLocaleDateString()
        this.baseSalary = 0
        this.periodMap = new Map();
    }

    _generateEmployeeID() {
        ++Employee.id
        return Employee.id.toString().padStart(3, '0')
    }

    getEmpID(): string {
        return this.empID
    }

    getEmpFullName(): string {
        return this.empFullName
    }

    setEmpFullName(fullName: string): void {
        this.empFullName = fullName
    }

    getEmpDOB(): string {
        return this.empDOB
    }

    setEmpDOB(dob: Date): void {
        this.empDOB = dob.toLocaleDateString()
    }

    getBaseSalary(): number {
        return this.baseSalary
    }

    setBaseSalary(baseSalary: number): void {
        this.baseSalary = baseSalary
    }

    getPeriodMap(): Map<string, { payslip: Payslip, unpaidLeave: number }> {
        return this.periodMap;
    }

    setPeriodMap(salaryPeriod: string, payslip: Payslip, unpaidLeave: number): void {
        this.periodMap.set(salaryPeriod, { payslip, unpaidLeave })
    }

    toStringByPeriod(period: string){
        let periodMapString = 'period:';

        this.periodMap.forEach((value, key) => {
            if (key === period) {
                periodMapString += ` ${key} {\n`
                let payslipString = value.payslip.toString();
                periodMapString += `\t\tpayslip: ${payslipString}, \n\t\tunpaidLeave: ${value.unpaidLeave}}`;
                return;
            }
        });

        return `
        ${this.constructor.name}{
            empID: '${this.empID}',
            empFullName: '${this.empFullName}',
            empDOB: '${this.empDOB}',
            baseSalary: ${this.baseSalary},
            ${periodMapString}}`;
    }

    toString() {
        let periodMapString = 'periodMap: Map(\n';

        this.periodMap.forEach((value, key) => {
            let payslipString = value.payslip.toString(); // Get the string representation of the Payslip object
            periodMapString += `  '${key}' => { payslip: ${payslipString}, unpaidLeave: ${value.unpaidLeave} },\n`;
        });
        periodMapString += ')';
        
        return `
        ${this.constructor.name}{
            empID: '${this.empID}',
            empFullName: '${this.empFullName}',
            empDOB: '${this.empDOB}',
            baseSalary: ${this.baseSalary},
            ${periodMapString}
        }
      `;
    }
}