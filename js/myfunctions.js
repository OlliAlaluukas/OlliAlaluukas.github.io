function getPage(page){
    console.log("Näytetään sivu "+page);
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("content").innerHTML = this.responseText;
    }
    xhttp.open("GET",page,true);
    xhttp.send(); 
}

window.onload = function(){
    const page = "alku.html";
    console.log("Näytetään sivu "+page);
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("content").innerHTML = this.responseText;
    }
    xhttp.open("GET",page,true);
    xhttp.send(); 
}
function calcSum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if(a && b){
        let sum = parseInt(a) + parseInt(b);
        document.getElementById("labelresult").innerHTML = a + " + " + b + " = " + sum;
    }
    else{
        document.getElementById("labelresult").innerHTML = "Anna kaksi lukua";
    }
}
function calcDiff(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if(a && b){
        let sum = parseInt(a) - parseInt(b);
        document.getElementById("labelresult").innerHTML = a + " - " + b + " = " + sum;
    }
    else{
        document.getElementById("labelresult").innerHTML = "Anna kaksi lukua";
    }
}
function calcProduct(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if(a && b){
        let sum = parseInt(a) * parseInt(b);
        document.getElementById("labelresult").innerHTML = a + " * " + b + " = " + sum;
    }
    else{
        document.getElementById("labelresult").innerHTML = "Anna kaksi lukua";
    }
}
function calcFactorial(){
    let a = parseInt(document.getElementById("num").value);
    let result = 1;
    if(a < 0){
        document.getElementById("labelresult").innerHTML = "Luvun tulee olla positiivinen kokonaisluku";
    }
    else{
        for(let i = 1; i <= a; i++){
            result *= i;
        }
        document.getElementById("labelresult").innerHTML = "Luvun " + a + " kertoma = " + result;
    }
}
