function getVowelCount(sentence) {
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (["a", "i", "u", "e", "o"].includes(char)) {
      count++;
    }
  }
  return count;
}

let vowelCount = 0;
vowelCount = getVowelCount("Apples are tasty fruits");

console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  let count = 0;
  let sent = sentence.replaceAll(" ", "");
  sent = sent.replace(/[^a-zA-Z ]/g, "");
  for (const char of sent.toLowerCase()) {
    if (!["a", "i", "u", "e", "o"].includes(char)) {
      count++;
    }
  }
  return count;
}

let consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  let count = 0;
  let sent = sentence.replace(/[^a-zA-Z ]/g, "");

  return sentence.length - sent.length;
}

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  let sent = sentence.replaceAll("  ", " ").trim();
  if (sent == "") {
    return 0;
  }

  let wordCount = sent.split(" ").length;
  return wordCount;
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
