"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount_1 = require("./BankingAccount");
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        return _super.call(this, 0) || this;
    }
    SavingAccount.prototype.getBalance = function () {
        return this.totalBalance;
    };
    SavingAccount.prototype.deposit = function (amount) {
        this.totalBalance += amount;
        this.updateAvailableBalance();
    };
    SavingAccount.prototype.withdraw = function (amount) {
        if (amount > this.availableBalance) {
            throw new Error("Your Available Balance <".concat(this.availableBalance, "> is not enough"));
        }
        this.totalBalance -= amount;
        this.updateAvailableBalance();
    };
    SavingAccount.prototype.updateAvailableBalance = function () {
        this.availableBalance = this.totalBalance - this.minimumBalance;
    };
    return SavingAccount;
}(BankingAccount_1.default));
exports.default = SavingAccount;
