// Create Dino Constructor

// import myJson from "./dino.json" assert { type: "json" };
import { myJson } from "./dino.json";

// let dinos = JSON.parse(JSONfile);
console.log(myJson);

// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic

// Change unit between metric and imperial for html display
function unitsChange() {
  if (document.getElementById("metric").checked) {
    document.getElementById("metric-form").style.display = "block";
    document.getElementById("imperial-form").style.display = "none";
  } else {
    document.getElementById("metric-form").style.display = "none";
    document.getElementById("imperial-form").style.display = "block";
  }
}
