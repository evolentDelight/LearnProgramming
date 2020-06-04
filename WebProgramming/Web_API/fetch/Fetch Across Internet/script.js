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

//WORKING
var Obj1;
var Obj2;

function useData(data){
    Obj2 = data;
    console.log("useData -> Obj2", Obj2)
    
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

console.log("Without waiting Obj2: ", Obj2);
//Does not work because it is returned immediately with a "callback" flag ON
//Once the callback is called, then the Obj2 is assigned.

setTimeout(() => {console.log("After waiting Obj2: ", Obj2)}, 3000);
//The Obj2 is now populated because the function had the chance to wait for the returned value

/*
var Obj2;//Does not work because definition and initialization are done within async
async function main(/*Query/Request string can be inserted here string){
    var Obj1;

    await fetch('https://www.metaweather.com/api/location/search/?query=' + String(string))
        .then((response) => response.json())
        .then(function(json){
            Obj1 = json;
        });
    
    var out = "";

    out += Obj1[0].title + "'s ID: " + Obj1[0].woeid;

    console.log("Obj1: ", Obj1);
    Obj2 = Obj1;
    console.log("main -> Obj2", Obj2)

    document.getElementById("output").innerHTML = out;

}

console.log("Ojb2", Obj2);

let string = "san francisco"

main(string);
*/