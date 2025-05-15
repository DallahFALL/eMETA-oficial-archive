document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('open');
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    let isExpanded = this.getAttribute("aria-expanded") === "true";

    // Inverser l’état
    this.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("hidden");
});
