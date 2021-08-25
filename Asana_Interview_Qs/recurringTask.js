//https://app.codesignal.com/company-challenges/asana/igEBmm3ykm4zwYkcQ
//in prograss

function recurringTask(firstDate, k, daysOfTheWeek, n) {
  let day = Number.parseInt(firstDate.slice(0, 2));
  let month = Number.parseInt(firstDate.slice(3, 5));
  let year = Number.parseInt(firstDate.slice(firstDate.length - 4));
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let feb = 28;
  //Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      feb = 29;
  }
  let monthLengths = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let daySum = 0;
  for (var i = 0; i < month; i++) {
      if (i < month-1) {
          daySum += monthLengths[i];
      } else {
          daySum += day;
      }
  }

  let OGdayOfWeek = daySum % 7 + 3; //original day of week for first date, adjusted to match the indexing of weekdays (ie. 1/1/2015 === thursday, so index 4)

  let digitDaysOfWeek = [];
  daysOfTheWeek.forEach(day => digitDaysOfWeek.push(weekdays.indexOf(day)));

  let output = [firstDate];
  let currentDate = firstDate;
  for (var i = 0; i < k; i++) {
      for (var j = 0; j < digitDaysOfWeek.length; j++) {
          if (currentDate === firstDate && OGdayOfWeek < digitalDaysOfWeek[j]) { //catch up dayDigit to repeating days digit
              daySum += digitalDaysOfWeek - OGdayOfWeek; //get difference btw days and add to daySum

              currentDate =
          }
          output.push()
      }
  }

  return output;

}
