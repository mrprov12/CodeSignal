//this was a cool problem! Was way harder with the time complexity constraint

/*
I: nxn array (int)
O: nxn array, rotated
C: O(1), max 4 seconds
E:
*/

function rotateImage(a) {
  //essentially converting row to col

  // //base matrix
  // let outputMatrix = [];
  // for (var i = 0; i < a.length; i++) {
  //     let row = [];
  //     for (var j = 0; j < a.length; j++) {
  //        outputMatrix.push([])
  //     }
  //     outputMatrix.push(row)
  // }
  let aRow = a.length-1;
  let aCol = 0;
  let oRow = 0;
  let output = [];
  while (aRow > -1) {
      if (aCol === a.length) {
          aRow--;
          oRow = 0;
          aCol = 0;
      } else if (output[0] === undefined || output.length < a.length) {
          output.push([a[aRow][aCol]]);
          aCol++;
          if (aCol === a.length) {
              aRow--;
              aCol = 0;
          }
          console.log(output)
      } else if (output.length === a.length && aCol < a.length) {
          output[oRow].push(a[aRow][aCol]);
          aCol++;
          oRow++;
      }
  }
  console.log(output)
  return output;
}