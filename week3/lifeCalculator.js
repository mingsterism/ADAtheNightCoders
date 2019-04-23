// Calculate your savings by the time you reach 50 y/o

// n = number of years until 50 y/o
// i = interest rate on savings account

// Net savings (S) =
// Add: (Monthly salary * 12)(1 + growth)
// Add: Year end bonus
// Less: (Average monthly expenses * 12)
// Less: Commitments per annum eg. hire purchase principle + interest

// Total savings until n year = S*n + S*n*i

class RetirementCalculator {
  constructor(
    currentMonthlyIncome
    //   currentAge,
    //   retirementAge,
    //   savingsPercentage,
    //   incomeGrowth,
    //   savingsInterestRate
  ) {
    this.currentMonthlyIncome = currentMonthlyIncome;
    // this.currentAge = currentAge;
    // this.retirementAge = retirementAge;
    // this.savingsInterestRate = savingsInterestRate;
    // this.savingsPercentage = savingsPercentage;
    // this.incomeGrowth = incomeGrowth;
  }

  annualIncome(annualIncomeCalc) {
    return this.currentMonthlyIncome * 12;
  }

  annualSavings() {}

  annualInvestment() {}

  compondedLifeIncome(startingAge, retirementAge, growthFactor) {}

  annualFixedExpenses() {}

  annualVariableExpenses() {}

  compondedLifeExpenses(startingAge, retirementAge, growthFactor) {}
}

var RetirementCalculator1 = new RetirementCalculator(1000);
var calculatePlan1 = RetirementCalculator1.annualIncome(1000);
console.log(calculatePlan1);
