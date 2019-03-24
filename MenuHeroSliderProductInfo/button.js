window.onscroll = function() {
    goToTop()
};

function goToTop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementsById("ToTopButton").style.display = "block";
  } else {
    document.getElementsById("ToTopButton").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}