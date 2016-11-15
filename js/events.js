"use strict";

let cardStyle = require('./cards'),
    cardWrapper = document.getElementById("inventory-cards");
    

function throwError() {
  window.alert("Please click on a card to begin editing");
}

function activateEvents() {
  let input = document.getElementById("editInput");
  cardWrapper.addEventListener("click", cardStyle.highlightCard);
  input.addEventListener("keyup", function() {
    var highlighted = document.getElementsByClassName('is-clicked');
    if(highlighted.length === 0) {
      throwError();
    } else {
      cardStyle.editCard(event);
    }
  });
}

module.exports = activateEvents;

