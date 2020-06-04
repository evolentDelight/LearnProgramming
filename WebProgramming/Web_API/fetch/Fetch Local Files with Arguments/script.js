
async function start(){
    await fetch('serverscript.js' + "?value=5")
    .then((response) => response.text())
    .then((text) =>
    {   console.log(text);
        document.getElementById("output").innerHTML = text;
    });
}

start();