//check whether a triangle is equilateral, isosceles or scalene

function CheckTriangle(x, y, z) {
    if (x === y && y === z) {
        return "Equilateral Triangle";
    } else if (x === y || x === z || y === z) {
        return "Isosceles Triangle";
    } else {
        return "Scalene Triangle";
    }
}

console.log(CheckTriangle(10,10,10));
console.log(CheckTriangle(10,10,8));
console.log(CheckTriangle(6,8,10));

//check student grade

function CheckStudentGrade(marks) {
    switch (true) {
        case (marks >= 90 && marks <= 100):
            return "S grade"
            break;
        case (marks >= 80 && marks < 90):
            return "A grade";
            break;
        case (marks >= 70 && marks < 80):
            return "B grade";
            break;
        case (marks >= 60 && marks < 70):
            return "C grade";
            break;
        case (marks >= 50 && marks < 60):
            return "D grade";
            break;
        case (marks >= 40 && marks < 50):
            return "E grade";
            break;
        case (marks >= 0 && marks < 40):
            return "Student has failed";
            break;
        default:
            return "Invalid marks";
            break;
    }
}

console.log(CheckStudentGrade(95));
console.log(CheckStudentGrade(85));
console.log(CheckStudentGrade(55));
console.log(CheckStudentGrade(5));
console.log(CheckStudentGrade(""));

//get sum of the multiples of 3 and 5 under 100

function GetSum() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if ((i % 3) === 0 || (i % 5) === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(GetSum());

//get factorial of numbers between a given range

function CheckPrime(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }
}

function GetFactorialPrimeRange(x,y) {
    let result = 1;
    for (i = x; i <= y; i++) {
        if (CheckPrime(i)) {
            result = result * i;
        }
    }
    return result;
}

console.log(GetFactorialPrimeRange(1,20));
