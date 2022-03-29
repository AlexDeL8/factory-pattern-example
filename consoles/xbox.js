//Xbox constructor function
const Xbox = ({ generationNum, name, slimVersion, proVersion, color }) => {
    return {
        generation: getXboxGeneration(generationNum) || 0,
        name: name || 0,
        slimVersion: slimVersion,
        proVersion: proVersion,
        color: color || "",
    };
};

function getXboxGeneration(generationNumber) {
    switch (generationNumber) {
        case 1:
            return "Xbox";
        case 2:
            return "Xbox 360";
        case 3:
            return "Xbox One";
        default:
            return "Xbox Series X/S";
    }
}

export default Xbox;
