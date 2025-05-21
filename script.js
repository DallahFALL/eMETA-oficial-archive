const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp",
        faqTitle: "FAQ",
        q1: "Q1 :", a1: "Je n'ai pas reçu ma synthèse. Que faire ? Vérifiez votre numéro WhatsApp ou votre adresse e-mail.",
        q2: "Q2 :", a2: "Combien de temps faut-il pour recevoir une réponse ? Généralement moins de 5 minutes.",
        q3: "Q3 :", a3: "Peut-on utiliser e-META gratuitement ? Oui, l'accès de base est gratuit.",
        q4: "Q4 :", a4: "Puis-je utiliser e-META pour mon entreprise ? Oui, e-META est adapté aux particuliers et aux professionnels.",
        aboutTitle: "À propos de e-META",
        aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle."
    },
    en: {
        welcome: "Welcome to e-META",
        desc: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
        contact: "Contact via WhatsApp",
        faqTitle: "FAQ",
        q1: "Q1 :", a1: "I haven't received my synthesis. What should I do?",
        q2: "Q2 :", a2: "How long does it take to receive a response? Usually less than 5 minutes.",
        q3: "Q3 :", a3: "Can I use e-META for free? Yes, basic access is free.",
        q4: "Q4 :", a4: "Can I use e-META for my business? Yes, it is suitable for individuals and professionals.",
        aboutTitle: "About e-META",
        aboutText: "e-META is an AI decision-support assistant designed to guide users toward the best possible strategy through artificial intelligence."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("welcome").textContent = t.welcome;
    document.getElementById("description").textContent = t.desc;
    document.getElementById("contact").textContent = t.contact;
    document.querySelector("[data-key='faqTitle']").textContent = t.faqTitle;
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

window.onload = () => setLanguage("fr");
