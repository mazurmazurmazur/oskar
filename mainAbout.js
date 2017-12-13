const mq = window.matchMedia("(min-width: 800px)");

let menuIcon = document.getElementById("menuSpan");



function getAbout() {
  fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/about/70?_embed")
    .then(res => res.json())
    .then(showAbout)
}

function showAbout(json){
    console.log(json);
    let img = document.querySelector("#aboutIMG");
    let excerpt = document.querySelector("#description");
    let bga = document.querySelector("#background2");
    img.setAttribute("src", json._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url);
    excerpt.innerHTML = json.content.rendered;
    bga.style.backgroundColor = json.acf.colour;


}


getAbout();


///////////MENU ICONS//////////////

    window.onresize = function(){
  if (mq.matches) {
    menuIcon.innerHTML = "MENU";
  } else {
    menuIcon.innerHTML = "&#9776";
  }}

        if (mq.matches) {
    menuIcon.innerHTML = "MENU";
  } else {
    menuIcon.innerHTML = "&#9776";
  }



///////////////////////////////////


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
