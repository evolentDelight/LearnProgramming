/*
let Obj1;

function useData(data){
    Obj1 = data[0].title;
    document.getElementById("output").innerHTML = data[0].title;
}


fetch('https://www.metaweather.com/api/location/search/?query=san francisco', 
{
    method: 'GET'
})
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        useData(json);
    }
    )
//fetch returns a promise first
*/
/*
//WORKING
var Obj1;

function useData(data){
    document.getElementById("output").innerHTML = data[0].title;
}

async function getData(url = ""){
    const response = await fetch(url);
    return response.json();
}

async function main(){
    const data = await getData('https://www.metaweather.com/api/location/search/?query=san francisco');
    Obj1 = data[0].title;
    Obj1 = data;
    useData(data);
}

main();
*/

async function main(/*Query/Request string can be inserted here*/ string){
    var Obj1;

    await fetch('https://www.metaweather.com/api/location/search/?query=' + String(string))
        .then((response) => response.json())
        .then(function(json){
            Obj1 = json;
        });
    
    var out = "";

    out += Obj1[0].title + "'s ID: " + Obj1[0].woeid;

    document.getElementById("output").innerHTML = out;

}

let string = "san francisco"

main(string);
