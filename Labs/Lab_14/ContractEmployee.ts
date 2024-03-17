import Employee from "./Employee"

export default class ContractEmployee extends Employee {

    constructor(fullName:string, dob:Date){
        super(fullName, dob)
        this.baseSalary = 40000
    }
}