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
    img.setAttribute("id", "imgIda"+counter)
    popImage.setAttribute("id", "lola" + counter);
    title.textContent = thePainting.title.rendered;
    titleDiv.setAttribute("class", "a" + counter);
    date.textContent = thePainting.acf.date;
    counter = counter + 1;

    list.appendChild(clone);

  })
}





getAllPaintings();






function showFull(obj){ ////////IT HAPPENS AFTER CLICKING AT ONE OF THE TITLES
    if(mq.matches){ //////indicator that screen is 800px+


                let sf = document.querySelector("#imgId"+obj.className);
                let sf0 = document.querySelector("#lol"+obj.className);
                let sf1 = document.querySelector(".seeMore");
                let sf2 = document.querySelector(".recentProject");
                let sf3 = document.querySelector(".title");
                let sf4 = document.querySelector("#arrow");


                sf0.style.width = "80vw";
                sf.style.width = "80vw";


                sf1.style.transition = "opacity 1s";
                sf1.style.opacity= "0";
                sf2.style.transition = "opacity 1s";
                sf2.style.opacity= "0";
                sf3.style.fontSize = "25px";
                sf4.style.height= "auto";
                sf4.style.opacity= "1";
                sf4.addEventListener("click", collapseImg(obj.className));


                setTimeout(function()
                           {
                                sf1.style.display="none";
                                sf2.style.display="none";
                            }, 1000);

                for(i = 0; i < 11; i++){
                    let temp = document.querySelector(".a"+i);
                    if(temp!= null)
                    {
                        temp.style.transition = "opacity 1s";
                        temp.style.opacity= "0";
                        temp.setAttribute("onmouseover", "");
                        setTimeout(function(){
                            temp.style.display="none";
                        }, 1000)

                    }
        }
    }}





//////////////////////////////////////////////////////////////////////
///////////////COLLAPSE MAXIMIZED(by showFull()) IMAGE////////////////

function collapseImg(obj){

    return function(){
                let sf = document.querySelector("#imgId"+obj);
                let sf0 = document.querySelector("#lol"+obj);
                let sf1 = document.querySelector(".seeMore");
                let sf2 = document.querySelector(".recentProject");
                let sf3 = document.querySelector(".title");
                let sf4 = document.querySelector("#arrow");
                let sf5 = document.querySelector("#arrowDiv");

                sf0.style.width = "60%";
                sf.style.width = "60vw";

                sf1.style.display="";
                sf2.style.display="";
                sf1.style.opacity= "1";
                sf2.style.opacity= "1";
                sf3.style.fontSize = "36px";
                sf4.style.transition= "opacity 0.5s";
                sf4.style.opacity= "0";

                setTimeout(function(){
                    sf4.style.height= "0";
                                    }, 2000);

                    for(i = 0; i < 11; i++){
                        let temp = document.querySelector(".a"+i);
                        if(temp!= null)
                        {
                            temp.style.display="";
                            temp.style.opacity= "1";
                            temp.setAttribute("onmouseover", "popImg(this)");
                            temp.style.transition = "background-size 0.5s ease-in"
                        }
                    }


    };

}





function popAtStart(){
      if (mq.matches) { //////indicator that screen is 800px+
            let eee = document.getElementById("lola0");
            let bg = document.getElementById("background");
            let underline2 = document.querySelector(".a0");
            bg.style.backgroundColor = colours[0]+"33";
            underline2.style.backgroundColor = colours[0]+"19";
            eee.style.width="60%";
      }

}





function popImg(obj) {
  if (mq.matches) { //////indicator that screen is 800px+

    document.getElementById("bd").setAttribute("onmousemove", "");
    let starterUnderline = document.querySelector(".a0");
      if(starterUnderline.style.backgroundColor != ""){
          starterUnderline.style.backgroundColor = "";
      }

        for(i = 0; i < 11; i++){
            let temp = document.getElementById("lola"+i);
            if(temp!= null && temp.style.width=="60%")
            {
                temp.style.width="0";
            }
        }
      console.log(obj.className);
    let element = document.getElementById("lol" + obj.className);
    let bg = document.getElementById("background");
    let underline = document.querySelector("." + obj.className);
    element.style.width = "60%";
    bg.style.backgroundColor = colours[obj.className.substr(1, 1)]+"33";
    underline.style.backgroundImage = "linear-gradient(125deg, " + colours[obj.className.substr(1, 1)] + "19 0%, " + colours[obj.className.substr(1, 1)] + "46 100%)";
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
