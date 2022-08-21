// Dinos data array
const rawDinoData = [
  {
    species: "Triceratops",
    weight: 13000,
    height: 114,
    diet: "herbivore",
    where: "North America",
    when: "Late Cretaceous",
    fact: "First discovered in 1889 by Othniel Charles Marsh",
  },
  {
    species: "Tyrannosaurus Rex",
    weight: 11905,
    height: 144,
    diet: "carnivore",
    where: "North America",
    when: "Late Cretaceous",
    fact: "The largest known skull measures in at 5 feet long.",
  },
  {
    species: "Anklyosaurus",
    weight: 10500,
    height: 55,
    diet: "herbivore",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Anklyosaurus survived for approximately 135 million years.",
  },
  {
    species: "Brachiosaurus",
    weight: 70000,
    height: "372",
    diet: "herbivore",
    where: "North America",
    when: "Late Jurassic",
    fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
  },
  {
    species: "Stegosaurus",
    weight: 11600,
    height: 79,
    diet: "herbivore",
    where: "North America, Europe, Asia",
    when: "Late Jurassic to Early Cretaceous",
    fact: "The Stegosaurus had between 17 and 22 seperate plates and flat spines.",
  },
  {
    species: "Elasmosaurus",
    weight: 16000,
    height: 59,
    diet: "carnivore",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
  },
  {
    species: "Pteranodon",
    weight: 44,
    height: 20,
    diet: "carnivore",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  },
  {
    species: "Pigeon",
    weight: 0.5,
    height: 9,
    diet: "herbivore",
    where: "Worldwide",
    when: "Holocene",
    fact: "All birds are living dinosaurs.",
  },
];

// Create Dino Constructor with data
function DinoConstructor(dinoData, units) {
  this.species = dinoData.species;
  this.diet = dinoData.diet;
  this.where = dinoData.where;
  this.when = dinoData.when;
  this.fact = dinoData.fact;
  if (units === "metric") {
    this.weight = Math.round(dinoData.weight / 2.21);
    this.height = Math.round(dinoData.height * 2.54);
  } else {
    this.weight = dinoData.weight;
    this.height = dinoData.height;
  }
}

// Prototype dinosaur with methods
const protoDino = {
  // Create Dino Compare Method 1 for weight
  compareWeight: function (humanWeight) {
    const weightRatio = (this.weight / humanWeight).toFixed(1);
    if (weightRatio > 1) {
      return `${this.species} weighed ${(this.weight / humanWeight).toFixed(
        1
      )} times more than you!`;
    }
    if (weightRatio < 1) {
      return `You weigh ${(humanWeight / this.weight).toFixed(
        1
      )} times more than ${this.species}!`;
    }
    return `You weigh the same as ${this.species}!`;
  },
  // Create Dino Compare Method 2 for height
  compareHeight: function (humanHeight) {
    const heightRatio = (this.height / humanHeight).toFixed(1);
    if (heightRatio > 1) {
      return `${this.species} was ${(this.height / humanHeight).toFixed(
        1
      )} times taller than you!`;
    }
    if (heightRatio < 1) {
      return `You are ${(humanHeight / this.height).toFixed(
        1
      )} times taller than ${this.species}!`;
    }
    return `You are the same height as ${this.species}!`;
  },
  // Create Dino Compare Method 3 for diet
  compareDiet: function (humanDiet) {
    const article = humanDiet === "omnivore" ? "an" : "a";
    if (humanDiet === this.diet) {
      return `You are ${article} ${humanDiet} and ${this.species} was too!`;
    } else {
      return `You are ${article} ${humanDiet}, but ${this.species} was a ${this.diet}.`;
    }
  },
};

// Assign the prototype to the constructor
DinoConstructor.prototype = protoDino;

