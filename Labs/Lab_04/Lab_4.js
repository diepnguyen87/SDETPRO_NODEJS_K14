const readline = require('readline-sync')
const { showBankingApplication, 
        findAnAccount,
        showAccountInfo,
        withdrawBalance } = require ("./BankServices")

let isPlaying = true;
while(isPlaying){
    showBankingApplication()
    let selectedOption = readline.question("Please enter your option: ")
    switch (selectedOption) {
        case "1":
            let foundAccount = findAnAccount()
            showAccountInfo(foundAccount)
            break;
        case "2": 
            withdrawBalance()
            break;
        case "0":
            console.log("=== Exit the program ===");
            isPlaying = false;
            break;
        default:
            console.log("Incorrect option. Enter only digits 0, 1, 2")
    }
}


