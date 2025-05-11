
document.getElementById("langSwitch").addEventListener("change", function () {
    const lang = this.value;
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-translate]").forEach(el => {
                const key = el.getAttribute("data-translate");
                el.textContent = data[key] || key;
            });
        });
});
