function fearNotLetter(word) {
  for (let i = 0; i < word.length - 1; i++) {
    let current = word.charCodeAt(i);
    let next = word.charCodeAt(i + 1);

    if (next - current > 1) {
        return String.fromCharCode(current + 1)
    }
  }
  return undefined;
}
