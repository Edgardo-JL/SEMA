// CONTADORES

const counters = [
  {
    id: "users",
    target: 1240
  },

  {
    id: "sessions",
    target: 356
  },

  {
    id: "psychologists",
    target: 24
  }
];

counters.forEach(counter => {

  let count = 0;

  const element = document.getElementById(counter.id);

  const updateCounter = () => {

    if(count < counter.target){

      count += Math.ceil(counter.target / 60);

      element.innerText = count;

      setTimeout(updateCounter, 30);

    }else{

      element.innerText = counter.target;

    }

  };

  updateCounter();

});

// MENSAJES

const quotes = [

  "Hablar sobre tus emociones también es sanar.",

  "Tu bienestar mental es importante.",

  "Cada pequeño avance cuenta.",

  "Expresar lo que sientes puede cambiar tu día.",

  "SEMA está contigo en cada paso."

];

const motivateBtn = document.getElementById("motivateBtn");

const quoteBox = document.getElementById("quoteBox");

motivateBtn.addEventListener("click", () => {

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  quoteBox.innerHTML = `
  
    <h3>Mensaje Motivacional</h3>
    <p>${randomQuote}</p>

  `;

});

// BOTÓN DE PÁNICO

const panicButton = document.getElementById("panicButton");

panicButton.addEventListener("click", () => {

  panicButton.innerText = "🚨 ALERTA ENVIADA";

  panicButton.style.background = "#fecaca";

  panicButton.style.color = "#7f1d1d";

  alert(
    "SEMA: La alerta fue enviada correctamente."
  );

});