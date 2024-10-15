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
        alert("Anna kaksi lukua");
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
        alert("Anna kaksi lukua");
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
        alert("Anna kaksi lukua");
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
function getUsers(){
    let xmlUsers = new XMLHttpRequest();
    xmlUsers.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let users = JSON.parse(this.response);
            let row = "<table border = '1'>";
            row +="<tr><th>nimi</th><th>email</th></tr>";
            users.map(user => {
                row += "<tr key="+user.id+"><td>" + user.name +"</td><td> "+ user.email+"</td></tr>"
            });
            row += "</table>";
            document.getElementById("allUsers").innerHTML = row;
        }
        else {
            console.log("Can not get data");
        }
    }
    let url = "https://jsonplaceholder.typicode.com/users";
    xmlUsers.open("GET", url);

    xmlUsers.send();
    document.getElementById("allUsers").style.visibility = "visible";
    document.getElementById("hideButton").style.visibility = "visible";
    document.getElementById("getUsersButton").style.visibility = "hidden";

}

function showUsers(){
    const users = user.getAllUsers();
    console.log(users);
    let row = "<table border = '1'>";
    row +="<tr><th>nimi</th><th>email</th></tr>";
    users.map(user => {
        row += "<tr key="+user.id+"><td>" + user.name +"</td><td> "+ user.email+"</td></tr>"
    });
    row += "</table>";
    document.getElementById("allUsers").innerHTML = row;
    document.getElementById("allUsers").style.visibility = "visible";
    document.getElementById("hideButton").style.visibility = "visible";
    document.getElementById("showUsersButton").style.visibility = "hidden";
}

function hideElement(){
    document.getElementById("allUsers").style.visibility = "hidden";
    document.getElementById("hideButton").style.visibility = "hidden";
    document.getElementById("showUsersButton").style.visibility = "visible";
    document.getElementById("getUsersButton").style.visibility = "visible";
}

function saveUser(){
    let n = document.getElementById("n").value;
    let e = document.getElementById("e").value;
    let a = document.getElementById("l");
    let l = a.value;
    console.log(l);
    const person = new Person(n,e,l);
    console.log(person);
    alert("Lisättiin olio person, jonka data on \n"+person.getPerson());
}
