document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // استعادة الوضع من Local Storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    // التحكم بواسطة أزرار الراديو
    const themeDark = document.getElementById("theme-dark");
    const themeLight = document.getElementById("theme-light");

    if (themeDark && themeLight) {
        // تحديث حالة الأزرار بناءً على الوضع المحفوظ
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

    // التحكم بواسطة الزر القابل للتبديل
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        // تحديث حالة الزر بناءً على الوضع المحفوظ
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
