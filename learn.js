var header = document.getElementsByClassName('header')[0];
header.hide();
window.onload = function() {
  setTimeout(function() {
    header.slideDown(1000);           
  }, 1000);  
} 

alert();