// Arrays for each story part

const animals = ["Cat", "Dog", "Cow", "Monkey", "Elephant"];
const actions = ["Jumped", "Ran", "Danced", "Slept", "Flew"];
const places = ["Park", "School", "Beach", "Zoo", "Forest"];
const objects = ["Ball", "Banana", "Bicycle", "Hat", "Book"];
const endings = ["Happily", "Quickly", "Loudly", "Carefully", "Sadly"];

// Current positions

let animalIndex = 0;
let actionIndex = 0;
let placeIndex = 0;
let objectIndex = 0;
let endingIndex = 0;

// Get buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

// Get story display
const storyBtn = document.getElementById("storyBtn");
const storyOutput = document.getElementById("story");

// button 1
btn1.addEventListener("click", () => {
    animalIndex = (animalIndex + 1) % animals.length;
    btn1.textContent = animals[animalIndex];
});

// button 2
btn2.addEventListener("click", () => {
    actionIndex = (actionIndex + 1) % actions.length;
    btn2.textContent = actions[actionIndex];
});

// button 3
btn3.addEventListener("click", () => {
    placeIndex = (placeIndex + 1) % places.length;
    btn3.textContent = places[placeIndex];
});

// button 4
btn4.addEventListener("click", () => {
    objectIndex = (objectIndex + 1) % objects.length;
    btn4.textContent = objects[objectIndex];
});

// button 5
btn5.addEventListener("click", () => {
    endingIndex = (endingIndex + 1) % endings.length;
    btn5.textContent = endings[endingIndex];
});

// story button
storyBtn.addEventListener("click", () => {
    const story = `The ${animals[animalIndex]} ${actions[actionIndex]} in the ${places[placeIndex]} with a ${objects[objectIndex]} ${endings[endingIndex]}.`;
    storyOutput.textContent = story;
});

// reset button
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    animalIndex = 0;
    actionIndex = 0;
    placeIndex = 0;
    objectIndex = 0;
    endingIndex = 0;

    btn1.textContent = animals[animalIndex];
    btn2.textContent = actions[actionIndex];
    btn3.textContent = places[placeIndex];
    btn4.textContent = objects[objectIndex];
    btn5.textContent = endings[endingIndex];
    storyOutput.textContent = "";
});
