document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", disableScroll);

  const main = document.querySelector(".container");
  const ulListe = document.getElementById("rating");
  const liListe = ulListe.querySelectorAll("li");
  const bouton = document.querySelector("button");
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
    let isAnimationRunning = false;
    let isAnimationforward = true;

    if (isAnimationRunning) {
      return;
    }

    isAnimationRunning = true;

    const startPoint = isAnimationforward ? "0%" : "100%";
    const endPoint = isAnimationforward ? "-170%" : "0%";

    const moveAnimation = new KeyframeEffect(
      main,
      [
        { transform: `translateY(${startPoint})` },
        { transform: `translateY(${endPoint})` },
      ],
      { duration: 3000, fill: "forwards" }
    );

    const mainUp = new Animation(moveAnimation, document.timeline);

    mainUp.onfinish = () => {
      isAnimationRunning = false;
    };

    mainUp.play();

    isAnimationforward = !isAnimationforward;
  });


  function disableScroll() {
    document.body.style.overflow = "hidden";
  
    document.documentElement.style.overflow = "hidden";
  }
});
