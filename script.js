
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
}

const translations = {
    fr: {
        welcome: "Bienvenue sur e-META",
        desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact: "Contacter via WhatsApp"
    },
    en: {
        welcome: "Welcome to e-META",
        desc: "Your AI assistant for intelligent, multilingual, fluid and customizable decision-making.",
        contact: "Contact via WhatsApp"
    }
};

function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
}
