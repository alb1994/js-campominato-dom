//creo funzione per il numero random
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//creo funzione per singolo quadrato
  function singoloQuadrato() {
    let quadrato = document.createElement("div");
    quadrato.classList.add("quadrato");
    return quadrato;
  }
//recupero griglia dal dom 
  let griglia = document.getElementById("griglia");
//creo array con 16 bombe da inserire nei quadratini
  let arraybomb = [];
  for (let i = 0; i < 16; i++) {
    let number = numeroCasuale(1, 100);
    arraybomb.push(number);
  }
//creo variabile per contare il numero di cartelle blu cliccate
  let contatoreElse = 0;
//collego elemento del dom con cui iniziare gioco 
  document.getElementById("bottone").addEventListener("click", function() {
    contatoreElse = 0;
    //gnenero e appendo le 100 caselle nella griglia
    for (let i = 0; i < 100; i++) {
      let quadrato = singoloQuadrato();
      griglia.append(quadrato);
    //creo un click per le caselle
      quadrato.addEventListener("click", function() {
        quadrato.innerText = i + 1;
        let numero = quadrato.innerText;
        //controllo se il numero della cartella cliccatta è presente nelle array bombe
        if (arraybomb.includes(parseInt(numero))) {
          this.classList.toggle("red");
          quadrato.removeEventListener("click");
        //se è presente applico la classe red alla cartella  e stoppo il click
        } else {
        //se non è presente vado avanti e aggiorno il contatore delle caselle cliccate
          this.classList.toggle("azzurro");
          contatoreElse++;
        }
  
        console.log(numero);
        console.log(arraybomb);
        //stampo in console il numero di cartelle cliccate
        console.log("numero di caselle blue cliccate ", contatoreElse);
      });
    }
  });