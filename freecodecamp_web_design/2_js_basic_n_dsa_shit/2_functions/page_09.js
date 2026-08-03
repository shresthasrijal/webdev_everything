function confirmEnding(word, target) {
  //   return word.endsWith(target);
  let wordLength = word.length;
  let targetLength = target.length;

  
  if (word.slice(wordLength - targetLength) === target) {
    return true;
  } else {
    return false;
  }
}
