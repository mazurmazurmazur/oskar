function getAllPaintings() {
  fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/paintings?_embed")
    .then(res => res.json())
    .then(showPaintings)
}

var colours = [];
const mq = window.matchMedia("(min-width: 800px)");

let menuIcon = document.getElementById("menuSpan");


function showPaintings(data) {
  let list = document.querySelector("#list");
  let template = document.querySelector("#paintingTemplate").content;
  let clone = template.cloneNode(true);



 ////////////MENU ICONS/////////////
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

/////////////////////////////////////////

  let counter = 0;
  data.forEach(function(thePainting) {
    let clone = template.cloneNode(true);
    let popImage = clone.querySelector(".popupImg");
    let img = clone.querySelector(".popupImg img");
    let titleDiv = clone.querySelector("#paintingTitle");
    let title = clone.querySelector("#paintingTitle #t1");
    let date = clone.querySelector("#paintingTitle #t2");
    let photo = thePainting._embedded["wp:featuredmedia"]["0"].media_details.sizes.large.source_url;
    colours.push(thePainting.acf.background_colour); //adding color to array to fetch it when needed
    img.setAttribute("src", photo);
    popImage.setAttribute("id", "lola" + counter);
    title.textContent = thePainting.title.rendered;
    titleDiv.setAttribute("class", "a" + counter);
    date.textContent = thePainting.acf.date;
    counter = counter + 1;

    list.appendChild(clone);

  })
}

getAllPaintings();


function popAtStart(){
      if (mq.matches) { //////indicator that screen is 800px+
            let eee = document.getElementById("lola0");
            let bg = document.getElementById("background");
            let underline2 = document.querySelector(".a0");
            bg.style.backgroundColor = colours[0];
            underline2.style.backgroundImage = "linear-gradient(125deg, " + colours[0] + "19 0%, " + colours[0] + "46 100%)";
            eee.style.width="60%";
      }

}

function popImg(obj) {
  if (mq.matches) { //////indicator that screen is 800px+



    document.getElementById("bd").setAttribute("onmousemove", ""); ////////
    let starter = document.getElementById("lola0");                ////////GETS RID OF IMAGE
    if(starter.style.width=="60%"){                                 ///////LOADING AT START
        starter.style.width="0";                                   ////////
    }



    let element = document.getElementById("lol" + obj.className);
    let bg = document.getElementById("background");
    let underline = document.querySelector("." + obj.className);
    element.style.width = "60%";
    bg.style.backgroundColor = colours[obj.className.substr(1, 1)];
    underline.style.backgroundImage = "linear-gradient(125deg, " + colours[obj.className.substr(1, 1)] + "19 0%, " + colours[obj.className.substr(1, 1)] + "46 100%)";
  }

}

function hideImg(obj) {
      if (mq.matches) { //////indicator that screen is 800px+

  let element = document.getElementById("lol" + obj.className);
  element.style.width = "0";
      }

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
