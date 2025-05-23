const translations = {
  fr: {},
  en: {}
};

async function fetchTranslations(lang) {
  try {
    const res = await fetch(`lang/${lang}.json`);
    const data = await res.json();
    translations[lang] = data;
    applyTranslations(lang);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

document.getElementById("btn-fr").addEventListener("click", () => fetchTranslations("fr"));
document.getElementById("btn-en").addEventListener("click", () => fetchTranslations("en"));

// Load default language
fetchTranslations("fr");
