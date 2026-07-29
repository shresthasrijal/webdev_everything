let count = 0;

function cardCounter(card) {
  let check = "";

  if (typeof card === "number" && card >= 2 && card <= 10) {
    check = "Number";
  } else {
    check = "String";
  }

  if (check === "Number") {
    if (card >= 2 && card <= 6) {
      count++;
    } else if (card >= 7 && card <= 9) {
      count = count;
    } else if (card === 10) {
      count--;
    }
  } else {
    count--;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}
