//creo funzione per il numero random
function numeroCasuale (min, max){
    return Math.floor(Math.random() * (max - min) + min );
}

//creo funzione per singolo quadrato

function singoloQuadrato(){
    let quadrato = document.createElement("div"); //creo <div></div>
    quadrato.classList.add("quadrato");// inserisco classe dentro il <div></div>
    
    return quadrato;
}

// recupero elemento dell' html
let griglia = document.getElementById("griglia");


//genero casualemente i 16 numeri delle bombe
let arraybomb=[]   
for(let i=0; i<16; i++){
let number = numeroCasuale(1,100)
arraybomb.push(number);
}

// con cliclo for creo singoli quadratini 
for(let i = 0; i<100; i++){
    
    let quadrato =singoloQuadrato();
    
    //creo bottone per iniziare gioco

    document.getElementById("bottone").addEventListener("click", function(){

    //appendo quadrati nel dom 
    griglia.append(quadrato);

    //aggiungo bottone per selezionare i singoli quadrati
    quadrato.addEventListener("click", function(){
        
    quadrato.innerText = i + 1;
        //assegno ad una variabile il numero della cartella 
    let numero = quadrato.innerText

        //controllo se il numero casuale genearato al click della casella è presente nel 16 delle bombe 

    if(arraybomb.includes(parseInt(numero))){
        //se sono presenti stoppo il click e coloro la cartella rossa
        this.classList.toggle("red");
        quadrato.removeEventListener("click")
    
    } 
    else{
        // altrimenti coloro la cartella azzurra e continuo
        this.classList.toggle("azzurro");
    }    
    
    console.log(numero);
    
    console.log(arraybomb);

    })

    })
} 
    
    

