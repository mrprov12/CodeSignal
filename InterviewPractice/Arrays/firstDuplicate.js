//https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q/description


//version 1: too slow for super large arrays
function firstDuplicate(a) {
  let dupes = [];
  let lowest2ndIndex = -1;
  a.forEach((num, index) => {
      if (index !== a.length-1) {
          for (var i = index + 1; i< a.length; i++) {
              if (a[i] === num && !JSON.stringify(dupes).includes(JSON.stringify([num, i]))) {
                  dupes.push([num, i]);
                  if (lowest2ndIndex === -1) {
                      lowest2ndIndex = i;
                  } else if (lowest2ndIndex > i) {
                      lowest2ndIndex = i
                  }
              }
          }
      }
  })

  return lowest2ndIndex === -1 ? -1 : a[lowest2ndIndex];
}


//try 2 too slow
function firstDuplicate(a) {
  let lowest2ndIndex = -1;

  let dupes = a.filter((e, i) => {
      return a.lastIndexOf(e) !== i;
  })

  dupes.forEach((e) => {
      let i = a.lastIndexOf(e);
      if (lowest2ndIndex === -1 | lowest2ndIndex > i) {
          lowest2ndIndex = i;
      }
  })



  return lowest2ndIndex === -1 ? -1 : a[lowest2ndIndex];
}


//final solution
//remember, objects and hash tables are wayyyyy faster than arrays to traverse!

function firstDuplicate(a) {
  let lowest2ndIndex = -1;

  let dupes = {'dupeElems': []};

  a.forEach((e, i) => {
     if (!dupes.hasOwnProperty(e)) {
         dupes[e] = [i];
     } else {
         dupes[e].push(i);
         dupes['dupeElems'].push(e);
     }
  })

  dupes['dupeElems'].forEach(e => {
      if (lowest2ndIndex === -1 || lowest2ndIndex > dupes[e][1]) {
          lowest2ndIndex = dupes[e][1];
      }
  })



  return lowest2ndIndex === -1 ? -1 : a[lowest2ndIndex];
}
