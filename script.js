var agreeEI_number = 0
var disagreeEI_number = 0

function eicounter(){
var selected_buttons_a = document.querySelectorAll('input[type="radio"]:checked[value="agree"]');
agreeEI_number= selected_buttons_a.length 


var selected_buttons_d =document.querySelectorAll('input[type="radio"]:checked[value="disagree"]');
disagreeEI_number= selected_buttons_d.length 

console.log(agreeEI_number)
console.log(disagreeEI_number)

localStorage.setItem("agreeEI",agreeEI_number)
localStorage.setItem("disagreeEI",disagreeEI_number)


}




var agreeSN_number = 0
var disagreeSN_number = 0
function SNcounter(){
var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="agreeSN"]');
agreeSN_number = selected_buttonsSN.length 

var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="disagreeSN"]');
disagreeSN_number = selected_buttonsSN.length 



localStorage.setItem("agreeSN",agreeSN_number)
localStorage.setItem("disagreeSN",disagreeSN_number)



}

var agreeTF_number = 0
var disagreeTF_number = 0
function TFcounter(){
var selected_buttonsTF = document.querySelectorAll('input[type="radio"]:checked[value="agreeTF"]');
agreeTF_number = selected_buttonsTF.length 

var selected_buttonsTF = document.querySelectorAll('input[type="radio"]:checked[value="disagreeTF"]');
disagreeSN_number = selected_buttonsTF.length 

localStorage.setItem("agreeTF",agreeTF_number)
localStorage.setItem("disagreeTF",disagreeTF_number)

}


var agreeJP_number = 0
var disagreeJP_number = 0
function JPcounter(){
var selected_buttonsJP = document.querySelectorAll('input[type="radio"]:checked[value="agreeJP"]');
agreeJP_number = selected_buttonsJP.length 

var selected_buttonsJP = document.querySelectorAll('input[type="radio"]:checked[value="disagreeJP"]');
disagreeSN_number = selected_buttonsJP.length 

localStorage.setItem("agreeJP",agreeJP_number)
localStorage.setItem("disagreeJP",disagreeJP_number)
}


function finalresults(){
var agreeEI = localStorage.getItem("agreeEI")
var disagreeEI = localStorage.getItem("disagreeEI")

var agreeSN = localStorage.getItem("agreeSN")
var disagreeSN = localStorage.getItem("disagreeSN")

var agreeTF = localStorage.getItem("agreeTF")
var disagreeTF = localStorage.getItem("disagreeTF")

var agreeJP = localStorage.getItem("agreeJP")
var disagreeJP = localStorage.getItem("disagreeJP")

console.log(agreeEI)
console.log(disagreeEI)

console.log(agreeSN)
console.log(disagreeSN)

console.log(agreeTF)
console.log(disagreeTF)

console.log(agreeJP)
console.log(disagreeJP)

if(agreeEI > disagreeEI){
    console.log("You are extroverted.")
}

else{
    console.log("You are introverted.")
}

}







var imageId = ""
function selectimage(img){
imageId=img
console.log(imageId)
document.getElementById("outputimg").src= imageId+".png"
localStorage.setItem("output",imageId)
}


function petname(){
    var name = document.getElementById("petname").value;
    document.getElementById("petnameplace").innerHTML=name;
    document.getElementById("petselect").style.display='none'
}


function petexp(){
    var outputpic =   localStorage.getItem("output") 
    document.getElementById("outputimg").src = outputpic+".png"
  
}