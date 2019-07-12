$(document).ready(function() {
  var targetNumber = 0;
  var win = 0;
  var lose = 0;
  var gameTotal = $("#gameTotal");

  function randTargetNumber() {
    var min = 19;
    var max = 120;
    targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
    gameTotal.text(targetNumber);
  }

  randTargetNumber();
  console.log("Target: " + targetNumber);

  var counter = 0;
  var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var crystals = ["Citrine.jpg", "Emerald.jpg", "Ruby.png", "Sapphire.jpg"];
  var crystalbox = ["#citrine", "#emerald", "#ruby", "#sapphire"];

  function game() {
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < 4; i++) {
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
      var rand1 = Math.floor(Math.random() * crystals.length);
      var rand2 = Math.floor(Math.random() * numberOptions.length);

      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

      // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", "assets/images/" + crystals[rand1]);
      crystals.splice(rand1, 1);

      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[rand2]);
      numberOptions.splice(rand2, 1);

      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $(crystalbox[i]).html(imageCrystal);
    }
    $(".crystal-image").on("click", function() {
      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
      $("#message").empty();
      var crystalValue = $(this).attr("data-crystalvalue");
      crystalValue = parseInt(crystalValue);
      // We then add the crystalValue to the user's "counter" which is a global variable.
      // Every click, from every crystal adds to the global counter.
      counter += crystalValue;
      console.log(crystalValue);
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      $("#score").text(counter);

      if (counter === targetNumber) {
        $("#message").html("You won!");
        win++;
        $("#win").text(win);
        again();
      } else if (counter >= targetNumber) {
        $("#message").html("You lost!");
        lose++;
        $("#lose").text(lose);
        again();
      }
    });
  }

  game();
  // This time, our click event applies to every single crystal on the page. Not just one.

  function again() {
    randTargetNumber();
    console.log("Target:" + targetNumber);
    counter = 0;
    $("#score").text("0");
    numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    crystals = ["Citrine.jpg", "Emerald.jpg", "Ruby.png", "Sapphire.jpg"]; //restores spliced arrays
    game();
  }
});
