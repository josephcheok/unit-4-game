# Crystal game

How to play the game:

- There will be four crystals displayed as buttons on the page.

- You will be shown a random number at the start of the game.

- When you click on a crystal, it will add a specific amount of points to your total score.

  - The amount hidden behind the crystal is unknown you click it.
  - When you do click one, it will update your score counter.

- You win if your total score matches the random number from the beginning of the game.

- You loses if your score goes above the random number.

- The game restarts whenever you win or lose.

  - When the game begins again, you should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

- The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

## Game design notes

- The random number shown at the start of the game should be between 19 - 120.

- Each crystal should have a random hidden value between 1 - 12.

## Technologies used

- JavaScript

  - 4 slots are defined in an array. Each slot is taken up by a random crystal with a random number attributed to the image.

  - Crystals and numbers are put into arrays. Math.random is used to randomly pick crystal image and numbers from the array and splice is used to remove the picked image and numbers from the array to allow for a different number and image to be picked on the next math.random function.

  - A counter variable is incremented by the number hidden behind the crystal with every click of the image

  - Once the counter reaches the target number, a win is registered, otherwise if it is over, a loss is registered.

  - Either win or loss triggers the whole game to be reset with all the arrays reset to its original length.
