# Jump Quest
## Background & Overview
* Jump Quest is a 2d side-scrolling game in which the sole purpose of the game is to jump across several platforms, dodge obstacles, and reach the end of the level in order to retrieve a special item & beat the game. There will be moving obstacles throughout the level that will make the quest more difficult. If at any point, the user makes a mistake and falls off of a platform, they will need to continue from where they landed. 

## Functionality & MVP's
In Jump Quest, users will be able to:
* Start a new game 
* Pause the game to restart
* Move using the arrow keys
  * Left and right to move
  * Down to crouch/duck
* Jump using the spacebar
In addition, this project will include:
* Background music that the user can toggle on/off
* A toggle menu that explains the rules of the game
* Links to github repository, linkedin profile & other 

## Wireframes
* Sample level architecture: https://wireframe.cc/pro/pp/5b70db491446152
  * Orange rectangles: platforms for user to jump on
  * Grey circles: moving obstacles

## Architecture & Technologies
* JavaScript for game logic 
* Canvas for creating user model, platforms and moving obstacles 
* HTML and CSS for overall game structure & styling

## Implementation Timeline
* Day 1
  * Create user movement functionality
  * Implement game physics (jumping and falling)
* Day 2
  * Create platform canvas elements
  * Implement game logic so that user can only stand on platform.
  * Add background image
* Day 3
  * Start building out level
  * Create obstacle canvas element
  * Incorporate moving obstacle & game logic
* Day 4
  * Fine tune all game physics, finish all core functionalities.
  * Add bgm (background music)
* Day 5 & Onward
  * Finish building out level (adding platforms and obstacles)
  * Fix any bugs
  * Work on bonus features

## Bonus Features
* A portal at the end (top) of the level that transports the user to another map/level
* Upon game start, show the top of the level and pan down to where the user begins the level
* Randomized obstacles
* Incorporate user health bar. Hitting obstacles or falling reduces health points. 

