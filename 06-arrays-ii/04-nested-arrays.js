// let rsvpGroups = [['Jane', 'Mel'], "Jack", ['Rohan', 'David', 'Meg']];

// console.log(rsvpGroups[1])// 'Jack'
// console.log(rsvpGroups[2][1])// 'David'

// for (let i = 0; i < rsvpGroups.length; i++) {
//   let element = rsvpGroups[i]; 

// console.log(element);
// check element :
// if it's a string, log out elem

// if it's an array, loop over

//   if (!Array.isArray(element)){
//     console.log(element)
//   } else {
//     const nestedArr = element;

//     for (let j = 0; j < nestedArr.length; j++){
//       console.log(nestedArr[j]);
//     }
//   }
// }


// let grid = [
//   [11, 12, 13],
//   [21, 22, 23],
//   [31, 32, 33]
// ];
// console.log(grid);
// console.log(grid[2]);

// console.log([grid[0][2], grid[1][2], grid[2][2]])


// for (let i = 0; i < grid.length; i++) {
//   const row = grid[i];
//   for (let j = 0; j < row.length; j++){
//     const elem = row[j]; //grid[i][j]

//     console.log("The elem at row", i + 1, "and column", j+1, "is", elem);
//   }
// }