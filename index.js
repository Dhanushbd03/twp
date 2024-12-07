const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");
const navbarContainer = document.getElementById("navbar-container");
menuButton.addEventListener("click", () => {
  navbar.classList.toggle("h-full");
});

const aboutCards = document.querySelectorAll(".about-card");

aboutCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const cardDiv = card.querySelector("div");
    cardDiv.classList.remove("h-0");
    cardDiv.classList.add("h-20");
    setTimeout(() => {}, 10);
  });
  card.addEventListener("mouseout", () => {
    const cardDiv = card.querySelector("div");
    cardDiv.classList.add("h-0");
    cardDiv.classList.remove("h-20");
  });
});

const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbarLinks = document.querySelectorAll("#navbar a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
