/**
 * Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

 */

// 1.

const giocatore = {
    codice: codiceGiocatore(),
    nome: 'Vittorio',
    cognome: 'Sbardella',
    eta: 22,
    mediaPunti: getRndInteger(1, 51),
    pSuccessoTiri3: getRndInteger(1, 101),
}

// 3.
console.log(`${giocatore.nome} ${giocatore.cognome} di ${giocatore.eta}, il suo codice è: ${giocatore.codice}`);


// 4.

const giocatori = [
    {
        codice: codiceGiocatore(),
        nome: 'Vittorio',
        cognome: 'Sbardella',
        eta: 22,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Paolo',
        cognome: 'Duzioni',
        eta: 24,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Alfredo',
        cognome: 'guida',
        eta: 25,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },{
        codice: codiceGiocatore(),
        nome: 'Fabio',
        cognome: 'Giorgini',
        eta: 23,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Alessandro',
        cognome: 'Biondo',
        eta: 33,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Vittorio',
        cognome: 'Pasqualini',
        eta: 28,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Stefano',
        cognome: 'Guidi',
        eta: 26,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Marco',
        cognome: 'Rossi',
        eta: 22,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 27,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
    {
        codice: codiceGiocatore(),
        nome: 'Alfredo',
        cognome: 'Stella',
        eta: 34,
        mediaPunti: getRndInteger(1, 51),
        pSuccessoTiri3: getRndInteger(1, 101),
    },
]
console.log(giocatori);

// 5.
const topPlayer = giocatori.filter( (element) => {
    return element.mediaPunti > 35 && element.pSuccessoTiri3 > 80;
})
console.log(topPlayer);








// 2.

function codiceGiocatore () {
    const alfabetoM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let code = '';
    for (let i = 0; i < 3; i++) {
        code += alfabetoM[getRndInteger(0, alfabetoM.length)];
    }
    return code;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}