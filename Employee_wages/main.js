const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const NUM_OF_WORKING_DAYS = 20;

function getWorkHours(workType) {
  switch (workType) {
    case 1:
      return PART_TIME_HOURS;
    case 2:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}
let workHours = 0;

for (let day = 0; day <= NUM_OF_WORKING_DAYS; day++) {
  let workType = Math.floor(Math.random() * 3);
  workHours += getWorkHours(workType);
}
let dailyWage = workHours * WAGE_PER_HOUR;
console.log("Total Wage of "+NUM_OF_WORKING_DAYS +" Days is : $" + dailyWage);
