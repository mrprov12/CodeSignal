//https://app.codesignal.com/company-challenges/asana/vpDXQhiLagoaM27KL

/*
I: names -array of strs, statues -array of bool (T = on vacation, closed to tasks), projects - array of num(int?), tasks - array of num(int?)
O: person with highest availability - str
C:
E: all employees status are true
*/

function smartAssigning(names, statuses, projects, tasks) {
  //higher availability means tasks <= && projects <

  let HAindex = -1; //highestAvailabilityIndex

  for (var i = 0; i < names.length; i++) { //indexes are synced btw lists
      if (HAindex === -1 && !statuses[i]) {
          HAindex = i;
      } else if (HAindex > -1 && !statuses[i]) {
          if (tasks[i] < tasks[HAindex] || (tasks[i] === tasks[HAindex] && projects[i] < projects[HAindex])) {
          HAindex = i;
      }
      }
  }
  return names[HAindex];
}
