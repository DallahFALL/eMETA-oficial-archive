const translations = {
  fr: {
    home: "Accueil",
    faq: "FAQ",
    about: "À propos",
    welcome: "Bienvenue sur e-META",
    description: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
    contact: "Contacter via WhatsApp",
    faqTitle: "FAQ",
    q1: "Q1 :",
    a1: "Je n'ai pas reçu ma synthèse. Que faire ? Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
    q2: "Q2 :",
    a2: "Combien de temps faut-il pour recevoir une réponse ? Généralement moins de 5 minutes après l'envoi du formulaire.",
    q3: "Q3 :",
    a3: "Peut-on utiliser e-META gratuitement ? Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
    q4: "Q4 :",
    a4: "Puis-je utiliser e-META pour mon entreprise ? Oui, e-META est adapté aux particuliers et aux professionnels.",
    aboutTitle: "À propos de e-META",
    aboutText: "e-META est un assistant IA conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue et personnalisable."
  },
  en: {
    home: "Home",
    faq: "FAQ",
    about: "About",
    welcome: "Welcome to e-META",
    description: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
    contact: "Contact via WhatsApp",
    faqTitle: "FAQ",
    q1: "Q1:",
    a1: "I haven't received my synthesis. What should I do? Check your WhatsApp number or email address. Contact our support via WhatsApp.",
    q2: "Q2:",
    a2: "How long does it take to receive a response? Usually under 5 minutes after submitting the form.",
    q3: "Q3:",
    a3: "Can I use e-META for free? Yes, basic access is free. Premium options will be proposed later.",
    q4: "Q4:",
    a4: "Can I use e-META for my business? Yes, e-META is suitable for both individuals and professionals.",
    aboutTitle: "About e-META",
    aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy using AI. It is accessible, multilingual and customizable."
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.querySelector('[data-key="home"]').textContent = t.home;
  document.querySelector('[data-key="faq"]').textContent = t.faq;
  document.querySelector('[data-key="about"]').textContent = t.about;
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

// langue par défaut
setLanguage("fr");
