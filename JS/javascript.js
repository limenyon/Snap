document.addEventListener("DOMContentLoaded", function(){

//creating our card class with the variables value and face
class Card{
   constructor(val, fac){
       this.value = val;
       this.face = fac;
   }
}

//creating our arrays that we will use to create the card objects with
var val = ["A of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "J of ", "Q of ", "K of "];
var fac = ["Diamonds", "Hearts", "Clubs", "Spades"]; 


//creating the deck that will have all our deck functions
class Deck{
    constructor(){
        //giving the Deck class a deck array
        this.deck = [];
    }
    //creating a make deck function that loops until all unique combinations from val + fac are gone and adds all the newly created card objects into an array
    MakeDeck(){
    for(var i = 0; i < val.length; i++){
        for(var j = 0; j < fac.length; j++){
            let card = new Card(val[i], fac[j]);
            this.deck.push(card);
            }
        }
    }
    //we are taking the deck array we have created in the constructor and we are reandomising the positions of the cards we have created
    ShuffleDeck(deck){
        for(var i = this.deck.length - 1; i > 0; i--){
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    //We are pushing the last card from the first deck 26 times and adding them to the start of the array of the new deck we created
    DealDecks(){
        for(var i = 0; i < 26; i++){
            deck2.deck.push(deck1.deck[0]);
            deck1.deck.shift();
        }
    }
    Player1(){
        deck1.EndVideoGame();
        //error checking so the cards wouldn't be drawn if there is nothing in the array
        if(deck1.deck[0] === undefined){
            return;
        }
        //if there are cards in the deck we take the first card from it and adding it to a new object that we created using the deck class
        else {
        playingField1.deck.unshift(deck1.deck[0]);
        deck1.deck.shift();
        }
        //we're displaying the cards names by combining the val and fac that it has
        document.getElementById("Hand1").innerHTML = playingField1.deck[0].value + playingField1.deck[0].face;
        //we're showing how many cards are in the player deck
        document.getElementById("HandDeck1").innerHTML = "Your deck has " + deck1.deck.length + " cards";
        //error checking, if there is no card in the playingField for either of the fields an error occurs but only on the first turn, we avoid it by drawing two cards at once whenever either of the buttons are clicked for the first time
        if(playingField2.deck === undefined || playingField2.deck == 0){
           deck1.Player2();
        }
        //display the Snap message  when condition is met
        if(playingField1.deck[0].value === playingField2.deck[0].value){
            document.getElementById("Snap").style.visibility = "visible";
        }
        else{
            return;
        }
    }
    Player2(){
        deck1.EndVideoGame();
        if(deck2.deck[0] === undefined){
            return;
        }
        else {
        playingField2.deck.unshift(deck2.deck[0]);
        deck2.deck.shift();
        }
        document.getElementById("Hand2").innerHTML = playingField2.deck[0].value + playingField2.deck[0].face;
        document.getElementById("HandDeck2").innerHTML = "Your deck has " + deck2.deck.length + " cards";
        if(playingField1.deck === undefined || playingField1.deck == 0){
           deck1.Player1();
        }
        else if(playingField1.deck[0].value === playingField2.deck[0].value){
            document.getElementById("Snap").style.visibility = "visible";
        }
        else{
            return;
        }
    }
    Player1Win(){
        if(playingField1.deck[0] === undefined){
            if(deck1.deck.length != 26 || deck2.deck.length != 26){
            document.getElementById("DrawCardsFirst").style.visibility = "visible";
            setTimeout(deck1.DrawCardsFirst, 3000);
            }
            else{
                document.getElementById("NotYet1").style.visibility = "visible";
                setTimeout(deck1.TimeOut1, 3000);
            }
        }
        else if(playingField1.deck[0].value === playingField2.deck[0].value){
            var list1 = playingField1.deck.length;
             for(var i = 0; i < list1; i++){
                 deck1.deck.push(playingField1.deck[0]);
                 playingField1.deck.shift();
             }
             var list2 = playingField2.deck.length; 
             for(var j = 0; j < list2; j++){
                 deck1.deck.push(playingField2.deck[0]);
                 playingField2.deck.shift();
                 }
            }
        else if(playingField1.deck[0].value != playingField2.deck[0].value){
            var list1 = playingField1.deck.length;
             for(var i = 0; i < list1; i++){
                 deck2.deck.push(playingField1.deck[0]);
                 playingField1.deck.shift();
             }
             var list2 = playingField2.deck.length; 
             for(var j = 0; j < list2; j++){
                 deck2.deck.push(playingField2.deck[0]);
                 playingField2.deck.shift();
             }
             document.getElementById("Player1Wrong").style.visibility = "visible";
             setTimeout(deck1.TimeOutNoMatches1, 5000);
        }
        else{
            return;
    }
}
    Player2Win(){
        if(playingField1.deck[0] === undefined){
            if(deck1.deck.length != 26 || deck2.deck.length != 26){
            document.getElementById("DrawCardsFirst").style.visibility = "visible";
                setTimeout(deck1.DrawCardsFirst, 3000);
            }
            else{
                document.getElementById("NotYet2").style.visibility = "visible";
                setTimeout(deck1.TimeOut1, 3000);
            }
        }
        else if(playingField1.deck[0].value == playingField2.deck[0].value){
            var list1 = playingField1.deck.length;
             for(var i = 0; i < list1; i++){
                 deck2.deck.push(playingField1.deck[0]);
                 playingField1.deck.shift();
             }
             var list2 = playingField2.deck.length; 
             for(var j = 0; j < list2; j++){
                 deck2.deck.push(playingField2.deck[0]);
                 playingField2.deck.shift();
             }
        }
        else if(playingField1.deck[0].value != playingField2.deck[0].value){
            var list1 = playingField1.deck.length;
             for(var i = 0; i < list1; i++){
                 deck1.deck.push(playingField1.deck[0]);
                 playingField1.deck.shift();
             }
             var list2 = playingField2.deck.length; 
             for(var j = 0; j < list2; j++){
                 deck1.deck.push(playingField2.deck[0]);
                 playingField2.deck.shift();
                 }
            document.getElementById("Player2Wrong").style.visibility = "visible";
            setTimeout(deck1.TimeOutNoMatches2, 5000);
            }
        else{
            return;
            }
}
    TimeOut1(){
        document.getElementById("NotYet1").style.visibility = "hidden";
    }
    TimeOut2(){
        document.getElementById("NotYet2").style.visibility = "hidden";
    }
    TimeOutNoMatches1(){
        document.getElementById("Player1Wrong").style.visibility = "hidden";
    }
    TimeOutNoMatches2(){
        document.getElementById("Player2Wrong").style.visibility = "hidden";
    }
    DrawCardsFirst(){
        document.getElementById("DrawCardsFirst").style.visibility = "hidden";
    }
    EndVideoGame(){
        if(deck1.deck.length == 0){
            if(playingField1.deck[0].value != playingField2.deck[0].value || playingField1 == undefined || playingField2 == undefined){
               document.getElementById("Player2Wins").style.visibility = "visible";
               }
           }
        else if(deck2.deck.length == 0){
            if(playingField1.deck[0].value != playingField2.deck[0].value || playingField1 == undefined || playingField2 == undefined){
               document.getElementById("Player1Wins").style.visibility = "visible"; 
            }
        }
    }
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65){
        deck1.Player1Win();
    }
    else if(event.keyCode == 76){
        deck2.Player2Win();
    }
    else{
        return;
    }
});
//create new deck 4 times
let deck1 = new Deck();
let deck2 = new Deck();
let playingField1 = new Deck();
let playingField2 = new Deck();
//call these functions when the page loads
deck1.MakeDeck();
deck1.ShuffleDeck();
deck2.DealDecks();
//select these elements from the html and trigger the player 1 or player 2 function whenever that html element is clicked
document.getElementById("button1").onclick = playingField1.Player1;
document.getElementById("button2").onclick = playingField2.Player2;
//set the snap element to be hidden by default
document.getElementById("Snap").style.visibility = "hidden";
document.getElementById("Loss1").style.visibility = "hidden";
document.getElementById("Loss2").style.visibility = "hidden";
document.getElementById("Player1Wrong").style.visibility = "hidden";
document.getElementById("Player2Wrong").style.visibility = "hidden";
document.getElementById("Player1Wins").style.visibility = "hidden";
document.getElementById("Player2Wins").style.visibility = "hidden";
deck1.TimeOut1();
deck1.TimeOut2();
deck1.DrawCardsFirst();
//log decks for testing purposes
console.log(deck1.deck);
console.log(deck2.deck);
console.log(playingField1.deck);
console.log(playingField2.deck);
});