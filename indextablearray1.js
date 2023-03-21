var firstName = document.getElementById("firstName");

var lastName = document.getElementById("lastName");
var userName = document.getElementById("userName");
var eName = document.getElementById("email1");
var phoneNumber = document.getElementById("phoneNumber");
var country = document.getElementById("country");
var state = document.getElementById("state");
var adress = document.getElementById("adress");
// var last = document.getElementById("last1");

// var firstNameErr = document.getElementById("firstNameErr");
let dataCollect = [];
function displayData() {
    let profileData = {};
    profileData.firstName = firstName.value;
    profileData.lastName = document.getElementById("lastName").value;
    profileData.userName = document.getElementById("userName").value;
    profileData.eName = document.getElementById("email1").value;
    profileData.phoneNumber = document.getElementById("phoneNumber").value;
    profileData.country = document.getElementById("country").value;
    profileData.state = document.getElementById("state").value;
    profileData.adress = document.getElementById("adress").value;
    profileData.language = document.getElementById("language").value;
    profileData.currency = document.getElementById("currency").value;
    dataCollect.push(profileData);
    displayData1();

}


function displayData1() {
    document.getElementById("myEmail").innerText = eName.value;
    document.getElementById("myName").innerText = firstName.value;
    document.getElementById("myLastName").innerText = lastName.value;
    document.getElementById("myPhoneNumber").innerText = phoneNumber.value;
    document.getElementById("myAddress").innerText = adress.value;
    document.getElementById("myUserName").innerText = userName.value;
    document.getElementById("myState").innerText = state.value;
    document.getElementById("myCountry").innerHTML = country.value;
    if (firstName.value == "" || firstName.value.length < 1) {
        firstNameErr.style.display = "block";
    } else {
        firstNameErr.innerText = firstName.value;
        firstNameErr.style.color = "green";
    }
    if (lastName.value == "" || lastName.value.length < 1) {
        lastNameErr.style.display = "block";
    } else {
        lastNameErr.innerText = lastName.value;
        lastNameErr.style.color = "green";
    }
    if (userName.value == "" || userName.value.length < 5) {
        userNameErr.style.display = "block";
    } else {
        userNameErr.innerText = userName.value;
        userNameErr.style.color = "green";
    }
    if (eName.value == "" || eName.value.length < 5) {
        emailErr.style.display = "block";
    } else {
        emailErr.innerText = eName.value;
        emailErr.style.color = "green";
    }
    if (phoneNumber.value.length < 10) {
        phoneNumberErr.style.display = "block";
    } else {
        phoneNumberErr.innerText = phoneNumber.value;
        phoneNumberErr.style.color = "green";
    }
    if (state.value == "" || state.value.length < 3) {
        stateErr.style.display = "block";
    } else {
        stateErr.innerText = state.value;
        stateErr.style.color = "green";
    }
    if (adress.value == "" || adress.value.length < 3) {
        addressErr.style.display = "block";
    } else {
        addressErr.innerText = adress.value;
        addressErr.style.color = "green";
    }
    if (country.value == "") {
        countryErr.style.display = "block";
    } else {
        countryErr.innerText = country.value;
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







    for (let i = 0; i < dataCollect.length; i++) {
        var tableRow = document.createElement("tr");
        var tableCell1 = document.createElement("td");
        var tableCell2 = document.createElement("td");
        var tableCell3 = document.createElement("td");
        var tableCell4 = document.createElement("td");
        var tableCell5 = document.createElement("td");
        var tableCell6 = document.createElement("td");
        var tableCell7 = document.createElement("td");
        var tableCell8 = document.createElement("td");
        var tableCell9 = document.createElement("td");
        var tableCell10 = document.createElement("td");
        var tableCell11 = document.createElement("td");
        var tableCell12 = document.createElement("td");
        tableCell1.innerText = dataCollect[i].firstName;
        tableCell2.innerText = dataCollect[i].lastName;
        tableCell3.innerText = dataCollect[i].userName;
        tableCell4.innerText = dataCollect[i].eName;
        tableCell5.innerText = dataCollect[i].phoneNumber;
        tableCell6.innerText = dataCollect[i].country;
        tableCell7.innerText = dataCollect[i].state;
        tableCell8.innerText = dataCollect[i].adress;
        tableCell9.innerText = dataCollect[i].language;
        tableCell10.innerText = dataCollect[i].currency;
        tableCell11.innerHTML = ['<button type="button">Edit</button>'];
        tableCell11.addEventListener('click', function (e) {
            tableCell1.innerHTML = ['<input type="text" id="nfname">'];

            tableCell2.innerHTML = ['<input type="text" id="nlname">'];
            tableCell3.innerHTML = ['<input type="text" id="nuser">'];
            tableCell4.innerHTML = ['<input type="text" id="nemail">'];
            tableCell5.innerHTML = ['<input type="text" id="nphone">'];
            tableCell6.innerHTML = ['<input type="text" id="ncountry">'];
            tableCell7.innerHTML = ['<input type="text" id="nstate">'];
            tableCell8.innerHTML = ['<input type="text" id="nadress">'];
            tableCell9.innerHTML = ['<input type="text" id="nlanguage">'];
            tableCell10.innerHTML = ['<input type="text" id="ncurrency">'];
            tableCell11.innerHTML = ['<button type="button" class="save_btn" onclick="saveData1()">Save</button>'];
            var nfname = document.getElementById("nfname");
            var nlname = document.getElementById("nlname");
            var nuser = document.getElementById("nuser");
            var nemail = document.getElementById("nemail");
            var nphone = document.getElementById("nphone");
            var ncountry = document.getElementById("ncountry");
            var nstate = document.getElementById("nstate");
            var nadress = document.getElementById("nadress");
            var nlanguage = document.getElementById("nlanguage");
            var ncurrency = document.getElementById("ncurrency");




            // var save_btn = document.getElementsByClassName("save_btn");
            // for (i = 0; i < save_btn.length; i++) {
            //     save_btn[i].onclick = function () {
            //         if (nfname.value == "" || nfname.length < 0) {
            //             tableCell1.innerText = dataCollect[0].firstName;
            //         } else {
            //             tableCell1.innerText = nfname.value;
            //         }

            //     }
            // }
            tableCell11.addEventListener('click', function () {
                if (nfname.value == 0 || nfname.value.length < 2) {
                    tableCell1.innerText = dataCollect[i].firstName;

                } else {
                    tableCell1.innerText = nfname.value;
                    dataCollect[i].firstName = nfname.value;
                }
                if (nlname.value == 0 || nlname.value.length < 2) {
                    tableCell2.innerText = dataCollect[i].lastName;
                } else {
                    tableCell2.innerText = nlname.value;
                    dataCollect[i].lastName = nlname.value;
                }
                if (nuser.value == 0 || nuser.value.length < 2) {
                    tableCell3.innerText = dataCollect[i].userName;
                } else {
                    tableCell3.innerText = nuser.value;
                    dataCollect[i].userName = nuser.value;
                } if (nemail.value == 0 || nemail.value.length < 2) {
                    tableCell4.innerText = dataCollect[i].eName;
                } else {
                    tableCell4.innerText = nemail.value;
                    dataCollect[i].eName = nemail.value;
                } if (nphone.value == 0 || nphone.value.length < 2) {
                    tableCell5.innerText = dataCollect[i].phoneNumber;
                } else {
                    tableCell5.innerText = nphone.value;
                    dataCollect[i].phoneNumber = nphone.value;
                } if (ncountry.value == 0 || ncountry.value.length < 2) {
                    tableCell6.innerText = dataCollect[i].country;
                } else {
                    tableCell6.innerText = ncountry.value;
                    dataCollect[i].country = ncountry.value;
                } if (nstate.value == 0 || nstate.value.length < 2) {
                    tableCell7.innerText = dataCollect[i].state;
                } else {
                    tableCell7.innerText = nstate.value;
                    dataCollect[i].state = nstate.value;
                } if (nadress.value == 0 || nadress.value.length < 2) {
                    tableCell8.innerText = dataCollect[i].adress;
                } else {
                    tableCell8.innerText = nadress.value;
                    dataCollect[i].adress = nadress.value;
                } if (nlanguage.value == 0 || nlanguage.value.length < 2) {
                    tableCell9.innerText = dataCollect[i].language;
                } else {
                    tableCell9.innerText = nlanguage.value;
                    dataCollect[i].language = nlanguage.value;
                } if (ncurrency.value == 0 || ncurrency.value.length < 2) {
                    tableCell10.innerText = dataCollect[i].currency;
                } else {
                    tableCell10.innerText = ncurrency.value;
                    dataCollect[i].currency = ncurrency.value;
                }
                tableCell11.innerHTML = ['<button type="button">Edit</button>'];
            })
        })

    }




    tableCell12.innerHTML = ['<button type="button">Delete</button>'];
    tableCell12.addEventListener('click', function (e) {
        tableRow.parentNode.removeChild(tableRow);
    })





    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    tableRow.appendChild(tableCell3);
    tableRow.appendChild(tableCell4);
    tableRow.appendChild(tableCell5);
    tableRow.appendChild(tableCell6);
    tableRow.appendChild(tableCell7);
    tableRow.appendChild(tableCell8);
    tableRow.appendChild(tableCell9);
    tableRow.appendChild(tableCell10);
    tableRow.appendChild(tableCell11);
    tableRow.appendChild(tableCell12);


    document.getElementById("additems").appendChild(tableRow)
}
