/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

if (choice === "mountains" && hasTorch) {
  console.log("You see a large castle in the distance");
  const doorOrAround = readline.question("Do you go to the castle 'door' or go 'around'? ");
  if (doorOrAround === 'door') {
    console.log("As you approach the door you find a hammer.");
    const hammerQuestion = readline.question("Do you pick it up? 'yes' or 'no' ");
    if (hammerQuestion === 'yes') {
      console.log("You pick up the hammer and refurbish the castle to make yours!");
    } else {
      console.log("You leave the hammer and take advantage of the temporary shelter.");
    }
  } else if (doorOrAround === 'around') {
    console.log("As you make your way around the castle you get lost and wander for the rest of time.");
  } else {
    console.log("You hesitate and the castle fades into the night with you along side it.");
  }
}

if (choice === "village" && hasTorch) {
  console.log("As you arrive at the village the sun starts to set");
  const restOrFire = readline.question("Do you take 'shelter' or make a 'bonfire'? ");
  if (restOrFire === "shelter") {
    console.log("You rest safely in the village for the night to continue on your journey.");
  } else if (restOrFire === "bonfire") {
    console.log("You gather wood and build a bonfire, warming the desolate village.");
  } else {
    console.log("You stand in the village unsure of what to do.");
  }
}




/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/