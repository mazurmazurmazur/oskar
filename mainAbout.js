function getAbout() {
  fetch("http://mazurmazurmazur.com/wordpress/wp-json/wp/v2/about/70?_embed")
    .then(res => res.json())
    .then(showAbout)
}

function showAbout(json){
    console.log(json);
    let img = document.querySelector("#aboutIMG");
    let excerpt = document.querySelector("#description");
    img.setAttribute("src", json._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url);
    excerpt.innerHTML = json.excerpt.rendered;

}


getAbout();
