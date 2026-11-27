function findLongestWordLength(sentence) {
  let sent = sentence.trim().split(" ");
  let longestLength = sent[0].length;

  for (let i = 1; i < sent.length; i++) {
    if (sent[i].length > longestLength) {
      longestLength = sent[i].length;
    }
  }

  return longestLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
