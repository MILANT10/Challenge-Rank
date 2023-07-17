document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", disableScroll);

  const main = document.querySelector(".container");
  const ulListe = document.getElementById("rating");
  const liListe = ulListe.querySelectorAll("li");
  const bouton = document.querySelector("button");
  const second = document.querySelector("#thank");
  const selectChoix = document.getElementById("selectedCount");
  let choix;

  liListe.forEach((LI, index) => {
    LI.addEventListener("click", () => {
      liListe.forEach((li, i) => {
        if (i !== index) {
          li.classList.remove("bg-primary");
          li.classList.remove("bg-opacity-100");
          li.classList.remove("text-white");
          li.classList.add("bg-opacity-20");
        }
      });

      LI.classList.add("bg-primary");
      LI.classList.add("bg-opacity-100");
      LI.classList.add("text-white");
      LI.classList.remove("bg-opacity-20");

      choix = `${index + 1}`;
    });
  });

  bouton.addEventListener("click", () => {
    selectChoix.textContent = choix;
    let isAnimationRunning = false;
    let isAnimationforward = true;
  
    if (isAnimationRunning) {
      return;
    }
  
    isAnimationRunning = true;
  
    let startPoint = isAnimationforward ? "0%" : "100%";
    let endPoint = isAnimationforward ? "-170%" : "0%";
  
    const moveAnimation = new KeyframeEffect(
      main,
      [
        { transform: `translateY(${startPoint})` },
        { transform: `translateY(${endPoint})` },
      ],
      { duration: 2000, fill: "forwards" }
    );
  
    const mainUp = new Animation(moveAnimation, document.timeline);
  
    mainUp.onfinish = () => {
      isAnimationRunning = false;
    };
  
    mainUp.play();
  
    isAnimationforward = !isAnimationforward;
  
    let firstPoint = isAnimationforward ? "0%" : "0%"; 
    let secondPoint = isAnimationforward ? "100%" : "-300%"; 
  
    const thankAnimation = new KeyframeEffect(
      second,
      [
        { transform: `translateY(${firstPoint})` },
        { transform: `translateY(${secondPoint})` },
      ],
      { duration: 2500, fill: "forwards" }
    );
  
    const secondUp = new Animation(thankAnimation, document.timeline);
  
    secondUp.onfinish = () => {
      isAnimationRunning = false;
    };
  
    secondUp.play();
  });
  



  
 

  function disableScroll() {
    document.body.style.overflow = "hidden";
  
    document.documentElement.style.overflow = "hidden";
  }
});
