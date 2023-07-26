// Problem 1: Create a function that takes a string as input and returns the reversed 
// version of the string without using the built-in reverse() method.
// Solved Example:

function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

const input = "hello world";
const output = reverseString(input);

// console.log(output);  //Output will be: "dlrow olleh" [ UnComment to see the result's ]



// Problem 2 : Create a function that takes an array of numbers as input and returns 
// the sum of all positive numbers in the array.
// Solved Example:

function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const input2 = [2, -5, 10, -3, 7];
const output2 = sumPositiveNumbers(input2);
// console.log(output2);  //Output will be: 19 [ UnComment to see the result's ]



// Problem 3: Write a JavaScript program to find the most frequent element in an array 
// and return it.
// Solved Example:

function findMostFrequentElement(arr) {
  const frequencyMap = new Map();
  let mostFrequentElement;
  let maxFrequency = 0;

  // Build frequency map
  for (const num of arr) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // Find the most frequent element
  for (const [num, frequency] of frequencyMap) {
    if (frequency > maxFrequency) {
      mostFrequentElement = num;
      maxFrequency = frequency;
    }
  }

  return mostFrequentElement;
}

const input3 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output3 = findMostFrequentElement(input3);
// console.log(output3);  //Output will be: 3 [ UnComment to see the result's ]



// Problem 4: Create a function that takes a sorted array of numbers and a target value 
// as input. The function should find two numbers in the array that add up to the 
// target value. Return an array containing the indices of the two numbers.
// Solved Example: 

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // If no such pair is found
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbersWithSum(inputArray, targetValue);
// console.log(result);  //Output will be: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9) 
// [ UnComment to see the result's ]



// Problem 5: Implement a simple JavaScript calculator. 
// The calculator should take two numbers and an operator (+, -, *, /) as 
// input and return the result of the operation.
// Solved Example:

function calculator(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

const number1 = 5;
const operator = '+';
const number2 = 3;

const result5 = calculator(number1, operator, number2);
// console.log(result5);  //Output will be: 8  [ UnComment to see the result's ]



// Problem 6: Create a program that generates a random password of a specified length.
// The password should include a mix of uppercase letters, lowercase letters, numbers,
// and special characters.
// Solved Example:

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);  //Output will be a random password with a length of 
// 12 characters [ UnComment to see the result's ]

 

// Task 7: Implement a function that converts a Roman numeral to an integer.
// The function should take a Roman numeral string (e.g., "IX" or "XXI") as 
// input and return the corresponding integer value.
// Solved Example:

function romanToInt(romanNumeral) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentRoman = romanNumeral[i];
    const currentValue = romanValues[currentRoman];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

const romanNumeral1 = "IX";
const integer1 = romanToInt(romanNumeral1);
// console.log(integer1); // Output will be: 9 [ UnComment to see the result's ]

const romanNumeral2 = "XXI";
const integer2 = romanToInt(romanNumeral2);
// console.log(integer2); // Output will be: 21 [ UnComment to see the result's ]



// Task 8: Implement a JavaScript function to find the second smallest element 
// in an array of numbers. The function should return the second smallest number.
// Solved Example: (voluntary)

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements.");
  }

  let smallest = arr[0];
  let secondSmallest = arr[1];

  if (smallest > secondSmallest) {
    [smallest, secondSmallest] = [secondSmallest, smallest];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const numbersArray = [8, 3, 5, 2, 9, 1, 6, 4, 7];
const secondSmallest = findSecondSmallest(numbersArray);
// console.log(secondSmallest); // Output will be: 2 [ UnComment to see the result's ]
