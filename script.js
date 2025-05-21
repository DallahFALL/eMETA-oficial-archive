
const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        description: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp",
        faqTitle: "FAQ",
        q1: "Q1 :", a1: "Je n'ai pas reçu ma synthèse...",
        q2: "Q2 :", a2: "Combien de temps faut-il...",
        q3: "Q3 :", a3: "Peut-on utiliser e-META...",
        q4: "Q4 :", a4: "Puis-je utiliser e-META...",
        aboutTitle: "À propos de e-META",
        aboutText: "e-META est un assistant IA de prise de décision conçu..."
    },
    en: {
        welcome: "Welcome to e-META",
        description: "Your AI assistant for intelligent, multilingual, fluid and customizable decision-making.",
        contact: "Contact via WhatsApp",
        faqTitle: "FAQ",
        q1: "Q1:", a1: "I haven’t received my synthesis...",
        q2: "Q2:", a2: "How long does it take...",
        q3: "Q3:", a3: "Can I use e-META...",
        q4: "Q4:", a4: "Can I use e-META for my company...",
        aboutTitle: "About e-META",
        aboutText: "e-META is an AI decision-support assistant designed..."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("welcome").textContent = t.welcome;
    document.getElementById("description").textContent = t.description;
    document.getElementById("contact").textContent = t.contact;
    document.getElementById("faq-title").textContent = t.faqTitle;
    document.getElementById("q1").textContent = t.q1;
    document.getElementById("a1").textContent = t.a1;
    document.getElementById("q2").textContent = t.q2;
    document.getElementById("a2").textContent = t.a2;
    document.getElementById("q3").textContent = t.q3;
    document.getElementById("a3").textContent = t.a3;
    document.getElementById("q4").textContent = t.q4;
    document.getElementById("a4").textContent = t.a4;
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").textContent = t.aboutText;
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
setLanguage("fr");
// Traductions dynamiques
const translations = {
  fr: {
    home: "Accueil",
    faq: "FAQ",
    about: "À propos",
    contact: "Contacter via WhatsApp"
  },
  en: {
    home: "Home",
    faq: "FAQ",
    about: "About",
    contact: "Contact via WhatsApp"
  }
};

function setLanguage(lang) {
  const keys = document.querySelectorAll("[data-key]");
  keys.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
setLanguage("fr");

// Menu mobile
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
