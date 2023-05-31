[PROBLEMA]Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


1 - CREO 100 CASELLE OGNI DELLE QUALI CORRISPONDENTI AD UN NUMERO DA 1-100
2 - CREO L' ARRAY DELLE BOMBE CONTENENTE 16 NUMERI CASUALI DA 1-100 
3 - CREO UNA VARIABILE CHE CONTA  IL NUMERO DI CARTELLE CLICCATE
4 - CREO UNA VARIABILE CHE MI RESTITUISCE IL NUMERO DALLA CARTELLA CLICCATA 
5 - CONTROLLO SE IL NUMERO DELL ACARTELLA CLICCATA è PRESENTE NELL'ARRAY DELLE BOMBE
    5 - 1 SE IL NUMERO NON è CONTENUTO AGGIORNO IL NUMERO DELLE CARTELLE CLICCATE E VADO AVANTI
    5 - 2 SE IL NUMERO è CONTENUTO STOPPO IL CLICK
6 - CREO UN CONSOLE LOG CHE RESTITUISCI IL NUMERO DI  CARTELLE CLICCATE PRIMA DELLA FINE DEL CLICK