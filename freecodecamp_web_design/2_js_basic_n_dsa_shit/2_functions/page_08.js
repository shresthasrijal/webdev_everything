function truncateString(text, number) {
  if (text.length > number) {
    return text.slice(0, number) + "...";
  } else {
    return text;
  }
}
