const translations = { fr: {}, en: {} }; let currentLang = 'fr';
const applyTranslations = () => { document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (translations[currentLang] && translations[currentLang][key]) { el.textContent = translations[currentLang][key]; } }); };
document.getElementById('lang-selector').addEventListener('change', (e) => {
  currentLang = e.target.value;
  fetch(`lang/${currentLang}.json`).then(res => res.json()).then(data => {
    translations[currentLang] = data;
    applyTranslations();
  });
});
window.addEventListener('load', () => {
  fetch(`lang/${currentLang}.json`).then(res => res.json()).then(data => {
    translations[currentLang] = data;
    applyTranslations();
  });
});