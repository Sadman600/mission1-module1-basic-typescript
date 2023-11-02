"use strict";
{
    // ** Spread and Rest Operator
    // Spread Operator with Array
    const nameList1 = ["Sadman", "Sakib"];
    const nameList2 = [...nameList1, "Sanchita", "kanti"];
    const nameList3 = [...nameList1, ...nameList2];
    const nameList4 = [];
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
    const user = Object.assign(Object.assign({}, car), person);
}
