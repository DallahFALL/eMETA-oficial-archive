const translations = {};
async function loadLang(lang) {
  if (!translations[lang]) {
    const res = await fetch(`${lang}.json`);
    translations[lang] = await res.json();
  }
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('description').textContent = translations[lang].description;
}
document.getElementById('lang-select').addEventListener('change', (e) => {
  loadLang(e.target.value);
});
loadLang('fr');
