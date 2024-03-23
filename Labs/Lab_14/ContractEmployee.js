"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class ContractEmployee extends Employee_1.default {
    constructor(fullName, dob) {
        super(fullName, dob);
        this.baseSalary = 40000;
    }
}
exports.default = ContractEmployee;
//# sourceMappingURL=ContractEmployee.js.map