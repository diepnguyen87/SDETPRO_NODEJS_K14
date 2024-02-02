const minBalance = 20
const minWithdraw = 50

let account1 = {"accountNumber": "A001", 
                "routingNumber": "R001", 
                "accountName": "Tran Van Bach", 
                "balance": 100}
account2 = JSON.parse(JSON.stringify(account1))
account2.accountNumber = "A002"
account2.accountName = "Bui Huu Nghia"

let bankAccounts = [account1, account2]

module.exports = {  minBalance,
                    minWithdraw,
                    bankAccounts}