maheshjs

🚀 Introduction
maheshjs is a lightweight and efficient utility library designed to simplify your coding tasks. It provides commonly used helper functions for:

✅ String manipulation
✅ Random number generation
✅ Mathematical calculations
✅ Date and time operations

Designed to be fast, simple, and easy to use in any JavaScript or TypeScript project!

📦 Installation
You can install maheshjs using npm or yarn:

sh
Copy
Edit
# Using npm
npm install maheshjs

# Using yarn
yarn add maheshjs
🛠️ Usage
Import maheshjs into your JavaScript or TypeScript project:

javascript
Copy
Edit
import { getString, getRandomInt, isEven } from 'maheshjs';

// Example usage
console.log(getString('example')); // 'example'
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10
console.log(isEven(4)); // true
🔥 Features
1️⃣ getString(criteria)
📌 Description: Returns a string based on specified criteria.
📌 Example:

javascript
Copy
Edit
getString('hello'); // 'hello'
2️⃣ getRandomInt(min, max)
📌 Description: Generates a random integer between two values.
📌 Example:

javascript
Copy
Edit
getRandomInt(1, 10); // Example output: 7
3️⃣ getRandomFloat(min, max)
📌 Description: Generates a random floating-point number.
📌 Example:

javascript
Copy
Edit
getRandomFloat(1.0, 10.0); // Example output: 4.567
4️⃣ isEven(number)
📌 Description: Checks if a number is even.
📌 Example:

javascript
Copy
Edit
isEven(8); // true
5️⃣ isOdd(number)
📌 Description: Checks if a number is odd.
📌 Example:

javascript
Copy
Edit
isOdd(5); // true
6️⃣ getAverageByNumbersArray(numbersArray)
📌 Description: Returns the average of an array of numbers.
📌 Example:

javascript
Copy
Edit
getAverageByNumbersArray([2, 4, 6, 8]); // 5
7️⃣ hasDateTimePassed(dateTime)
📌 Description: Checks if a given date and time has passed.
📌 Example:

javascript
Copy
Edit
hasDateTimePassed(new Date('2024-01-01')); // true (if past date)
🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the repository
Create a new branch (feature-newFunction)
Commit your changes
Push to the branch
Submit a pull request

🚀 Happy Coding with maheshjs! 🚀
