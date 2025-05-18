document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');
    });
});