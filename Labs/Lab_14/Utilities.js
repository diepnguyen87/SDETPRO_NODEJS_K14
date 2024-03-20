"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utilities {
    static getTotalWorkingDaysByPeriod(period) {
        let periodArr = period.split('/');
        let year = Number(periodArr[1]);
        let month = Number(periodArr[0]) - 1;
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let totalWorkingDays = 0;
        let currentDate = new Date(firstDay.toString());
        // Iterate through each day of the month
        while (currentDate <= lastDay) {
            // Check if the current day is not Saturday (6) or Sunday (0)
            if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
                totalWorkingDays++;
            }
            currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
        }
        return totalWorkingDays;
    }
    static getPeriod(year, month) {
        return `${month}/${year}`;
    }
    static formatUSDCurrency(money) {
        return money.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    static convertToInteger(money) {
        return Number(money.toFixed(0));
    }
    static generateRandomLeaveDays() {
        return Math.floor(Math.random() * 3) + 1;
    }
}
exports.default = Utilities;
//# sourceMappingURL=Utilities.js.map