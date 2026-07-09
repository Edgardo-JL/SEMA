console.log("JS cargado");
// =======================
// GUARDAR CONFIGURACIÓN
// =======================

const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {

    saveBtn.innerHTML = "Guardando...";

    setTimeout(() => {

        saveBtn.innerHTML = "💾 Guardar Cambios";

        alert("Configuración guardada correctamente 💙");

    }, 1200);

});

// =======================
// CANCELAR
// =======================

const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", () => {

    const confirmar = confirm(
        "¿Deseas descartar los cambios realizados?"
    );

    if(confirmar){

        location.reload();

    }

});

// =======================
// FOTO DE PERFIL DEMO
// =======================

const photoBtn =
document.querySelector(".profile-box button");

const photo =
document.querySelector(".profile-box img");

const fotos = [
"/imagenes/foto de perfil.jpeg",
"https://i.pravatar.cc/150?img=12",
"https://i.pravatar.cc/150?img=15",
"https://i.pravatar.cc/150?img=20",
"https://i.pravatar.cc/150?img=32"

];

let index = 0;

photoBtn.addEventListener("click", () => {

    index++;

    if(index >= fotos.length){

        index = 0;

    }

    photo.src = fotos[index];

});

const motivarBtn =
document.querySelector(".support-card button");

if(motivarBtn){

    motivarBtn.addEventListener("click", () => {

        const random =
        Math.floor(Math.random() * frases.length);

        alert(frases[random]);

    });

}
// =======================
// APARIENCIA
// =======================

const themeSelector =
document.getElementById("themeSelector");

const fontSelector =
document.getElementById("fontSelector");

function actualizarTema(){

    const tema =
    themeSelector.value;

    localStorage.setItem(
        "semaTheme",
        tema
    );

    document.body.classList.remove(
        "dark-mode",
        "sema-mode"
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

}

function actualizarFuente(){

    const fuente =
    fontSelector.value;

    localStorage.setItem(
        "semaFont",
        fuente
    );

    document.body.classList.remove(
        "font-small",
        "font-normal",
        "font-large"
    );

    document.body.classList.add(
        `font-${fuente}`
    );

}

themeSelector.addEventListener(
    "change",
    actualizarTema
);

fontSelector.addEventListener(
    "change",
    actualizarFuente
);

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const temaGuardado =
        localStorage.getItem(
            "semaTheme"
        );

        const fuenteGuardada =
        localStorage.getItem(
            "semaFont"
        );

        if(temaGuardado){

            themeSelector.value =
            temaGuardado;

            actualizarTema();

        }

        if(fuenteGuardada){

            fontSelector.value =
            fuenteGuardada;

            actualizarFuente();

        }

    }
);