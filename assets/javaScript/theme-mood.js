document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    const themeDark = document.getElementById("theme-dark");
    const themeLight = document.getElementById("theme-light");

    if (themeDark && themeLight) {
        themeDark.checked = savedTheme === "dark";
        themeLight.checked = savedTheme !== "dark";

        themeDark.addEventListener("change", () => {
            if (themeDark.checked) {
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            }
        });

        themeLight.addEventListener("change", () => {
            if (themeLight.checked) {
                body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
        });
    }

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.checked = savedTheme === "dark";

        themeToggle.addEventListener("change", () => {
            if (themeToggle.checked) {
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
        });
    }
});