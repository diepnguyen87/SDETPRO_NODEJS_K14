import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    constructor(){
        super(0)
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
        this.availableBalance = this.totalBalance - this.minimumBalance
    }
}