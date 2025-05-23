const translations = {
  fr: {
    home: "Accueil",
    faq: "FAQ",
    about: "À propos",
    welcome: "Bienvenue sur e-META",
    desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
    contact: "Contacter via WhatsApp",
    faqTitle: "FAQ",
    q1: "Q1 :",
    a1: "Je n'ai pas reçu ma synthèse. Que faire ?",
    q2: "Q2 :",
    a2: "Combien de temps faut-il pour recevoir une réponse ?",
    q3: "Q3 :",
    a3: "Peut-on utiliser e-META gratuitement ?",
    q4: "Q4 :",
    a4: "Puis-je utiliser e-META pour mon entreprise ?",
    aboutTitle: "À propos de e-META",
    aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue et personnalisable selon les besoins de chaque secteur d’activité."
  },
  en: {
    home: "Home",
    faq: "FAQ",
    about: "About",
    welcome: "Welcome to e-META",
    desc: "Your AI assistant for intelligent, multilingual, fluid and customizable decision-making.",
    contact: "Contact via WhatsApp",
    faqTitle: "FAQ",
    q1: "Q1:",
    a1: "I haven't received my synthesis. What to do?",
    q2: "Q2:",
    a2: "How long does it take to get a response?",
    q3: "Q3:",
    a3: "Can I use e-META for free?",
    q4: "Q4:",
    a4: "Can I use e-META for my business?",
    aboutTitle: "About e-META",
    aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence. It is accessible, multilingual, and customizable based on the needs of each sector."
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (t[key]) el.textContent = t[key];
  });
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Set default language on load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("fr");
});
