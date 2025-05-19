function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

function switchLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    document.documentElement.lang = newLang;

    const translations = {
        fr: {
            welcome: "Bienvenue sur e-META",
            desc: "Votre assistant IA pour la prise de décision intelligente, multilingue, fluide et personnalisable."
        },
        en: {
            welcome: "Welcome to e-META",
            desc: "Your AI assistant for smart, multilingual, fluid and customizable decision-making."
        }
    };

    document.querySelectorAll('[data-langkey]').forEach(el => {
        const key = el.getAttribute('data-langkey');
        el.textContent = translations[newLang][key];
    });
}