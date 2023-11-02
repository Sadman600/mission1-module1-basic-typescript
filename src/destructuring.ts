{
  // Destructuring

  // Object Destructuring

  const vehicleOne: {
    brand: string;
    model: string;
    type: string;
    year: number;
    color: string;
    registration: {
      city: string;
      state: string;
      country: string;
      other: {
        name: string;
      };
    };
  } = {
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

  function vehicleFunction(vehicleOne: {
    brand: string;
    model: string;
    type: string;
    year: number;
    color: string;
    registration: {
      city: string;
      state: string;
      country: string;
      other: {
        name: string;
      };
    };
  }) {
    const {
      brand,
      model,
      registration: {
        city,
        other: { name },
      },
    } = vehicleOne;
  }

  vehicleFunction(vehicleOne);
}

// Array Destructuring
const vehicles: string[] = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;

function calculate(a: number, b: number): number[] {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const myCalculate: number[] = calculate(55, 20);
const [add, subtract, multiply, divide] = myCalculate;
