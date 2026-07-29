let year = 2024;

let result = "";

function isLeapYear(number) {
  if (number % 400 === 0) {
    return `${number} is a leap year.`;
  } else if (number % 100 === 0) {
    return `${number} is not a leap year.`;
  } else if (number % 4 === 0) {
    return `${number} is a leap year.`;
  } else {
    return `${number} is not a leap year.`;
  }
}

result = isLeapYear(year);
console.log(result);

result = isLeapYear(2021);
console.log(result);

result = isLeapYear(2024);
console.log(result);
