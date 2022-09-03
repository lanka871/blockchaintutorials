//check year is leap year or not.

let year = 2016;

if ((year % 4) == 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

//convert temperature in Celsius to Fahrenheit and Fahrenheit to Celsius

let tempCelsius = 60;
let tempFahrenheit = 45;

function ConvertToFahrenheit(temperatureInCelsius) {
    return ((temperatureInCelsius * (9/5)) + 32);
}

function ConvertToCelsius(temperatureInFahrenheit) {
    return ((temperatureInFahrenheit - 32) * (5/9));
}

console.log(ConvertToFahrenheit(tempCelsius) + " \u00B0F");
console.log(ConvertToCelsius(tempFahrenheit) + " \u00B0C");

//factorial of a number

let num = 5;

function GetFactorialRecursive(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * GetFactorialRecursive(num - 1);
    }
}

function GetFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

console.log(GetFactorialRecursive(5));
console.log(GetFactorial(5));