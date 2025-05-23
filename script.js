function toggleAnswer(element) {
  const next = element.nextElementSibling;
  next.style.display = next.style.display === 'block' ? 'none' : 'block';
}

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
    r1: "Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
    q2: "Q2 :",
    a2: "Combien de temps faut-il pour recevoir une réponse ?",
    r2: "Généralement moins de 5 minutes après l'envoi du formulaire.",
    q3: "Q3 :",
    a3: "Peut-on utiliser e-META gratuitement ?",
    r3: "Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
    q4: "Q4 :",
    a4: "Puis-je utiliser e-META pour mon entreprise ?",
    r4: "Oui, e-META est adapté aux particuliers et aux professionnels.",
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
    q1: "Q1 :",
    a1: "I haven't received my synthesis. What to do?",
    r1: "Check your WhatsApp number or email address. Contact our support via WhatsApp.",
    q2: "Q2 :",
    a2: "How long does it take to get a response?",
    r2: "Usually less than 5 minutes after submitting the form.",
    q3: "Q3 :",
    a3: "Can I use e-META for free?",
    r3: "Yes, basic access is free. Premium options will be offered later.",
    q4: "Q4 :",
    a4: "Can I use e-META for my business?",
    r4: "Yes, e-META is suitable for both individuals and professionals.",
    aboutTitle: "About e-META",
    aboutText: "e-META is an AI decision assistant designed to guide users to the best possible strategy through artificial intelligence. It is accessible, multilingual, and customizable according to the needs of each sector."
  }
};

document.getElementById('btn-fr').addEventListener('click', () => switchLang('fr'));
document.getElementById('btn-en').addEventListener('click', () => switchLang('en'));

function switchLang(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
