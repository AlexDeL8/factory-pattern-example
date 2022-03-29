//import the factory functions
import Xbox from "./consoles/xbox.js";
import PlayStation from "./consoles/playStation.js";

/*
 * Make an object called "consoleObjs" that is contains the factory functions
 * The factory function names become the keys for the object
 */
const consoleObjs = { Xbox, PlayStation };

//Export the createConsole method
export default {
    createConsole(type, attributes) {
        /*
         * ConsoleType is then assigned the appropirate factory function from the "type" argument passed in
         * REMEMBER the type is the key to access from consoleObjs
         */
        console.log("Inside the game console factory...");
        console.log(
            `Factory has been instructed to create a console of type: ${type} - with the passed atttributes`
        );
        const ConsoleType = consoleObjs[type];

        return ConsoleType(attributes);
    },
};
