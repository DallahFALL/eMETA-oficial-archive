const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        intro: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp",
        "faq-title": "FAQ",
        "faq-q1": "Q1 : Je n'ai pas reçu ma synthèse. Que faire ?",
        "faq-a1": "Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
        "faq-q2": "Q2 : Combien de temps faut-il pour recevoir une réponse ?",
        "faq-a2": "Généralement moins de 5 minutes après l'envoi du formulaire.",
        "faq-q3": "Q3 : Peut-on utiliser e-META gratuitement ?",
        "faq-a3": "Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
        "faq-q4": "Q4 : Puis-je utiliser e-META pour mon entreprise ?",
        "faq-a4": "Oui, e-META est adapté aux particuliers et aux professionnels.",
        "about-title": "À propos de e-META",
        "about-text": "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue, et personnalisable selon les besoins de chaque secteur d’activité."
    },
    en: {
        welcome: "Welcome to e-META",
        intro: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
        contact: "Contact via WhatsApp",
        "faq-title": "FAQ",
        "faq-q1": "Q1: I haven't received my synthesis. What to do?",
        "faq-a1": "Check your WhatsApp number or email address. Contact our support via WhatsApp.",
        "faq-q2": "Q2: How long does it take to get a response?",
        "faq-a2": "Usually less than 5 minutes after submitting the form.",
        "faq-q3": "Q3: Can I use e-META for free?",
        "faq-a3": "Yes, basic access is free. Premium options will be offered later.",
        "faq-q4": "Q4: Can I use e-META for my business?",
        "faq-a4": "Yes, e-META is suitable for both individuals and professionals.",
        "about-title": "About e-META",
        "about-text": "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence. It is accessible, multilingual, and customizable to each sector’s needs."
    }
};
function switchLang(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
