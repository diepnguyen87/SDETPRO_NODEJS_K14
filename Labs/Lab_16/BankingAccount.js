"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount = /** @class */ (function () {
    function BankingAccount(minimumBalance) {
        this.totalBalance = 0;
        this.minimumBalance = 0;
        this.availableBalance = 0;
        this.minimumBalance = minimumBalance;
    }
    return BankingAccount;
}());
exports.default = BankingAccount;
