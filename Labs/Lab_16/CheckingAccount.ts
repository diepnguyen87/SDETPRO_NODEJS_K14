import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {

    private overDraftLimit = 1000

    constructor(){
        super(50)
        this.updateAvailableBalance()        
    }

    getBalance(): number {
        return this.totalBalance
    }

    deposit(amount: number): void {
        this.totalBalance += amount
        this.updateAvailableBalance()
    }

    withdraw(amount: number): void {
        if (amount > this.availableBalance) {
            throw new Error(`Your Available Balance <${this.availableBalance}> is not enough`)
        }
        this.totalBalance -= amount
        this.updateAvailableBalance()
    }

    updateAvailableBalance(): void {
        this.availableBalance = this.totalBalance + this.overDraftLimit - this.minimumBalance
    }
}