function switchLang(lang) {
  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
window.onload = () => switchLang("fr");
