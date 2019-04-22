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

// P = 5000.
// r = 5/100 = 0.05 (decimal).
// n = 12.
// t = 10.

// If we plug those figures into the formula, we get the following:

// A = 5000 (1 + 0.05 / 12) (12 * 10) = 8235.05.

class RetirementCalculator {
  constructor(currentP, currentAgeT, retirementAgeT, savingsPercentage, annualInterestRateR) {
      this.currentP = currentP;
      this.currentAgeT = currentAgeT;
      this.retirementAgeT = retirementAgeT;
      this.annualInterestRateR = annualInterestRateR; //0.05
      this.savingsPercentage = savingsPercentage; // 0.10
  }

  
  annualIncome(P) {
      // return monthlySalary * 12;
      return this.currentP * 12;
  }

// Savings from 10% of my salary
  compondedSavings() {
      console.log('COMPOUNTED LIFE INCOME');
      var compoundedSavings =
          this.currentP *
          this.savingsPercentage *
          (1 + this.annualInterestRateR) ** (this.retirementAgeT - this.currentAgeT);
          return compoundedSavings;
      }
      
      
      
      var yearlyFixedExpense = {
      mortgage: 3000 * 12,
      groceries: 1000 * 12
  };
      annualFixedExpenses(expensesObject, years, growthFactor) {
      var totalExpenses = expensesObject.mortgage + expensesObject.groceries;
      return totalExpenses;
  }

  annualVariableExpenses() {}

  compondedLifeExpenses(startingAge, retirementAge, growthFactor, fixedExpensesObject) {
      var compondedLifeFixedExpense = 0;
      for (var year = 0; year < retirementAge - startingAge; year++) {
          compondedLifeFixedExpense =
              compondedLifeFixedExpense + this.annualFixedExpenses(fixedExpensesObject, year, growthFactor);
      }
      return {
          compondedLifeFixedExpense: compondedLifeFixedExpense
      };
  }
}

var ming = {
  currentMonthlyIncome: 5000,
  incomeGrowth: 0.05,
  savingsPercentage: 0.3
};
var erin = {
  currentMonthlyIncome: 5000
};

var me = new RetirementCalculator(5000, 27, 37, 0.1, 0.05);
// var me = new RetirementCalculator(ming);
// console.log(me.compondedLifeIncome(20), "-------------");

// console.log(me.compondedLifeExpenses(20, 50, 0.05, yearlyFixedExpense));
// // console.log(me.annualIncome(5000));
console.log(me.annualIncome());
console.log(me.compoundedSavings());

