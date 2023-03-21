let img_url = document.getElementById("url_input");
let title_input = document.getElementById("title_input");
let des_input = document.getElementById("des_input");
let dur_input = document.getElementById("dur_input");
let list_add = document.getElementById("list_add");
let changeMainTitle = document.getElementById("changeMainTitle");
let changeMaintime = document.getElementById("changeMaintime");
let changeimg = document.getElementById("changeImg");
let music_array = [];
let album_obj = {};
function addAlbum() {
    album_obj = {};
    album_obj.img_url = img_url.value;
    album_obj.title_input = title_input.value;
    album_obj.des_input = des_input.value;
    album_obj.dur_input = dur_input.value;
    music_array.push(album_obj);

    addAlbum1();


}
function removealbum() {
    var list_addDel = list_add.children;
    for (let i = list_addDel.length - 1; i >= 0; i--) {
        list_addDel[i].remove();
    }
}



function addAlbum1() {
    removealbum()
    for (let i = 0; i < music_array.length; i++) {
        let div_main = document.createElement("div");
        div_main.setAttribute('class', 'col-6 d-flex justify-content-between');
        div_main.style.borderRadius = "2rem";
        div_main.style.padding = "1rem 2rem 0rem 2rem"
        div_main.onmouseover = function () {
            div_main.style.backgroundColor = "rgb(6, 76, 133)";
        };
        div_main.onmouseout = function () {
            div_main.style.backgroundColor = "rgb(54, 53, 53)";
        }
        list_add.appendChild(div_main);
        let div_img = document.createElement("div");
        div_img.style.height = "3rem";
        div_img.style.width = "3rem";
        let img1 = document.createElement("img");
        img1.setAttribute('src', music_array[i].img_url);
        img1.style.height = "100%";
        img1.style.width = "100%";
        img1.style.borderRadius = "1rem";
        div_img.appendChild(img1);
        div_main.appendChild(div_img);
        let des_dur = document.createElement("div");
        let des_out = document.createElement("h6");
        des_out.innerText = music_array[i].title_input;
        des_dur.appendChild(des_out);
        let dur_out = document.createElement("p");
        dur_out.innerText = music_array[i].des_input;
        des_dur.appendChild(dur_out);
        div_main.appendChild(des_dur);
        let div_tim = document.createElement("div");
        div_tim.setAttribute('class', 'gap-5');
        let time_p = document.createElement("p");
        time_p.innerText = music_array[i].dur_input;
        div_tim.appendChild(time_p);
        div_main.appendChild(div_tim);

        div_main.addEventListener('click', Event => {
            changeMainTitle.innerText = music_array[i].title_input;
            changeMaintime.innerText = music_array[i].dur_input;
            changeimg.src = music_array[i].img_url;


        })






    }






}