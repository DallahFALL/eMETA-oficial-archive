function switchLanguage(lang) {
  const translations = {
    fr: {
      home: "Accueil",
      faq: "FAQ",
      about: "À propos",
      welcome: "Bienvenue sur e-META",
      description: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
      contact_whatsapp: "Contacter via WhatsApp",
      faq_q1: "Q1 : Je n'ai pas reçu ma synthèse. Que faire ? Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
      faq_q2: "Q2 : Combien de temps faut-il pour recevoir une réponse ? Généralement moins de 5 minutes après l'envoi du formulaire.",
      faq_q3: "Q3 : Peut-on utiliser e-META gratuitement ? Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
      faq_q4: "Q4 : Puis-je utiliser e-META pour mon entreprise ? Oui, e-META est adapté aux particuliers et aux professionnels.",
      about_title: "À propos de e-META",
      about_text: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue, et personnalisable selon les besoins de chaque secteur d’activité."
    },
    en: {
      home: "Home",
      faq: "FAQ",
      about: "About",
      welcome: "Welcome to e-META",
      description: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
      contact_whatsapp: "Contact via WhatsApp",
      faq_q1: "Q1: I haven't received my synthesis. What to do? Check your WhatsApp number or email address. Contact our support via WhatsApp.",
      faq_q2: "Q2: How long does it take to get a response? Usually less than 5 minutes after submitting the form.",
      faq_q3: "Q3: Can I use e-META for free? Yes, basic access is free. Premium options will be offered later.",
      faq_q4: "Q4: Can I use e-META for my business? Yes, e-META is suitable for both individuals and professionals.",
      about_title: "About e-META",
      about_text: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence. It is accessible, multilingual, and customizable to each sector’s needs."
    }
  };

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}