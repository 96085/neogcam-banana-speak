var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server! try again after some time")
}

function clickEventHandler(){
   // outputDiv.dispatchEvent.innerText= "ajsjsjsjsjsjs "+ txtInput.value;
   var inputTExt = txtInput.Value;

   fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler )
};

btnTranslate.addEventListener("click", clickHandeler)

