window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("menu-bar").style.height = "10%";
    document.getElementById("menu-bar").style.opacity = "0.7"

  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("menu-bar").style.height = "15%"
    document.getElementById("menu-bar").style.opacity = "1"
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

const grabPTagsMarcin = document.getElementById("pTags-Marcin");
const grabPTagsKarol = document.getElementById("pTags-Karol");
const grabPTagsMikolaj = document.getElementById("pTags-Mikolaj");
const grabPTagsPatryk = document.getElementById("pTags-Patryk");
function showInfo(pTags){
    pTags.style.zIndex = "2";
}
function hideInfo(pTags){
    pTags.style.zIndex = "-5";
}
