// Assignment-JS-56:
// Write a JavaScript program to make all h1 tags’ color blue.

function h1Blue() {
    let header1s = document.getElementsByTagName("h1");
    for (let header of header1s) {
        header.style.color = "blue";
    }
}

h1Blue();
