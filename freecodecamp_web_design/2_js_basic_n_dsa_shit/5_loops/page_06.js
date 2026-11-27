// check if second word characters are all present in first
function mutation(twoWordList) {
  let firstWord = twoWordList[0].toLowerCase();
  let secondWord = twoWordList[1].toLowerCase();

  let count = 0;
  let containsAll = false;
  for (const char of secondWord) {
    if (firstWord.includes(char)) {
      count++;
    } else {
      break;
    }
  }
  if (count === secondWord.length) {
    containsAll = true;
  }
  return containsAll;
}

console.log(mutation(["hello", "Hello"]));
