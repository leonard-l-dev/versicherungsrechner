const berechnenButton = document.getElementById("berechnen-btn");

const nameInput = document.getElementById("name");
const alterInput = document.getElementById("alter");
const versicherungSelect = document.getElementById("versicherung");
const laufzeitInput = document.getElementById("laufzeit");
const zusatzschutzSelect = document.getElementById("zusatzschutz");
const emailInput = document.getElementById("email");
const ergebnisText = document.getElementById("ergebnis-text");

berechnenButton.addEventListener("click", function () {
    const name = nameInput.value;
    const alter = Number(alterInput.value);
    const versicherung = versicherungSelect.value;
    const laufzeit = Number(laufzeitInput.value);
    const zusatzschutz = zusatzschutzSelect.value;
    const email = emailInput.value;

    if (!name || !alter || !versicherung || !laufzeit || !zusatzschutz || !email) {
        ergebnisText.textContent = "Bitte füllen Sie alle Felder aus.";
        return;
    }

    let beitrag = 0;

    if (versicherung === "haftpflicht") {
        beitrag = 10;
    } else if (versicherung === "hausrat") {
        beitrag = 15;
    } else if (versicherung === "rechtsschutz") {
        beitrag = 20;
    }

    if (zusatzschutz === "ja") {
        beitrag += 5;
    }

    if (alter < 25) {
        beitrag += 3;
    }

    if (laufzeit >= 3) {
        beitrag -= 2;
    }

    ergebnisText.textContent = `${name}, Ihr monatlicher Beitrag beträgt ${beitrag} €`;
    console.log(beitrag)

    document.getElementById("ergebnis").style.display = "block";
});