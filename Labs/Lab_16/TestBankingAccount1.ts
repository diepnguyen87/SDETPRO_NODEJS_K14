import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

//Test saving account
let savingAcc = new SavingAccount()
savingAcc.deposit(100)
savingAcc.getBalance()
console.log(`Your total balance is ${savingAcc.getBalance()}`);

try{
    savingAcc.withdraw(101)
}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }else{
        console.log(error);
    }
}
savingAcc.withdraw(100)
console.log(savingAcc);    

//Test checking account
let checkingAcc = new CheckingAccount()
checkingAcc.deposit(100)
checkingAcc.getBalance()
console.log(`Your total balance is ${checkingAcc.getBalance()}`);

try{
    checkingAcc.withdraw(1051)
}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }else{
        console.log(error);
    }
}
checkingAcc.withdraw(200)
console.log(checkingAcc);


