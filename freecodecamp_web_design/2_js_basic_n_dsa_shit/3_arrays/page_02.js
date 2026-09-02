let lunches = [];

function addLunchToEnd(array, lunch) {
  array.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, lunch) {
  array.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lastLunch = array.pop();
    console.log(`${lastLunch} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let firstLunch = array.shift();
    console.log(`${firstLunch} removed from the start of the lunch menu.`);
  }
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomLunch = array[randomIndex];
    console.log(`Random lunch: ${randomLunch}`);
  }
  return array;
}
