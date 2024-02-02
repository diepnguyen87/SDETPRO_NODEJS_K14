const readline = require("../../node_modules/readline-sync")
const { minBalance,
        minWithdraw,
        bankAccounts} = require("./BankData")

function showBankingApplication(){
    console.log("=====BANKING APPLICATION=====");
    console.log("1. Find an account");
    console.log("2. Withdraw money");
    console.log("0. Exit the program");
}

function enterAccountNumber(){
    return readline.question("Enter account number: ")
}

function enterWithdrawMoney(){
    return readline.question("Enter withdraw money: ")
}

function findAnAccount(){
    let enteredAccountNumber = enterAccountNumber()
    for (const account of bankAccounts) {
        if(account.accountNumber === enteredAccountNumber){
            return account
        }
    }
    return null
}

function showAccountInfo(account){
    console.log("==============================")
    if(account == null || account == undefined){
        console.log("The entered account number does not exist");
    }else{
        console.log("Account name:\t", account.accountName);
        console.log("Balance:\t", formatUSDCurrency(account.balance));
    }
    console.log("==============================")
}

function withdrawBalance(){
    let foundAccount = findAnAccount()
    if(foundAccount != null){
        showAccountInfo(foundAccount)
            let enteredWithdrawMoney = enterWithdrawMoney()
            if (isNaN(enteredWithdrawMoney)){
                console.log("Pls enter number only");
                return
            }

            if(enteredWithdrawMoney < minWithdraw){
                console.log("Minimum withdraw is " + minWithdraw + ". Please try again!");
            }else if(enteredWithdrawMoney <= foundAccount.balance-minBalance){
                console.log(">>>>>PROCESSING WITHDRAW MONEY");
                console.log("***WITHDRAW SUCCESS***");
                foundAccount.balance -= enteredWithdrawMoney
                console.log("Withdrawed money is: ", formatUSDCurrency(enteredWithdrawMoney));
                console.log("Remaining balance: ", formatUSDCurrency(foundAccount.balance));
            }else{
                console.log("!!! AVAILABLE BALANCE IS NOT ENOUGH. Please enter another one !!!");
            }
    }else{
        console.log("The entered account number does not exist");
    }
}

function formatUSDCurrency(money){
    return money.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

module.exports = {
    showBankingApplication: showBankingApplication,
    findAnAccount: findAnAccount,
    showAccountInfo: showAccountInfo,
    withdrawBalance: withdrawBalance
}