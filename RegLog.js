

document.getElementById("singIn").onclick= function() {toggleRegAndLog()};
document.getElementById("logIn").onclick=function (){toggleRegAndLog()};


function toggleRegAndLog(){
    document.getElementById("reg").classList.toggle("dis");
    document.getElementById("log").classList.toggle("dis");
}