window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("menu-bar").style.height = "10%"

  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("menu-bar").style.height = "15%"
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}