
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

const translations = {
    fr: {
        home: "Accueil",
        faq: "FAQ",
        about: "À propos",
        contact: "Contact",
        welcome: "Bienvenue sur e-META",
        desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable.",
        contact_whatsapp: "Contacter via WhatsApp",
        faq_title: "Foire aux Questions",
        faq_text: "Des réponses claires à vos questions fréquentes.",
        about_title: "À propos de e-META",
        about_text: "e-META est un assistant intelligent d'aide à la décision.",
        contact_title: "Contact",
        contact_text: "Vous pouvez nous écrire à walocom@orange.sn."
    },
    en: {
        home: "Home",
        faq: "FAQ",
        about: "About",
        contact: "Contact",
        welcome: "Welcome to e-META",
        desc: "Your AI assistant for smart, multilingual, smooth and customizable decision making.",
        contact_whatsapp: "Contact via WhatsApp",
        faq_title: "Frequently Asked Questions",
        faq_text: "Clear answers to your frequent questions.",
        about_title: "About e-META",
        about_text: "e-META is an intelligent decision support assistant.",
        contact_title: "Contact",
        contact_text: "You can email us at walocom@orange.sn."
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
}
