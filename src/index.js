document.addEventListener('DOMContentLoaded', function () {
    const ulListe = document.getElementById("rating");
    const liListe = ulListe.querySelectorAll("li");

    liListe.forEach((LI, index) => {
      LI.addEventListener("click", () => {
        liListe.forEach((li, i) => {
          if (i !== index) {
            li.classList.remove("bg-primary");
            li.classList.remove("bg-opacity-100");
            li.classList.remove("text-white");
          }
        });

        LI.classList.toggle("bg-primary");
        LI.classList.toggle("bg-opacity-100");
        LI.classList.toggle("text-white");

        let choix = `${index + 1}`;
        console.log(choix);
      });
    });
  });