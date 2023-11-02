{
  // ** Spread and Rest Operator
  // Spread Operator with Array
  const nameList1: string[] = ["Sadman", "Sakib"];
  const nameList2: string[] = [...nameList1, "Sanchita", "kanti"];
  const nameList3: string[] = [...nameList1, ...nameList2];
  const nameList4: string[] = [];
  nameList4.push(...nameList1, ...nameList2);

  //   Spread operator with Object
  const car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  const user = {
    ...car,
    ...person,
  };
}
