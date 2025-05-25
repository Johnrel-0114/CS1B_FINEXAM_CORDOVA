//  Get numbers from the user and convert to number array
let numbers = prompt("Enter numbers separated by commas (e.g. 24, 65, 21, 5, 9, 32, 42, 80, 57):")
  .split(',')               // Convert the input string into an array by splitting at commas
  .map(num => +num.trim()); // Convert each trimmed string into a number using unary plus

//  It Get names from the user and create an array
let names = prompt("Enter names separated by commas (e.g. Zenvo, Erica, Jordie, Alicia, Redon):")
  .split(',')               // Convert the input string into an array by splitting at commas
  .map(name => name.trim()); // Remove extra spaces around each name

//  Merge numbers and names into one array
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

//  Sort numbers in descending order and log
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// It  Sort names alphabetically and log
let sortedNames = names.sort();
console.log("Sorted Names:", sortedNames);
