//var img = document.getElementsById('decrator')[0]
//idea1: append decrator when click
//function myFunction() {
//    var blush = document.createElement("IMG");
//    blush.setAttribute("src", "blush.png");
//    blush.setAttribute("width", "315");
//    blush.setAttribute("id", "decrator");
//    document.body.appendChild(blush);
//
//}

//idea2 toggle between hiding and showing 
function myFunction(){
    var x = document.getElementById("decrator");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}