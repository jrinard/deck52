$(document).ready(function(){
var deckBuild = function() {

var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suits = ["<img class='suit'src='img/spades.png'>", "<img class='suit'src='img/hearts.png'>", "<img class='suit'src='img/diamonds.png'>", "<img class='suit'src='img/clubs.png'>"];

  suits.forEach(function(suit) {
   ranks.forEach(function(rank) {
    $("#allcards").append("<div class='single-card'>" + rank + "<div class='suit-card'>" + suit + "</div></div>");

   });
  });
};

deckBuild();
});
