export default abstract class BankingAccount {
    protected totalBalance = 0
    protected minimumBalance = 0
    protected availableBalance = 0

    constructor(minimumBalance: number){
        this.minimumBalance = minimumBalance
    }

    abstract getBalance(): number
    abstract deposit(amount: number): void
    abstract withdraw(amount: number): void
    abstract updateAvailableBalance(): void
}