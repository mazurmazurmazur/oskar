function getAllPaintings() {
  fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/paintings?_embed")
    .then(res => res.json())
    .then(showPaintings)
}

var colours = [];

function showPaintings(data) {
  let list = document.querySelector("#list");
  let template = document.querySelector("#paintingTemplate").content;
  let clone = template.cloneNode(true);


  let counter = 0;
  data.forEach(function(thePainting) {
    let clone = template.cloneNode(true);
    let popImage = clone.querySelector(".popupImg");
    let img = clone.querySelector(".popupImg img");
    let titleDiv = clone.querySelector("#paintingTitle");
    let title = clone.querySelector("#paintingTitle #t1");
    let date = clone.querySelector("#paintingTitle #t2");
    let photo = thePainting._embedded["wp:featuredmedia"]["0"].media_details.sizes.large.source_url;
    colours.push(thePainting.acf.background_colour);
    img.setAttribute("src", photo);
    popImage.setAttribute("id", "lola" + counter);
    title.textContent = thePainting.title.rendered;
    titleDiv.setAttribute("class", "a" + counter);
    date.textContent = thePainting.acf.date;
    counter = counter + 1;
    list.appendChild(clone);

  })

  list.appendChild(clone);
}

getAllPaintings();


function popImg(obj) {
  let element = document.getElementById("lol" + obj.className);
  let bg = document.getElementById("background");
  let underline = document.querySelector("." + obj.className);
  element.style.width = "60%";



  bg.style.backgroundColor = colours[obj.className.substr(1, 1)];
  underline.style.backgroundImage = "linear-gradient(125deg, " + colours[obj.className.substr(1, 1)] + "19 0%, " + colours[obj.className.substr(1, 1)] + "46 100%)";

  ///#4286f4
  ////"linear-gradient(125deg, "+colours[obj.className.substr(1,1)] +"19 0%, "+colours[obj.className.substr(1,1)]+ "46 100%)";
  ////linear-gradient(125deg, #4286f419 0%, #4286f446 100%);
  ///"linear-gradient(125deg, "+"#4286f4" +"19 0%, "+"#4286f4"+ "46 100%)";

}

function hideImg(obj) {
  let element = document.getElementById("lol" + obj.className);
  element.style.width = "0";
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
