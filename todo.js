let input = document.getElementById("input1");
let todo_array = [];
let to_list = document.getElementById("to_list");

function addItems() {
    todo_array.push(input.value);
    show_list();

}
function remove_list() {
    let list_del = to_list.children;
    for (let i = list_del.length - 1; i >= 0; i--) {
        list_del[i].remove();
    }

}
function show_list() {

    remove_list();
    for (let i = 0; i < todo_array.length; i++) {
        let listitem = document.createElement("div");
        let listShown = document.createElement("ol");
        listitem.style.display = "flex";
        listitem.style.color = "black";
        listitem.style.justifyContent = "space-between";
        let makeButton = document.createElement("span");
        makeButton.innerHTML = ['<button type="reset" class="btn1" style="border:0px;" >X</button>'];
        makeButton.setAttribute('indexCount', i);
        listShown.innerText = i + ")" + " " + todo_array[i];
        listitem.appendChild(listShown);
        listitem.appendChild(makeButton);
        to_list.appendChild(listitem);
        makeButton.addEventListener('click', function (e) {
            listitem.parentNode.removeChild(listitem);
            let btnindex = e.target.getAttribute('indexCount');
            todo_array.splice(btnindex, 1);



        })

    }


}
function remove_list_all() {
    todo_array = [];
    remove_list();
}
function selected() {
    // document.getElementById("typeItem").innerHTML = ['<input type="number" id="indexNumber">']
    // document.getElementById("selected_btn").innerHTML = ['<button onclick="deleteItem1()" type="button" class="close" style="background-color:yellowgreen;border:0px;">Delete this Item</button>']




    let indexNumber = document.getElementById("selected_del").value;
    todo_array.splice(indexNumber - 1, 1);
    show_list();



}

