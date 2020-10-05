function menuopen(){
    document.getElementById("menu").style.left = "0";
    document.getElementById("ce1").setAttribute("onClick", "menuclose()");
}
function menuclose(){
    document.getElementById("menu").style.left = "-100%";
    document.getElementById("ce1").setAttribute("onClick", "menuopen()");
}
function loadcomplete(){
    setTimeout(function(){document.getElementById("loading").style.opacity = "0%";}, 60);
    setTimeout(function(){document.getElementById("loading").style.display = "none";}, 600);
}