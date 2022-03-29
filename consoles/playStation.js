//PlayStation constructor function
const PlayStation = ({
    generationNum,
    name,
    slimVersion,
    proVersion,
    color,
}) => {
    return {
        generation: getPlayStationGeneration(generationNum) || 0,
        name: name || 0,
        slimVersion: slimVersion,
        proVersion: proVersion,
        color: color || "",
    };
};

function getPlayStationGeneration(generationNumber) {
    switch (generationNumber) {
        case 1:
            return "PlayStation";
        case 2:
            return "PlayStation 2";
        case 3:
            return "PlayStation 3";
        case 4:
            return "PlayStation 4";
        default:
            return "PlayStation 5";
    }
}

export default PlayStation;
