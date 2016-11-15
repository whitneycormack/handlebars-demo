"use strict";

var cardStyle = require('./cards'),
    cardWrapper = document.getElementById("inventory-cards"),
    input = document.getElementById("editInput");

var throwError = function () {
  window.alert("Please click on a card to begin editing");
};

var activateEvents = function() {
  cardWrapper.addEventListener("click", cardStyle.highlightCard);
  input.addEventListener("keyup", function() {
    var highlighted = document.getElementsByClassName('is-clicked');
    if(highlighted.length === 0) {
      throwError();
    } else {
      cardStyle.editCard(event);
    }
  });
};

module.exports = activateEvents;

