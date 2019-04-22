/**
 * Saving age 30 to 50(20 years)
 * Fix Salary Income(3000)
 * Daily saving and expenses(365 day)
 * investment (yearly )
 * income( yearly)
 * Commitment yearly(*12 month)
 */


/**
 * 
 */

class RetirementCalculator {
    constructor(
      currentMonthlyIncome,
      currentAge,
      retirementAge,
      savingsPercentage,
      incomeGrowth,
      savingsInterestRate
    ) {
      this.currentMonthlyIncome = currentMonthlyIncome;
      this.currentAge = currentAge;
      this.retirementAge = retirementAge;
      this.savingsInterestRate = savingsInterestRate;
      this.savingsPercentage = savingsPercentage;
      this.incomeGrowth = incomeGrowth;
    }
  
    annualIncome() {}
  
    annualSavings() {}
  
    annualInvestment() {}
  
    compondedLifeIncome(startingAge, retirementAge, growthFactor) {}
  
    annualFixedExpenses() {}
  
    annualVariableExpenses() {}
  
    compondedLifeExpenses(startingAge, retirementAge, growthFactor) {}
  }
  _
    