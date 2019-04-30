/**
 * Calcualte your savings by the time you reach 50
 * @param
 * Your current income as of today
 * Total savings as of today
 * The duration of years working until you reach 50
 * Rate of income growth every year
 * Your yearly savings
 * Return of Investment yearly
 * Savings interest rate
 * Bonus income yearly
 * What is your fixed commitments yearly
 * Daily generale expenses
 */
const compound = require("compound-interest");

const opts = {
  initial: 1000, // initial balance
  monthly: 100, // monthly addition
  interest: 5, // +% interest
  compound: 12, // compounding factor (1, 12, 365...)
  years: 5 // years
};

compound(opts); // 8083
console.log(compound.verbose(opts));

class RetirementCalculator {
  constructor({
    currentMonthlyIncome,
    currentAge,
    retirementAge,
    savingsPercentage,
    incomeGrowth,
    savingsInterestRate
  }) {
    this.currentMonthlyIncome = currentMonthlyIncome;
    this.currentAge = currentAge;
    this.retirementAge = retirementAge;
    this.savingsInterestRate = savingsInterestRate;
    this.savingsPercentage = savingsPercentage;
    this.incomeGrowth = incomeGrowth;
  }

  annualIncome(monthlySalary) {
    // return monthlySalary * 12;
    return this.currentMonthlyIncome * 12;
  }

  annualSavings() {}

  annualInvestment(riskRating) {
    // the more risker your rating, the higher your investment but also higher
    // chances of losing money
    console.log("annual investment");
  }

  compondedLifeIncome(year) {
    console.log("COMPOUNTED LIFE INCOME");
    var compoundedSavings =
      this.currentMonthlyIncome *
      this.savingsPercentage *
      12 *
      (1 + this.incomeGrowth) ** year;
    return compoundedSavings;
  }

  annualFixedExpenses(expensesObject, years, growthFactor) {
    var totalExpenses = expensesObject.mortgage + expensesObject.groceries;
    return totalExpenses;
  }

  annualVariableExpenses() {}

  compondedLifeExpenses(
    startingAge,
    retirementAge,
    growthFactor,
    fixedExpensesObject
  ) {
    var compondedLifeFixedExpense = 0;
    for (var year = 0; year < retirementAge - startingAge; year++) {
      compondedLifeFixedExpense =
        compondedLifeFixedExpense +
        this.annualFixedExpenses(fixedExpensesObject, year, growthFactor);
    }
    return {
      compondedLifeFixedExpense: compondedLifeFixedExpense
    };
  }
}
var yearlyFixedExpense = {
  mortgage: 5000 * 12,
  groceries: 1000 * 12
};

var ming = {
  currentMonthlyIncome: 5000,
  incomeGrowth: 0.05,
  savingsPercentage: 0.3
};
var erin = {
  currentMonthlyIncome: 5000
};

// var me = new RetirementCalculator({ currentMonthlyIncome: 5000 });
// var me = new RetirementCalculator(ming);
// console.log(me.compondedLifeIncome(20), "-------------");

// console.log(me.compondedLifeExpenses(20, 50, 0.05, yearlyFixedExpense));
// // console.log(me.annualIncome(5000));
// console.log(me.annualIncome());
