// for (let i = 0; i < 5; i++) {
//   console.log("Iteration", i);
// }

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

// let keepLooping = true;
// let i = 0;

// while (keepLooping === true) {
//   console.log("Iteration", i);
//   keepLooping = Math.random() < 0.1;
//   i++;
// }

// const favouriteFood = ["Pizza", "Burgers", "Tacos", "Spaghett"];

// for (let i = 0; i < favouriteFood.length; i++) {
//   console.log(favouriteFood[i]);
// }

let array = [1, 2, 3, 4];
let array2 = ["string", "string2", "string3"];
let array3 = ["boom", "bop", "pow"];

function findElement(index1, index2, index3) {
  let cherryBlossom = array[index1];
  let lillies = array2[index2];
  let daisies = array3[index3];
  return [cherryBlossom, lillies, daisies];
}

findElement(0, 2, 2);

console.log(findElement(0, 2, 2));
