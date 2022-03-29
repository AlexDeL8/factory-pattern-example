import gameConsoleFactory from "./gameConsoleFactory.js";

console.log("Sending request to create our 1st console...");

const myXboxSeriesS = gameConsoleFactory.createConsole("Xbox", {
    generationNum: 4,
    name: "Frank",
    slimVersion: false,
    proVersion: true,
    color: "white",
});

console.log(myXboxSeriesS);

console.log("Sending request to create our 2nd console...");

const myPlayStation5 = gameConsoleFactory.createConsole("PlayStation", {
    generationNum: 2,
    name: "Ash",
    slimVersion: false,
    proVersion: false,
    color: "black",
});

console.log(myPlayStation5);

console.log("Sending request to create our 3rd console...");

const myXbox360 = gameConsoleFactory.createConsole("Xbox", {
    generationNum: 2,
    name: "Trisha",
    slimVersion: true,
    proVersion: false,
    color: "red",
});

console.log(myXbox360);
