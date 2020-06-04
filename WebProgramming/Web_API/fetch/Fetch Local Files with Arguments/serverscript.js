
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const value = urlParams.get('value');

function output(value){
    console.log("Content-type: text/txt\n\n");
    console.log("Value: " + value + "<br>")
}

console.log("ServerScript.js Triggered\n")
output(value);