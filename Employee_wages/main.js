const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

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
let totalHours = 0;
let totalDays = 0;

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
  let workType = Math.floor(Math.random() * 3);
  let workHours = getWorkHours(workType);

  if (totalHours + workHours > MAX_WORKING_DAYS) {
    workHours = MAX_WORKING_DAYS - totalDays;
  }
  totalHours += workHours;
  totalDays++;
}

let totalWage = totalHours * WAGE_PER_HOUR;
console.log(
  `Total Days: ${totalDays}, Total Hours: ${totalHours}, Total Wage: $${totalWage}`
);
