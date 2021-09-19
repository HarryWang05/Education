/*let input = document.cookie;
const input = input.split(";");
const cookies = input[0].split("=");*/
let cookies = document.cookie.split("=");

function getCookie(name) {
    const input = document.cookie.split(";");
    var names = [];
    var values = [];
    for(let i = 0; i < input.length; i++) {
        names.push(input[i].split("=")[0]);
        values.push(input[i].split("=")[1]);
    }
    for(let i = 0; i < input.length; i++) {
        if(names[i] = "username") {
            return values[i];
        }
    }
}

//Find cookies
let username = getCookie("username");
let loggedin = getCookie("login");



//cookie1=asdf;cookie2=blah

if(cookies[1] != undefined) {
    var realButton = document.getElementById("submitButton");
    realButton.innerHTML = "<button type='submit' name='submit'>Share</button>";
    var fakeButton = document.getElementById("fakeButton");
    fakeButton.innerHTML = "";
}

function checkCookie() {
    let alertName = cookies[1];
    if (alertName != undefined) {
        alert("Welcome again " + alertName);
    } else {
        alert("You aren't logged in");
    }
}

function notsigned() {
    alert("You are not signed in!");
}