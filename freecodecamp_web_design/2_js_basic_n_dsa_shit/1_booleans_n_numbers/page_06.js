let truthyOrFalsy=true;

console.log(Boolean(truthyOrFalsy));

truthyOrFalsy = "freeCodeCamp";

console.log(Boolean(truthyOrFalsy));

// Falsy values are values that evaluate to false in a boolean context. 
// Examples of falsy values are:

// "" (empty string)
// 0
// false
// null
// undefined
// NaN

truthyOrFalsy = "";
console.log(Boolean(truthyOrFalsy));

let hasDeveloperJob = true;
if (hasDeveloperJob){
    console.log("Timmy is employed as a developer.");
}

let isTimmyAGamer = false;
if(isTimmyAGamer){
    console.log("Timmy loves to play World of Warcraft.");
}

let timmyAge  = 18;

if(timmyAge >= 16){
    console.log("Timmy is old enough to drive.");
} else {
    console.log("Timmy is not old enough to drive.");
}