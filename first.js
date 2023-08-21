console.log("Krishna");
console.log(2 * 3);

// +
console.log(2 + "2");
console.log(2 - "2");

// Array -- indexing with 0
const fruits = ["Apple", "Mango", "Orange"];
let numbers = "apple";
numbers = "mango";

console.log(numbers);

console.log(fruits.length);

// Loops - for loop
//for (let i = 0; i < fruits.length; i++) {
 // console.log(fruits[i]);
//}
// For loop map

fruits.map((fruit) => {
    console.log(fruit);
  });
  
  // ForEach
  fruits.forEach((fruit) => {
    console.log(fruit);
  });
// For loop map
const mapFruit = fruits.map((fruit) => {
    return fruit;
  });
  
  console.log(mapFruit);
  
  // ForEach
  const fruitForEach = fruits.forEach((fruit) => {
    return fruit;
  });
  
  console.log(fruitForEach);