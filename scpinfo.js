const alerts = [
    {
        text: "⚠️ ALERTE — La lecture du règlement est obligatoire avant de jouer sur le serveur",
        class: "alert-red"
    },
    {
        text: "📡 INFOS - Vous pouvez consulter les mappings présent en jeu dans Informations",
        class: "alert-blue"
    },
    {
        text: "🔐 RAPPEL — Vous pouvez faire des propositions d'articles dans le wiki sur le Discord",
        class: "alert-yellow"
    },
    {
        text: "📜 ANNONCE — Les recrutements staff sont actuellement ouverts",
        class: "alert-blue"
    },
    {
        text: "🚨 RAPPEL — Pour toute question ou problème, veuillez faire un ticket sur le Discord",
        class: "alert-red"
    }
];

let alertIndex = 0;
const alertBox = document.getElementById("scp-alert");

function showAlert() {
    const alert = alerts[alertIndex];

    alertBox.textContent = alert.text;

    // Reset classes
    alertBox.className = "";
    alertBox.classList.add(alert.class);

    alertBox.style.opacity = "1";
    alertBox.style.transform = "translateX(-50%) translateY(0px)";

    // Hide after 6s
    setTimeout(() => {
        alertBox.style.opacity = "0";
        alertBox.style.transform = "translateX(-50%) translateY(-20px)";
    }, 5500);

    // Next alert
    alertIndex = (alertIndex + 1) % alerts.length;
}

showAlert(); // first one
setInterval(showAlert, 10000);
