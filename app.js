var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickEventHandler(){
    outputDiv.dispatchEvent.innerText= "ajsjsjsjsjsjs "+ txtInput.value
};

btnTranslate.addEventListener("click", clickHandeler)

