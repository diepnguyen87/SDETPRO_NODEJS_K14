"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
// let savingAcc = new SavingAccount()
// savingAcc.deposit(100)
// savingAcc.getBalance()
// console.log(`Your total balance is ${savingAcc.getBalance()}`);
// try{
//     savingAcc.withdraw(101)
// }catch(error){
//     if(error instanceof Error){
//         console.log(error.message);
//     }else{
//         console.log(error);
//     }
// }
// savingAcc.withdraw(100)
// console.log(savingAcc);    
var checkingAcc = new CheckingAccount_1.default();
checkingAcc.deposit(100);
checkingAcc.getBalance();
console.log("Your total balance is ".concat(checkingAcc.getBalance()));
try {
    checkingAcc.withdraw(101);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log(error);
    }
}
checkingAcc.withdraw(100);
console.log(checkingAcc);
