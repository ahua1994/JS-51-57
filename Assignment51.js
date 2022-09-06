// Assignment-JS-51:
// Write a JS code to draw white-ball and Powerball numbers for the
// Powerball lottery game. 5 Whiteball numbers are chosen from 01 to 69
// and 1 Powerball number is chosen from 1 to 26.

function powerballDraw() {
    let whiteballs = [];
    while (whiteballs.length < 5) {
        let ball = Math.ceil(Math.random() * 69);
        if (!whiteballs.includes(ball)) {
            whiteballs.push(ball);
        }
    }
    let powerball = Math.ceil(Math.random() * 26);
    return `The five Whiteballs are ${whiteballs}, and the Powerball is ${powerball}`;
}

console.log(powerballDraw());
