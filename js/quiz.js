"use strict";

let carInventory = require('./carLot'),
    eventStuff = require('./events'),
    // Require handlebars and our template's markup
    // so we can bind it to our car data to create a view
    Handlebars = require('hbsfy/runtime'),
    carTemplate = require('../templates/car-grid.hbs');

// Register a partial to include as a 'sub-template' inside another template
Handlebars.registerPartial("navbar", require('../templates/partials/nav-bar.hbs'));

// // Create a custome helper that we can call inside an expression in
// // our markup
Handlebars.registerHelper("increment", function(value) {
  return parseInt(value) + 1;
});

function populatePage (inventory) {
  // Make a new div to stick the rendered html into
  let newDiv = document.createElement("div");
  // carTemplate(inventory) binds our JS data and the hbs template into a view 
  // and renders it as HTML for the browser
  newDiv.innerHTML = carTemplate(inventory);
  $("#inventory-cards").append(newDiv);

  // Now that the DOM is loaded, establish all the event listeners needed
  eventStuff();
}

carInventory.loadInventory()
.then(
  function (inventoryFromLoadInventoryResolve) {
    populatePage(inventoryFromLoadInventoryResolve);
    console.log("carPromise", inventoryFromLoadInventoryResolve);
  },
  function (reason) {
    console.error('Something went wrong', reason);
  });
