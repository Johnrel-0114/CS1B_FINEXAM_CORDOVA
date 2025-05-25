// Get the first word from the user
let word1 = prompt("Enter the first word (e.g. RACECAR):");
// The prompt function displays a dialog box that prompts the user for input.
// The input is stored in the variable word1.

// Get the second word from the user
let word2 = prompt("Enter the second word (e.g. RECORDER):");
// Similar to the first prompt, this asks the user for a second word and stores it in word2.

// Function to reverse a string
function reverseString(str) {
  // Split the string into an array of characters
  // Reverse the array of characters
  // Join the reversed array back into a string
  return str.split('').reverse().join('');
}

// Logging the original and reversed strings for word1
console.log("Original word1:", word1);
// This logs the original word1 to the console.

let reversedWord1 = reverseString(word1);
// Calls the reverseString function with word1 as an argument and stores the result in reversedWord1.
console.log("Reversed word1:", reversedWord1);
// This logs the reversed version of word1 to the console.

// Logging whether word1 is a palindrome (true or false)
console.log("Is word1 a palindrome?", word1 === reversedWord1);
// This checks if the original word1 is equal to its reversed version.
// If they are the same, it logs true; otherwise, it logs false.

// Logging the original and reversed strings for word2
console.log("Original word2:", word2);
// This logs the original word2 to the console.

let reversedWord2 = reverseString(word2);
// Calls the reverseString function with word2 as an argument and stores the result in reversedWord2.
console.log("Reversed word2:", reversedWord2);
// This logs the reversed version of word2 to the console.

// Logging whether word2 is a palindrome (true or false)
console.log("Is word2 a palindrome?", word2 === reversedWord2);
// This checks if the original word2 is equal to its reversed version.
// If they are the same, it logs true; otherwise, it logs false.
