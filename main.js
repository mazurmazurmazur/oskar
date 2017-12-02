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
