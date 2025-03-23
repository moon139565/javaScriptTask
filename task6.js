/*
// Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
  let result = (celsius * 9) / 5 + 32;
  console.log("temperature : " + result + "F");
}
celsiusToFahrenheit(9);

// 2. Create a Function to Find the Maximum of Two Numbers

function findMax(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is larger then ${num2}`);
  } else if (num1 === num2) {
    console.log(`${num1} and ${num2} are equal`);
  } else {
    console.log(`${num2} is larger then ${num1}`);
  }
}

findMax(1, -2);


// 3. Function to Check if a String is a Palindrome

function isPalindrome(str) {
  let rev = str.split("").reverse().join("");

  if (str == rev) {
    console.log("is it Palindrome");
  } else {
    console.log("This is not Palindrome");
  }
}

isPalindrome("mom");

// Write a Function to Find Factorial of a Number

function factorial(n) {
  let res = 1;
  let step = `${n}! =  `;
  for (i = n; i >= 1; i--) {
    res *= i;
    step += i;
    if (i > 1) {
      step += "*";
    }
  }
  console.log(res);
  console.log((step += ` = ${res}`));
}

factorial(5);


// 5. Write a function to Count Vowels in a String

function capitalizeWords(sentence) {
  let allVowel = 0;
  let vowel = "aeiouAEIOU";
  for (let i of sentence) {
    if (vowel.includes(i)) {
      allVowel += 1;
    }
  }
  console.log(allVowel);
}

capitalizeWords("hello");
capitalizeWords("javaScript");

*/
