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



    let tl = gsap.timeline({});

  bouton.addEventListener("click", () => {
    selectChoix.textContent = choix;

    tl.to(main, { y: -750, duration: 3 });
    tl.to(second, { y: -1250, duration: 3 }, 0.5);
    tl.play();
  });

  second.addEventListener("click", () => {
    tl.reverse(0);
    choix = null;
    LI.classList.remove("bg-primary");
          LI.classList.remove("bg-opacity-100");
          LI.classList.remove("text-white");
          LI.classList.add("bg-opacity-20");
  });
  });

  

  function disableScroll() {
    document.body.style.overflow = "hidden";

    document.documentElement.style.overflow = "hidden";
  }
});
