'use strict';

// Seleziono gli elementi dal DOM
const generateBtn = document.querySelector('#generate-btn');
const emailList = document.querySelector('#email-list');

generateBtn.addEventListener('click', generateMail);

// funzione che genererà 10 mail al clicl del btn
function generateMail () {
    // Ciclo per fare 10 richieste di generazione mail
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail') // faccio una richiesta al server
            .then(function (response) {
                
                // Converto la risposta in JSON e la mando al successivo .then
                return response.json();
                
            })

    }
};