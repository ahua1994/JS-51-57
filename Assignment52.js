// Assignment-JS-52:
// To test a code, an object with students, lessons, and exam results
// of that lesson is needed. Write a JS code to generate the sample
// object below with random numbers between 35 and 100.

function results() {
    let students = {};
    for (let i = 1; i < 6; i++) {
        students[`Student-${i}`] = {};
        for (let j = 1; j < 6; j++) {
            students[`Student-${i}`][`Lesson-${j}`] = Math.ceil(
                Math.random() * (100 - 35) + 35
            );
        }
    }
    return students;
}

console.log(results());
