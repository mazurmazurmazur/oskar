var paintings = [];
function getAllPaintings() {
  fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/paintings?_embed")
    .then(res => res.json())
    .then(showPaintings)
}

function showPaintings(data) {
    let list = document.querySelector("#wrapper");
    let template = document.querySelector("#paintingTemplate").content;
    let clone = template.cloneNode(true);
    data.forEach(function(thePainting) {
        let clone = template.cloneNode(true);
            let imgR = clone.querySelector("#rightImg");
            let imgL = clone.querySelector("#leftImg")
            let photo = thePainting._embedded["wp:featuredmedia"]["0"].media_details.sizes.large.source_url;
            paintings.push(photo);
            list.appendChild(clone);
    })
        fillColumns();
}


getAllPaintings();



    function fillColumns(){
                    console.log(paintings.length);
        for(i=0; i<paintings.length; i=i+2){
            var img = document.createElement("img");
            img.src = paintings[i];
            document.querySelector("#leftImg").appendChild(img);
        }

               for(i=1; i<paintings.length; i=i+2){
            var img = document.createElement("img");
            img.src = paintings[i];
            document.querySelector("#rightImg").appendChild(img);
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
