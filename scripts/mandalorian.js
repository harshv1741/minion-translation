const msg = document.querySelector('#msg');
var thisIsTheWay = document.querySelector('#this-is-the-way');
var output = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json";


function getTransUrl(text){
    return serverURL+ "?"+"text="+text;
}

function errorHandler(error){
    console.log("Error Occured" + error)
    alert("Something is wrong with api server! Please come again later....")
}

function clickHandler(){
    var usrMsg = msg.value;
    fetch(getTransUrl(usrMsg))
    .then(getResponse => getResponse.json())
    .then(getJson => {
        var transOP = getJson.contents.translated;
        output.innerText = transOP.value;
    })
}


thisIsTheWay.addEventListener("click",clickHandler);