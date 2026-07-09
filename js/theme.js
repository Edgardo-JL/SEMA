function aplicarTema(){

    const tema =
    localStorage.getItem("semaTheme") || "light";

    const fuente =
    localStorage.getItem("semaFont") || "normal";

    document.body.classList.remove(
        "dark-mode",
        "sema-mode"
    );

    document.body.classList.remove(
        "font-small",
        "font-normal",
        "font-large"
    );

    if(tema === "dark"){

        document.body.classList.add(
            "dark-mode"
        );

    }

    if(tema === "sema"){

        document.body.classList.add(
            "sema-mode"
        );

    }

    document.body.classList.add(
        `font-${fuente}`
    );

}

document.addEventListener(
    "DOMContentLoaded",
    aplicarTema
);