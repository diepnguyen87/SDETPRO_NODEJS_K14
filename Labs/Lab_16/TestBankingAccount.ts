import SavingAccount from "./SavingAccount";
import * as readline from 'readline-sync';
import CheckingAccount from "./CheckingAccount";


function showBankingSystemUI() {
    let isContinue = true
    while (isContinue) {
        console.log("WELCOME TO OUR BANKING SYSTEM");
        console.log(`
        1. Saving account
        2. Checking account
        0. Exit
        `);
        let yourOption = Number(readline.question("Enter your option: "))

        switch (yourOption) {
            case 0:
                isContinue = false
                break
            case 1:
                showBankingServiceUI("SAVING")
                break
            case 2:
                showBankingServiceUI("CHECKING")
                break
            default:
                console.log("Invalid option. Enter digit 1 or 2 only");
        }
    }
}

function showBankingServiceUI(accountType: string) {
    let newAccount
    if (accountType === "SAVING") {
        newAccount = new SavingAccount()
    } else {
        newAccount = new CheckingAccount()
    }

    let isContinue = true
    while (isContinue) {
        console.log(`ALL SERVICES FOR ${accountType} ACCOUNT`);
        console.log(`
    1. Get balance
    2. Deposit
    3. Withdraw
    0. Exit
`);

        let yourOption = Number(readline.question("Enter your option: "))
        switch (yourOption) {
            case 0:
                process.exit()
            case 1:
                console.log(`Your total balance is: ${newAccount.getBalance()}`)
                break
            case 2:
                let depositAmount = enterDepositAmount()
                newAccount.deposit(depositAmount)
                console.log("Deposit success:");
                console.log(newAccount);
                break;
            case 3:
                let withdrawAmount = enterWithdrawAmount()
                try {
                    newAccount.withdraw(withdrawAmount)
                    console.log("Withdraw success");
                    console.log(newAccount);
                }catch(error){
                    if (error instanceof Error) {
                        console.log(error.message);
                    } 
                }
                break;
            default:
                console.log("Incorrect option.");
        }
    }
}

function enterDepositAmount() {
    while (true) {
        let depositAmout = Number(readline.question("Enter deposit amount: "))
        if (depositAmout) {
            return depositAmout
        }
    }
}

function enterWithdrawAmount() {
    while (true) {
        let withdrawAmout = Number(readline.question("Enter withdraw amount: "))
        if (withdrawAmout) {
            return withdrawAmout
        }
    }
}

showBankingSystemUI()
