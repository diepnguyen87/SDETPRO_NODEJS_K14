import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {

    constructor(fullName: string, dob: Date) {
        super(fullName, dob)
        this.baseSalary = 50000
    }
}