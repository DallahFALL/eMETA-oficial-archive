const translations = {
  fr: {
    welcome: "Bienvenue sur e-META",
    desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
    contact: "Contacter via WhatsApp",
    faq: "FAQ",
    q1: "Q1 : Je n'ai pas reçu ma synthèse. Que faire ?",
    a1: "Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
    q2: "Q2 : Combien de temps faut-il pour recevoir une réponse ?",
    a2: "Généralement moins de 5 minutes après l’envoi du formulaire.",
    q3: "Q3 : Peut-on utiliser e-META gratuitement ?",
    a3: "Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
    q4: "Q4 : Puis-je utiliser e-META pour mon entreprise ?",
    a4: "Oui, e-META est adapté aux particuliers et aux professionnels.",
    about: "À propos de e-META",
    aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle."
  },
  en: {
    welcome: "Welcome to e-META",
    desc: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
    contact: "Contact via WhatsApp",
    faq: "FAQ",
    q1: "Q1: I haven't received my synthesis. What to do?",
    a1: "Check your WhatsApp number or email address. Contact our support via WhatsApp.",
    q2: "Q2: How long does it take to get a response?",
    a2: "Usually less than 5 minutes after submitting the form.",
    q3: "Q3: Can I use e-META for free?",
    a3: "Yes, basic access is free. Premium options will be offered later.",
    q4: "Q4: Can I use e-META for my business?",
    a4: "Yes, e-META is suitable for both individuals and professionals.",
    about: "About e-META",
    aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence."
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("welcome").textContent = t.welcome;
  document.getElementById("description").textContent = t.desc;
  document.getElementById("contact").textContent = t.contact;
  document.querySelector("[data-key='faq']").textContent = t.faq;
  document.querySelector("[data-key='about']").textContent = t.about;
  document.getElementById("q1").textContent = t.q1;
  document.getElementById("a1").textContent = t.a1;
  document.getElementById("q2").textContent = t.q2;
  document.getElementById("a2").textContent = t.a2;
  document.getElementById("q3").textContent = t.q3;
  document.getElementById("a3").textContent = t.a3;
  document.getElementById("q4").textContent = t.q4;
  document.getElementById("a4").textContent = t.a4;
  document.getElementById("about-text").textContent = t.aboutText;
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
setLanguage("fr");