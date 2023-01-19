var a = document.getElementById("firstName");

var b = document.getElementById("lastName");
var c = document.getElementById("userName");
var d = document.getElementById("email1");
var e = document.getElementById("phoneNumber");
var f = document.getElementById("contry");
var g = document.getElementById("state");
var h = document.getElementById("adress");
var newEmail = document.getElementById("myEmail");
var myName = document.getElementById("myName");
var myLastName = document.getElementById("myLastName");
var myPhoneNumber = document.getElementById("myPhoneNumber");
var myAddress = document.getElementById("myAddress");
var myUserName = document.getElementById("myUserName");
var myState = document.getElementById("myState");

function displayDate() {



    myEmail.innerHTML = d.value;
    myName.innerHTML = a.value;
    myLastName.innerHTML = b.value;
    myState.innerHTML = g.value;
    myAddress.innerHTML = h.value;
    myUserName.innerHTML = c.value;
    myPhoneNumber.innerHTML = e.value;


};