// Create Dino Object arrays
function createDinoArray(units) {
  const dinos = rawDinoData;
  const dinoArray = [];
  dinos.forEach(function (dino) {
    dinoArray.push(new DinoConstructor(dino, units));
  });
  // Insert the human placeholder here so that Human should be in the centre in the grid elements
  dinoArray.splice(4, 0, "human placeholder");
  return dinoArray;
}
// Create Human Object using data from form
function getHumanData() {
  let height, weight, units;

  if (document.getElementById("metric").checked) {
    height = document.getElementById("height-metric").value;
    weight = document.getElementById("weight-metric").value;
    units = "metric";
  } else {
    height =
      document.getElementById("feet").value * 12 +
      Number(document.getElementById("inches").value);
    weight = document.getElementById("weight-imperial").value;
    units = "imperial";
  }

  const humanData = {
    name: document.getElementById("name").value,
    height: height,
    weight: weight,
    diet: document.getElementById("diet").value,
    units: units,
  };

  return humanData;
}

// Generate Tiles for each Dino in Array
function createDinoElement(dinoData, humanData) {
  let fact;
  const randomNumber =
    dinoData.species === "Pigeon" ? 2 : Math.round(Math.random() * 5);

  switch (randomNumber) {
    case 0:
      fact = `The ${dinoData.species} lived in ${dinoData.where}.`;
      break;
    case 1:
      fact = `The ${dinoData.species} lived in the ${dinoData.when} period.`;
      break;
    case 2:
      fact = dinoData.fact;
      break;
    case 3:
      fact = dinoData.compareWeight(humanData.weight);
      break;
    case 4:
      fact = dinoData.compareHeight(humanData.height);
      break;
    case 5:
      fact = dinoData.compareDiet(humanData.diet);
      break;
    default:
      fact = "Dinosaurs are cool!";
  }

  // Create the new grid item with title, image, and chosen fact
  const newDiv = document.createElement("div");
  newDiv.className = "grid-item";
  newDiv.innerHTML = `<h3>${
    dinoData.species
  }</h3><img src="images/${dinoData.species.toLowerCase()}.png" alt="image of ${
    dinoData.species
  }"><p>${fact}</p>`;

  return newDiv;
}

function createHumanElement(humanData) {
  // Create the human element for the grid, with user's name and an image
  const newDiv = document.createElement("div");
  newDiv.className = "grid-item";
  newDiv.innerHTML = `<h3>${humanData.name}</h3><img src="images/human.png" alt="image of human">`;

  return newDiv;
}

// Add tiles to DOM and remove form from screen
function updateUI(dinoArray, humanData) {
  document.querySelector("form").style.display = "none";

  // Create fragment to attach div elements to
  const fragment = document.createDocumentFragment();

  // Call to create the dino and human div elements
  for (let i = 0; i < 9; i++) {
    // Center space (5th element, index 4) is always the human
    let gridSquare =
      i === 4
        ? createHumanElement(humanData)
        : createDinoElement(dinoArray[i], humanData);

    fragment.appendChild(gridSquare);
  }
  document.getElementById("grid").appendChild(fragment);
  // Show the 'Go Again' button
  document.getElementById("repeat-btn").style.display = "block";
}

// On button click, prepare and display infographic
function clicked(e) {
  // Prevent default page reloading on submit
  e.preventDefault();

  const humanData = getHumanData();

  const errorMessage = document.getElementById("error");
  if (humanData.name === "") {
    errorMessage.innerHTML = "<p>Please enter a name</p>";
    return;
  } else if (humanData.height < 1) {
    errorMessage.innerHTML = "<p>Please enter a height more than 0</p>";
    return;
  } else if (humanData.weight < 1) {
    errorMessage.innerHTML = "<p>Please enter a weight more than 0</p>";
    return;
  }

  const dinoArray = createDinoArray(humanData.units);
  updateUI(dinoArray, humanData);
}

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

// IIFE to attach the event listeners on the buttons
(function () {
  document.getElementById("btn").addEventListener("click", clicked);
  document.getElementById("repeat-btn").addEventListener("click", repeat);
})();
