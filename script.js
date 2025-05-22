
const translations = {
  fr: {
    home: "Accueil",
    faq: "FAQ",
    about: "À propos",
    welcome: "Bienvenue sur e-META",
    description: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
    contact: "Contacter via WhatsApp",
    a1: "Je n'ai pas reçu ma synthèse. Que faire ?",
    a2: "Combien de temps faut-il pour recevoir une réponse ?",
    a3: "Peut-on utiliser e-META gratuitement ?",
    a4: "Puis-je utiliser e-META pour mon entreprise ?",
    aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue et personnalisable selon les besoins de chaque secteur d’activité."
  },
  en: {
    home: "Home",
    faq: "FAQ",
    about: "About",
    welcome: "Welcome to e-META",
    description: "Your AI assistant for intelligent, multilingual, smooth and customizable decision-making.",
    contact: "Contact via WhatsApp",
    a1: "I haven't received my synthesis. What to do?",
    a2: "How long does it take to get a response?",
    a3: "Can I use e-META for free?",
    a4: "Can I use e-META for my business?",
    aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence. It is accessible, multilingual, and customizable for each industry sector."
  }
};

function setLanguage(lang) {
  const texts = translations[lang];
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (texts[key]) el.textContent = texts[key];
  });
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

setLanguage("fr");
