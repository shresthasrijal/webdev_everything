// string repeating function
// witout using the .repeat() method

function repeatStringNumTimes(word, num) {
  // return word.repeat(num);
  let value = "";
  if (num <= 0) {
    return value;
  }

  for (let i = 0; i < num; i++) {
    value = value + word;
  }
  return value;
}
