const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

function sendMessage() {

    const text = input.value.trim();

    if(text === "") return;

    const msg = document.createElement("div");

    msg.classList.add("message","sent");

    msg.textContent = text;

    messages.appendChild(msg);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {

        const reply = document.createElement("div");

        reply.classList.add("message","received");

        const responses = [
            "Entiendo cómo te sientes 💙",
            "Gracias por compartirlo.",
            "Estoy aquí para escucharte.",
            "¿Quieres contarme un poco más?",
            "Recuerda que no estás solo."
        ];

        reply.textContent =
        responses[Math.floor(Math.random()*responses.length)];

        messages.appendChild(reply);

        messages.scrollTop =
        messages.scrollHeight;

    },1200);

}

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});