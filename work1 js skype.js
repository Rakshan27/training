var a = document.getElementById("firstName");

var b = document.getElementById("lastName");
var c = document.getElementById("userName");
var d = document.getElementById("email1");
var e = document.getElementById("phoneNumber");
var f = document.getElementById("country");
var g = document.getElementById("state");
var h = document.getElementById("adress");
var last = document.getElementById("last1");

// var firstNameErr = document.getElementById("firstNameErr");


function displayData() {
    document.getElementById("myEmail").innerText = d.value;
    document.getElementById("myName").innerText = a.value;
    document.getElementById("myLastName").innerText = b.value;
    document.getElementById("myPhoneNumber").innerText = e.value;
    document.getElementById("myAddress").innerText = h.value;
    document.getElementById("myUserName").innerText = c.value;
    document.getElementById("myState").innerText = g.value;
    document.getElementById("myCountry").innerHTML = f.value;
    if (a.value == "" || a.value.length < 1) {
        firstNameErr.style.display = "block";
    } else {
        firstNameErr.innerText = a.value;
        firstNameErr.style.color = "green";
    }
    if (b.value == "" || b.value.length < 1) {
        lastNameErr.style.display = "block";
    } else {
        lastNameErr.innerText = b.value;
        lastNameErr.style.color = "green";
    }
    if (c.value == "" || c.value.length < 5) {
        userNameErr.style.display = "block";
    } else {
        userNameErr.innerText = c.value;
        userNameErr.style.color = "green";
    }
    if (d.value == "" || d.value.length < 5) {
        emailErr.style.display = "block";
    } else {
        emailErr.innerText = d.value;
        emailErr.style.color = "green";
    }
    if (e.value.length < 10) {
        phoneNumberErr.style.display = "block";
    } else {
        phoneNumberErr.innerText = e.value;
        phoneNumberErr.style.color = "green";
    }
    if (g.value == "" || g.value.length < 3) {
        stateErr.style.display = "block";
    } else {
        stateErr.innerText = g.value;
        stateErr.style.color = "green";
    }
    if (h.value == "" || h.value.length < 3) {
        addressErr.style.display = "block";
    } else {
        addressErr.innerText = h.value;
        addressErr.style.color = "green";
    }
    if (f.value == "") {
        countryErr.style.display = "block";
    } else {
        countryErr.innerText = f.value;
        countryErr.style.color = "green";
    }
    if (currency.value == "") {
        currencyErr.style.display = "block";
    } else {
        currencyErr.innerText = currency.value;
        currencyErr.style.color = "green";
    }
    if (language.value == "") {
        languageErr.style.display = "block";
    } else {
        languageErr.innerText = language.value;
        languageErr.style.color = "green";
    }
}
