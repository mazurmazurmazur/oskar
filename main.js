

function getAllPaintings(){
    fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/paintings?_embed")
    .then(res=>res.json())
    .then(showPaintings)
}


function showPaintings(data){
let list = document.querySelector("#list");
let template = document.querySelector("#paintingTemplate").content;
let clone = template.cloneNode(true);



   // let popImage = clone.getElementById("#popupImg");
   // popImage.style.backgroundImage = thePainting._embedded["wp:featuredmedia"]["0"].media_details.sizes.large;



data.forEach(function(thePainting){
    console.log(thePainting);
    let clone = template.cloneNode(true);
    let title = clone.querySelector("#paintingTitle #t1");
    let date = clone.querySelector("#paintingTitle #t2");
    let popImage = clone.querySelector("#popupImg");
    title.textContent= thePainting.title.rendered;
    date.textContent= thePainting.acf.date;
    popImage.style.backgroundColor=thePainting.acf.background_colour;
    list.appendChild(clone);
})

list.appendChild(clone);
}

getAllPaintings();


function popImg() {
    document.getElementById("popupImg").style.width = "50%";
}
function hideImg() {
    document.getElementById("popupImg").style.width = "0";
}

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
