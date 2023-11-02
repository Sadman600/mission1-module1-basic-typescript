{
  // Type Alias

  type UserName = string;
  type UserAge = number;
  type UserIsAdult = boolean;
  type UserVehicle = {
    brand: string;
    model: string;
    type: string;
    year: number;
    color: string;
    registration: {
      city: string;
      state: string;
      country: string;
    };
  };

  const userName: UserName = "sakib";
  const userAge: UserAge = 29;
  const userIsAdult: UserIsAdult = true;

  const vehicleOne: UserVehicle = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };
}
