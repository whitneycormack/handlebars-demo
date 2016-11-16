"use strict";

var inventory = [];
var carLot = {};

carLot.getInventory = function () {
  return inventory;
};

carLot.loadInventory = function () {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: "inventory.json"
    }).done( (data) => {
        resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = carLot;


