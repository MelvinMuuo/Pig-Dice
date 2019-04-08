# Pig Dice
Pig dice is a dice game whose objective is to be the first player to reach 100 points. Each player's turn consists of repeatedly rolling a die. After each roll, the player is faced with two choices: roll again, or hold (decline to roll again).
#### By **{Melvin Muuo}**
## Description
Pig dice game is played with a single six-sided die and players are allowed to make any number of rolls in each turn. After each roll the dice value is added to their score for that turn. After each roll player can decide whether to stop rolling and claim the total turn score or continue rolling. If they roll a 1 then they lose all points scored in a particular turn and turn is then passed to the opponent. This has no impact on their overall score. If players decide to stop rolling, they get the points scored so far which is added to their overall score.

The first player to score 100 points (or any other predetermined score at the beginning of the game) wins the game.

## Setup/Installation Requirements
*  Copy the URL (either select the text and copy it manually, or click on the clipboard button next to the URL). Clone the repository using the git clone command in the terminal. The terminal will print some feedback that it has successfully cloned the repository.
 
## Technologies Used
This project was created using:

  -CSS.
  -HTML.
  -Javascript.
  -jQuery.
  -Bootstrap.
## Behavior-Driven Development 
BDD is a common process in which the developer's focus begins on the behaviors that they want to see in their final application rather than thinking first about the code.

The criteria that must be considered to determine the pg dice game are:
  1. Ability to roll the dice when it's the users turn to play the game.
  2. Ability to see the score the user gets for each roll of the dice they make in the game.
  3. Ability to see the cumulative score for each round the user plays in the game. For example, if they roll the scores 2-6-3 consecutively, they should see that their end score as 11.
  4. Ability for the user to hold their score when they are satisfied with the points they've gained in a round of playing. The game should, therefore, add their held score to their most recent cumulative score.
  5. Ability to alert the user when their dice rolls on number 1. This will help them know that they can't roll the dice until the alternate player takes their round.
  6. Ability to know which player has won the game, which means they have scored 100 points before the alternate player.
## Support and contact details
Incase of any questions or queries kindly contact me on Muuomelvin73@gmail.com
### License
*{MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
