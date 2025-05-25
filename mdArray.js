// Step 1: Get names from the user
let subArray1 = prompt("Enter names separated by commas (e.g. Genevieve, Juan, Luna, Gabriel, Elise):")
  .split(',') // Split the input string into an array using commas
  .map(name => name.trim()); // Remove any extra spaces from each name

// Step 2: Get ages from the user
let subArray2 = prompt("Enter ages separated by commas (e.g. 24, 65, 21, 5, 9):")
  .split(',') // Split the input string into an array using commas
  .map(age => parseInt(age.trim(), 10)); // Convert each age string to an integer

// Step 3: Create a new multi-dimensional array to store [name, age] pairs
let multiDimensionalArray = [];

// Step 4: Combine names and ages into the new array
for (let i = 0; i < subArray1.length; i++) {
  // Push a new array containing the name and corresponding age into the multi-dimensional array
  multiDimensionalArray.push([subArray1[i], subArray2[i]]);
}

// Step 5: Log each [name, age] pair to the console
multiDimensionalArray.forEach(pair => {
  console.log(pair); // Log the name-age pair to the console
});
