// Assignment-JS-57:
// Write a JS code to add or remove a class to/from div

function addOrRemove() {
    let divs = document.getElementsByTagName("div");
    for (let div of divs) {
        if (!div.className) {
            div.className = "added";
        } else {
            div.className = "";
        }
    }
}
//Removes class name if it exists, Adds a class name if there was none.
//This is how I understood the question, let me know if I am wrong.

console.log(addOrRemove());
