function squareNumber() {
    var number = document.getElementById("square-input").value;
    var result = number * number;
    alert("The result of squaring the number "+number+" is "+result);
    console.log("The result of squaring the number",number,"is",result);
}

function halfNumber() {
    var number = document.getElementById("half-input").value;
    var result = number / 2;
    alert("Half of "+number+" is "+result);
    console.log("Half of "+number+' is '+result);
}

function percentOf(){
    var fraction = document.getElementById("percent1-input").value;
    var whole = document.getElementById("percent2-input").value;
    var result = fraction / whole * 100;
    alert(fraction+' is '+result+'% of '+whole);
    console.log(fraction+' is '+result+'% of '+whole);
}

function areaOfCircle(){
    var radius= document.getElementById("area-input").value;
    var result = radius*radius*3.1415926545;
    result = result.toFixed(2);
    alert('The area for a circle with radius '+radius+' is '+result);
    console.log('The area for a circle with radius '+radius+' is '+result);
}