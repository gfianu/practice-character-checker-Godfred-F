/*
Instructions
Create a small program that prompts the user for a word or phrase and then allows
them to query specific positions within that string.
Your application should:
1. Use readlineSync.question() to prompt a user for input
2. Prompt a user for an index number to find the character at that index
3. Use bracket notation to access the character
4. Print out the character
*/
// Import the readline-sync module
const readlineSync = require('readline-sync');
// Prompt the user for a word or phrase
const inputString = readlineSync.question('Please enter a word or phrase: ');
// Prompt the user for an index number
const index = parseInt(readlineSync.question('Please enter an index number: '), 10);
// Check if the index is valid
if (index >= 0 && index < inputString.length) {
    // Access the character at the specified index using bracket notation
    const character = inputString[index];
    // Print out the character
    console.log(`The character at index ${index} is: '${character}'`);
} else {
    // Print an error message if the index is invalid
    console.log('Error: Index is out of bounds. Please enter a valid index.');
}
// End of the program