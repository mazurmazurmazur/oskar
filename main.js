

function getAllPaintings(){
    fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/paintings")
    .then(res=>res.json())
    .then(showPaintings)
}

function showPaintings(data){
    console.log(data);

}



function showPaintings(data){
let list = document.querySelector("#list");
let template = document.querySelector("#paintingTemplate").content;
let clone = template.cloneNode(true);
data.forEach(function(thePainting){
    console.log(thePainting);
    let clone = template.cloneNode(true);
    let title = clone.querySelector("#paintingTitle #t1");
    let date = clone.querySelector("#paintingTitle #t2");
    title.textContent= thePainting.title.rendered;
    date.textContent= thePainting.acf.date;

    list.appendChild(clone);
})

list.appendChild(clone);
}

getAllPaintings();


/////////OVERLAY MENU////////////

var x = document.querySelectorAll(".overlay p, .overlay .sm");

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "ghostwhite";
}

}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "rgba(0,0,0, 0.9)";
}
}
////////////////////////////////////
