/*
Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno :treno2:
cartella/repo js-biglietto-treno-form
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2 (BONUS):
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/

const costPerKm = 0.21;

const goBtn = document.getElementById("go");
console.log("Btn", goBtn, typeof(goBtn));

const clearBtn = document.getElementById("clear");
console.log("Btn", clearBtn, typeof(clearBtn));

// Quando viene cliccato il mouse Genera...
goBtn.addEventListener("click", function () {

    let userNameValue;
    let userKmValue;
    let userAgeValue;
    let userPriceValue;

    // Recuperare il nome e cognome dalla cella
    const userName = document.getElementById("name-surname");
    console.log("Name", userName, typeof(userName));
    console.log("Name", userName.value, typeof(userName.value));

    result=userName.value + " ";
    console.log("Name", result, typeof(result));

    userNameValue = userName.value;


    // Recuperare i km percorsi e trasformarli in numero
    const userKm = document.getElementById("kilometers");
    console.log("KM", userKm, typeof(userKm));
    console.log("KM", userKm.value, typeof(userKm.value));

    result += userKm.value + " ";
    console.log("KM", result, typeof(result));

    userKmValue = userKm.value;

    // Recuperare la fascia d'età
    const userAge = document.getElementById("age");
    console.log("Age", userAge, typeof(userAge));
    console.log("Age", userAge.value, typeof(userAge.value));

    result += userAge.value + " ";
    console.log("Age", result, typeof(result));

    userAgeValue = userAge.value;

    // Eseguire il calcolo
    let discount;
    console.log("discount", discount, typeof(discount));

    
    switch (userAge.value) {

        case "minor":
            discount = 0.8;
            console.log("discount", discount, typeof(discount));
            break;
        
        case "over65":
            discount = 0.6;
            console.log("discount", discount, typeof(discount));
            break;
        
        default:
            discount = 1;
            console.log("discount", discount, typeof(discount));
            break;
    }

    

    let price = parseInt(userKm.value) * costPerKm * discount;
    console.log("price", price, typeof(price));
    
    // 2 cifre decimali
    price *= 100;
    price = Math.round(price);
    price /= 100;
    console.log("price", price, typeof(price));

    userPriceValue = price;

    // Scrivere i risultati
    // const ticket=document.getElementById("ticket").innerHTML = result + price;

    const tableName = document.getElementsByClassName("tableName");
    const tableKm = document.getElementsByClassName("tableKm");
    const tableAge = document.getElementsByClassName("tableAge");
    const tablePrice = document.getElementsByClassName("tablePrice");

    tableName[0].innerHTML = userNameValue;
    tableName[1].innerHTML = userNameValue;
    tableName[2].innerHTML = userNameValue;

    tableKm[0].innerHTML = userKmValue;
    tableKm[1].innerHTML = userKmValue;
    tableKm[2].innerHTML = userKmValue;

    tableAge[0].innerHTML = userAgeValue;
    tableAge[1].innerHTML = userAgeValue;
    tableAge[2].innerHTML = userAgeValue;

    tablePrice[0].innerHTML = userPriceValue;
    tablePrice[1].innerHTML = userPriceValue;
    tablePrice[2].innerHTML = userPriceValue;
    
});

// Quando viene cliccato il mouse Annulla...
clearBtn.addEventListener("click", function () {

    // Cancella tutti i dati
    const userName = document.getElementById("name-surname");
    userName.value = "";
    const userKm = document.getElementById("kilometers");
    userKm.value = "";
    const userAge = document.getElementById("age");
    userAge.value = "";

});