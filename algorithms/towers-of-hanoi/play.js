// Only change code below this line
class Thermostat {
    constructor(_temperature) {
        this.temp =(5/9)*(_temperature-32);
    }

    get temperature() {
        return this.temp;
    }

    set temperature(updatedTemperature) {
        this.temp = updatedTemperature;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp);