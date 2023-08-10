let initialValues = [1, 2, "3", true, false, "Ion", null, undefined];

let otherValues = [4, 5, "6", "Vasile"];

let otherLength = otherValues.length;
for (let i=0; i < otherLength; i++) {
    initialValues.push(otherValues[i]);
} 


let numere = initialValues.map((numar) => {
    if (typeof numar === "number") {
        return numar + 2;
    } else {
        return numar;
    }
})



let strings = initialValues.map((valoare) => {
    if (typeof valoare === "string") {
        return "happy codding";
    } else {
        return valoare;
    }
})


console.log(initialValues, numere, strings);





// initialValues.forEach(element => {
//     if (typeof(element) == Number) {
//         element = element + 2;
//     }
// }); console.log (initialValues);