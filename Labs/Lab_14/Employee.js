"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(fullName, dob) {
        this.empID = `EMP_${this._generateEmployeeID()}`;
        this.empFullName = fullName;
        this.empDOB = dob.toLocaleDateString();
        this.baseSalary = 0;
        this.periodMap = new Map();
    }
    _generateEmployeeID() {
        ++Employee.id;
        return Employee.id.toString().padStart(3, '0');
    }
    getEmpID() {
        return this.empID;
    }
    getEmpFullName() {
        return this.empFullName;
    }
    setEmpFullName(fullName) {
        this.empFullName = fullName;
    }
    getEmpDOB() {
        return this.empDOB;
    }
    setEmpDOB(dob) {
        this.empDOB = dob.toLocaleDateString();
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    setBaseSalary(baseSalary) {
        this.baseSalary = baseSalary;
    }
    getPeriodMap() {
        return this.periodMap;
    }
    setPeriodMap(salaryPeriod, payslip, unpaidLeave) {
        this.periodMap.set(salaryPeriod, { payslip, unpaidLeave });
    }
    toStringByPeriod(period) {
        let periodMapString = 'period:';
        this.periodMap.forEach((value, key) => {
            if (key === period) {
                periodMapString += ` ${key} {\n`;
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
Employee.id = 0;
exports.default = Employee;
//# sourceMappingURL=Employee.js.map