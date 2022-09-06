// Assignment-JS-53:
// Write a JavaScript program to get the length (number of items) of
// a JavaScript object.
// Sample object :
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
// Expected output = 3

let objLen = (obj) => Object.keys(obj).length;

console.log(objLen(student));
