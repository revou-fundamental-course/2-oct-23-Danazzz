function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");

    let convertedTemperature;

    if (fromUnit === "celsius") {
        convertedTemperature = temperatureInput;
    } else if (fromUnit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * (5 / 9);
    } else if (fromUnit === "kelvin") {
        convertedTemperature = temperatureInput - 273.15;
    }

    resultElement.textContent = convertedTemperature.toFixed(2) + " " + getUnitSymbol(fromUnit);
}

function getUnitSymbol(unit) {
    switch (unit) {
        case "celsius":
            return "°C";
        case "fahrenheit":
            return "°F";
        case "kelvin":
            return "K";
        default:
            return "";
    }
}