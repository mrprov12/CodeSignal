//https://app.codesignal.com/company-challenges/asana/2vJMZnQzdkkhCvmxs

function tasksTypes(deadlines, day) {
  let today = 0;
  let upcoming = 0;
  let later = 0;

  for (let i = 0; i < deadlines.length; i++) {
      let dl = deadlines[i];
      if (dl < day+1) {
          today++;
      } else if (dl >= day+1 && dl <= day+7) {
          upcoming++;
      } else if (dl > day+7 ) {
          later++;
      }
  }

  return [today, upcoming, later];
}



/*
Tried this with a for-in loop first, and kept getting 1 to many in today and 1 to few in upcoming. Why would this be?
*/