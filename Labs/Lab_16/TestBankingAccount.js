"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingAccount_1 = require("./SavingAccount");
var readline = require("readline-sync");
var CheckingAccount_1 = require("./CheckingAccount");
function showBankingSystemUI() {
    var isContinue = true;
    while (isContinue) {
        console.log("WELCOME TO OUR BANKING SYSTEM");
        console.log("\n        1. Saving account\n        2. Checking account\n        0. Exit\n        ");
        var yourOption = Number(readline.question("Enter your option: "));
        switch (yourOption) {
            case 0:
                isContinue = false;
                break;
            case 1:
                showBankingServiceUI("SAVING");
                break;
            case 2:
                showBankingServiceUI("CHECKING");
                break;
            default:
                console.log("Invalid option. Enter digit 1 or 2 only");
        }
    }
}
function showBankingServiceUI(accountType) {
    var newAccount;
    if (accountType === "SAVING") {
        newAccount = new SavingAccount_1.default();
    }
    else {
        newAccount = new CheckingAccount_1.default();
    }
    var isContinue = true;
    while (isContinue) {
        console.log("ALL SERVICES FOR ".concat(accountType, " ACCOUNT"));
        console.log("\n    1. Get balance\n    2. Deposit\n    3. Withdraw\n    4. Back\n    0. Exit\n");
        var yourOption = Number(readline.question("Enter your option: "));
        switch (yourOption) {
            case 0:
                process.exit();
            case 1:
                console.log("Your total balance is: ".concat(newAccount.getBalance()));
                break;
            case 2:
                var depositAmount = enterDepositAmount();
                newAccount.deposit(depositAmount);
                console.log("Deposit success:");
                console.log(newAccount);
                break;
            case 3:
                var withdrawAmount = enterWithdrawAmount();
                try {
                    newAccount.withdraw(withdrawAmount);
                    console.log("Withdraw success");
                    console.log(newAccount);
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message);
                    }
                }
                break;
            case 4:
                isContinue = false;
                showBankingSystemUI();
                break;
            default:
                console.log("Incorrect option.");
        }
    }
}
function enterDepositAmount() {
    while (true) {
        var depositAmout = Number(readline.question("Enter deposit amount: "));
        if (depositAmout) {
            return depositAmout;
        }
    }
}
function enterWithdrawAmount() {
    while (true) {
        var withdrawAmout = Number(readline.question("Enter withdraw amount: "));
        if (withdrawAmout) {
            return withdrawAmout;
        }
    }
}
showBankingSystemUI();
