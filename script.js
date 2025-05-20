
const translations = {
  fr: {
    home: "Accueil",
    faq: "FAQ",
    about: "À propos",
    contact: "Contact",
    welcome: "Bienvenue sur e-META",
    subtitle: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
    contact_whatsapp: "Contacter via WhatsApp",
    faq_title: "FAQ",
    q1: "Q1 : Je n'ai pas reçu ma synthèse. Que faire ?",
    a1: "Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
    q2: "Q2 : Combien de temps faut-il pour recevoir une réponse ?",
    a2: "Généralement moins de 5 minutes après l'envoi du formulaire.",
    q3: "Q3 : Peut-on utiliser e-META gratuitement ?",
    a3: "Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
    q4: "Q4 : Puis-je utiliser e-META pour mon entreprise ?",
    a4: "Oui, e-META est adapté aux particuliers et aux professionnels.",
    about_title: "À propos de e-META",
    about_text: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue, et personnalisable selon les besoins de chaque secteur d’activité."
  },
  en: {
    home: "Home",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
    welcome: "Welcome to e-META",
    subtitle: "Your intelligent, multilingual, and customizable decision assistant.",
    contact_whatsapp: "Contact via WhatsApp",
    faq_title: "FAQ",
    q1: "Q1: I didn’t receive my summary. What should I do?",
    a1: "Check your WhatsApp number or email. Contact our support via WhatsApp.",
    q2: "Q2: How long does it take to get a response?",
    a2: "Usually less than 5 minutes after submitting the form.",
    q3: "Q3: Is e-META free to use?",
    a3: "Yes, the basic access is free. Premium options will be introduced later.",
    q4: "Q4: Can I use e-META for my business?",
    a4: "Yes, e-META is suitable for both individuals and professionals.",
    about_title: "About e-META",
    about_text: "e-META is an AI decision-making assistant designed to guide users toward the best possible strategy using artificial intelligence. It is accessible, multilingual, and customizable for each sector's needs."
  }
};
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });
}
