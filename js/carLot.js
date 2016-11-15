"use strict";

var inventory = [];
var carLot = {};

carLot.getInventory = function () {
  return inventory;
};

carLot.loadInventory = function () {
  return new Promise( function (resolve, reject) {
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();

    inventoryLoader.addEventListener("load", function () {
      var data = JSON.parse(this.responseText);
      resolve(data); // No longer responsible for calling populatePage function
    });
  });
};

module.exports = carLot;


