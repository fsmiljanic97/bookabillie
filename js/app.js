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




const text = document.querySelector("h1");
const textP = document.querySelector("p")
const strText = text.textContent;
const strTextP = textP.textContent;
const splitText = strText.split("");
const splitTextP = strTextP.split("");
text.textContent = "";
textP.textContent = "";

for(let i=0; i < splitText.length; i++) {
  text.innerHTML += "<span>"+ splitText[i] + "</span>"
}

for(let i=0; i < splitTextP.length; i++) {
  textP.innerHTML += "<span>"+ splitTextP[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 200);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++
  if(char === splitText.length) {
    paragraph();
    return;
  }
}

function paragraph() {
  const text = document.querySelector(".banner__paragraph");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] + "</span>"
  }

  let char = 0;
  let timer = setInterval(onTick, 100);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++
    if(char === splitText.length) {
      complete();
      return;
    }
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}