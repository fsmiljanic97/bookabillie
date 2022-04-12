window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__content");
    header.classList.toggle("sticky", window.scrollY > 0);
})


window.addEventListener("load", function(){
    const preload = document.querySelector(".preload");
    if (document.readyState === 'complete') {
      preload.classList.add("preload-finish");
      const text = document.querySelector("h1");
      const textP = document.querySelector("p");
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
      let charP = 0;
      let timer = setInterval(onTick, 200);
      let timerP = 0;
      

      function onTick() {
        const span = text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if(char === splitText.length) {
          complete();
          if(timer == null) {
            timerP = setInterval(onTickP, 100);
          }
          return;
        }
      }

      function onTickP() {
        if (timerP != null) {
          const spanP = textP.querySelectorAll("span")[charP];
          spanP.classList.add("fade");
          charP++;
          if(charP === splitTextP.length) {
          completeP();
          return;
          }   
        }
      }
        
      function complete() {
        clearInterval(timer);
        timer = null;
      }

      function completeP() {
        clearInterval(timerP);
        timerP = null;
      }
      return;
    }
});
    
//show more/less
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
  };

  function myFunctionTablet() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-tablet");
    var btnText = document.getElementById("aboutBtn-tablet");
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
  };


//fade text banner






//book animation

const prevBtn = document.querySelector ('#prev-btn');
const nextBtn = document.querySelector ('#next-btn');
const book = document.querySelector ('#book');
const flipped = "flipped";

const paper1 = document.querySelector ('#p1');
const paper2 = document.querySelector ('#p2');
const paper3 = document.querySelector ('#p3');

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);



let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-100px)";
    nextBtn.style.transform = "translateX(100px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add(flipped);
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add(flipped);
                paper2.style.zIndex = 2;
                break;  
            case 3:
                paper3.classList.add(flipped);
                paper3.style.zIndex = 3;
                closeBook();
                break;  
            default:
                throw new Error("unknown state"); 
        }
        currentLocation++;
    }
}

function goPrevPage () {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove(flipped);
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove(flipped);
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove(flipped);
                paper3.style.zIndex = 1;
                break;
            default :
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}


const copyright = document.querySelectorAll('.copyright__year');
copyright.forEach((cr)=>{
  cr.appendChild(document.createTextNode(new Date().getFullYear()));
});