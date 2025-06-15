function convert(){
    let celcius = document.getElementById("celcius").value;
    let fahreheit = (celcius * 1.8) + 32 ; 
    document.getElementById("fahreheit").innerHTML = fahreheit + " °F";
}

function fc(){
    let fahrenheit = document.getElementById("fahrenheit").value;
    let centigrade  = (fahrenheit - 32) / 1.8 ; 
    document.getElementById("centigrade").innerHTML = centigrade + " °C";
}

function ck(){
    let celsius1 = document.getElementById("celcius-kelvin").value;
    let kelvin = (celsius1 + 273);
    document.getElementById("kelvin-temperature").innerHTML = kelvin + " kelvin";
}
function fk(){
    let fahrenheit1 = document.getElementById("fahrenhiet-kelvin").value;
    let kelvin1 = (fahrenheit1 - 32) / 1.8 + 273;
    document.getElementById("fahrenheit-kelvin-temperature").innerHTML  = kelvin1 + " kelvin";
}