function menuopen(){
    document.getElementById("menu").style.left = "0";
    document.getElementById("ce1").setAttribute("onClick", "menuclose()");
}
function menuclose(){
    document.getElementById("menu").style.left = "-100%";
    document.getElementById("ce1").setAttribute("onClick", "menuopen()");
}