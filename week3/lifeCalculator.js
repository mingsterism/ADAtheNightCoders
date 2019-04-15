//Calculate your savings by the time you reach 50
yearlyIncome = monthlyIncome * 12;
monthlySaving = monthlyIncome - monthlyGeneralExpenses - monthlyCommitment;
durationOfYearsWorking = 50 - yearStartWorking;
incomeGrowth = yearlyIncome * rateOfIncomeGrowth;
yearlySaving = monthlySaving * 12;
incomeFromInterestRate = monthlySaving * savingInterestRate;
monthlyGeneralExpenses = dailyGeneralExpenses * dayPerMonth;

const compound = require("compound-interest");

const opts = {
  initial: 1000, // initial balance
  monthly: 100, // monthly addition
  interest: 5, // +% interest
  compound: 12, // compounding factor (1, 12, 365...)
  years: 5 // years
};

compound(opts); // 8083
compound.verbose(opts); // [1000, 2279, 3623, 5036, 6522, 8083]
