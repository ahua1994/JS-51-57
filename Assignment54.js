// Assignment-JS-54:
// Write a JavaScript function to check whether an object
// contains given property

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

let hasThis = (obj, prop) => obj.hasOwnProperty(prop);

console.log(hasThis(student, "sclass"));
