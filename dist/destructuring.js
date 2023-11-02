"use strict";
{
    // Destructuring
    // Object Destructuring
    const vehicleOne = {
        brand: "Ford",
        model: "Mustang",
        type: "car",
        year: 2021,
        color: "red",
        registration: {
            city: "Houston",
            state: "Texas",
            country: "USA",
            other: {
                name: "string",
            },
        },
    };
    function vehicleFunction(vehicleOne) {
        const { brand, model, registration: { city, other: { name }, }, } = vehicleOne;
    }
    vehicleFunction(vehicleOne);
}
// Array Destructuring
const vehicles = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
}
const myCalculate = calculate(55, 20);
const [add, subtract, multiply, divide] = myCalculate;
