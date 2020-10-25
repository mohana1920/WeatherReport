// js code to calculate given expression

var expression = '';

function press(num){
  expression += num;
  document.getElementById("entry").value = expression;
}

function equal(){
  document.getElementById("entry").value = eval(expression);
  expression = '';
}

function erase(){
  expression = '';
  document.getElementById("entry").value = expression;
}

// js code for weather report

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
//fetching api from openweathermap.org
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f134f22602331d98954eaf7586ce4265')
//converting data to json
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})
//catch works if given city name is invalid
.catch(err => alert("Wrong city name!"));
})
