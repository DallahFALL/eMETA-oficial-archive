
const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp",
        faqTitle: "FAQ",
        a1: "Je n'ai pas reçu ma synthèse. Que faire ? Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
        a2: "Combien de temps faut-il pour recevoir une réponse ? Généralement moins de 5 minutes après l'envoi du formulaire.",
        a3: "Peut-on utiliser e-META gratuitement ? Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
        a4: "Puis-je utiliser e-META pour mon entreprise ? Oui, e-META est adapté aux particuliers et aux professionnels.",
        aboutTitle: "À propos de e-META",
        aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible."
    },
    en: {
        welcome: "Welcome to e-META",
        desc: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
        contact: "Contact via WhatsApp",
        faqTitle: "FAQ",
        a1: "I haven't received my synthesis. What should I do? Check your WhatsApp number or email address. Contact our support via WhatsApp.",
        a2: "How long does it take to receive a response? Usually less than 5 minutes after submitting the form.",
        a3: "Can I use e-META for free? Yes, basic access is free. Premium options will be offered later.",
        a4: "Can I use e-META for my business? Yes, e-META is suitable for both individuals and professionals.",
        aboutTitle: "About e-META",
        aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = t[key] || el.textContent;
    });
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

window.onload = () => setLanguage("fr");
