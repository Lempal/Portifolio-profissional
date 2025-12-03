
    const aside = document.querySelector("aside");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    menuBtn.addEventListener("click", () => {
        aside.classList.add("open");
        menuBtn.style.display = "none"; // botão some
    });

    closeBtn.addEventListener("click", () => {
        aside.classList.remove("open");
        menuBtn.style.display = "block"; // botão aparece
    });