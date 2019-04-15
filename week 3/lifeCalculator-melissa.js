// savings by the time you reach 50
// current income as of today
// duration of years working till 50
// rate of income growth yearly
// yearly savings
// return investment
// interest rate return
// bonus
// commitment
// expenses

// income per month = 1000
// + income per year = income per month * 12
// + increment per year = income per year * 30%
// + bonus per year = 1000 * 3
// - commitment + expenses = 50% total income per year
// + interest and investment return = 10% total income oer year
// following year = income 30% extra

class RetirementCalculator {
  constructor(currentMonthlyIncome) {
    this.currentMonthlyIncome = currentMonthlyIncome;
  }

  annualIncome() {
    return this.currentMonthlyIncome * 12;
  }
}

var me = new RetirementCalculator(1000);
console.log("annual income is ", me.annualIncome());
