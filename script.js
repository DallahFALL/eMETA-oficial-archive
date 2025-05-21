
const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp",
        faq: "FAQ",
        a1: "Je n'ai pas reçu ma synthèse. Que faire ? Vérifiez votre numéro WhatsApp ou votre adresse e-mail. Contactez notre support via WhatsApp.",
        a2: "Combien de temps faut-il pour recevoir une réponse ? Généralement moins de 5 minutes après l'envoi du formulaire.",
        a3: "Peut-on utiliser e-META gratuitement ? Oui, l'accès de base est gratuit. Des options premium seront proposées ultérieurement.",
        a4: "Puis-je utiliser e-META pour mon entreprise ? Oui, e-META est adapté aux particuliers et aux professionnels.",
        aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle."
    },
    en: {
        welcome: "Welcome to e-META",
        desc: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
        contact: "Contact via WhatsApp",
        faq: "FAQ",
        a1: "I haven't received my synthesis. What should I do? Check your WhatsApp number or email address. Contact our support via WhatsApp.",
        a2: "How long does it take to get a response? Usually less than 5 minutes after submitting the form.",
        a3: "Can I use e-META for free? Yes, basic access is free. Premium options will be offered later.",
        a4: "Can I use e-META for my business? Yes, e-META is suitable for both individuals and professionals.",
        aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("welcome").textContent = t.welcome;
    document.getElementById("description").textContent = t.desc;
    document.getElementById("contact").textContent = t.contact;
    document.querySelector("[data-key='faq']").textContent = t.faq;
    document.getElementById("a1").textContent = t.a1;
    document.getElementById("a2").textContent = t.a2;
    document.getElementById("a3").textContent = t.a3;
    document.getElementById("a4").textContent = t.a4;
    document.getElementById("about-text").textContent = t.aboutText;
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
setLanguage("fr");
