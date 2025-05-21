
const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        description: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp",
        faq: "FAQ",
        q1: "Q1 : Je n'ai pas reçu ma synthèse. Que faire ?",
        q2: "Q2 : Combien de temps faut-il pour recevoir une réponse ?",
        q3: "Q3 : Peut-on utiliser e-META gratuitement ?",
        q4: "Q4 : Puis-je utiliser e-META pour mon entreprise ?",
        about: "À propos de e-META",
        aboutText: "e-META est un assistant IA de prise de décision conçu pour guider les utilisateurs vers la meilleure stratégie possible grâce à l’intelligence artificielle. Il est accessible, multilingue et personnalisable selon les besoins de chaque secteur d’activité."
    },
    en: {
        welcome: "Welcome to e-META",
        description: "Your AI assistant for intelligent, multilingual, fluid, and customizable decision-making.",
        contact: "Contact via WhatsApp",
        faq: "FAQ",
        q1: "Q1: I haven't received my synthesis. What to do?",
        q2: "Q2: How long does it take to get a response?",
        q3: "Q3: Can I use e-META for free?",
        q4: "Q4: Can I use e-META for my business?",
        about: "About e-META",
        aboutText: "e-META is an AI decision-support assistant designed to guide users to the best possible strategy through artificial intelligence. It is accessible, multilingual, and customizable for every industry."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById("welcome").textContent = t.welcome;
    document.getElementById("description").textContent = t.description;
    document.querySelector(".cta").textContent = t.contact;
    document.querySelector('[data-key="faq"]').textContent = t.faq;
    document.querySelector('[data-key="q1"]').textContent = t.q1;
    document.querySelector('[data-key="q2"]').textContent = t.q2;
    document.querySelector('[data-key="q3"]').textContent = t.q3;
    document.querySelector('[data-key="q4"]').textContent = t.q4;
    document.querySelector('[data-key="about"]').textContent = t.about;
    document.querySelector('[data-key="about-text"]').textContent = t.aboutText;
}

document.getElementById("btn-fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

setLanguage("fr");
