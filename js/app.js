window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__content");
    header.classList.toggle("sticky", window.scrollY > 0);
})


window.addEventListener("load", function(){
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});
    

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("aboutBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
  }

