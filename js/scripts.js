$(document).ready(function(){
var deckBuild = function() {

var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suits = ['♠', '♡', '♢', '♣'];

  suits.forEach(function(suit) {
   ranks.forEach(function(rank) {
    $("ul#cards").append("<li>"+rank+" of "+suit+"</li>");
   });
  });
};

deckBuild();
});
