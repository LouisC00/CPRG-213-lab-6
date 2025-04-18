/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() */
function recalculate() {
  let costLabel = document.getElementById("calculated-cost");

  let cost = 0;
  if (modelName === "XYZ") {
    cost = duration * 100;
  } else if (modelName === "CPRG") {
    cost = duration * 213;
  }

  costLabel.innerHTML = cost.toFixed(2);
}

/****************** model button logic ******************/

let modelButton = document.getElementById("model-button");

function changeModel() {
  let modelText = document.getElementById("model-text");

  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelText.innerHTML = "Model CPRG";
  } else {
    modelName = "XYZ";
    modelText.innerHTML = "Model XYZ";
  }

  recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/

let durationButton = document.getElementById("duration-button");

function changeDuration() {
  let durationText = document.getElementById("duration-text");

  let userInput = prompt("Enter number of days you want to rent the robot:");
  let newDuration = parseInt(userInput);

  // Make sure it's a valid number
  if (!isNaN(newDuration) && newDuration >= 0) {
    duration = newDuration;
    durationText.innerHTML = duration;
    recalculate();
  } else {
    alert("Please enter a valid number.");
  }
}

durationButton.addEventListener("click", changeDuration);
