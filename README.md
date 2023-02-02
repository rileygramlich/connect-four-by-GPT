# Connect Four
### By [Chat GPT](https://chat.openai.com/chat/)
### Assembled by [rileygramlich](https://github.com/rileygramlich)
---

## Description and Background Info:
Connect Four is a classic two-player strategy game where players take turns dropping colored discs from the top into a vertically suspended grid. The objective of the game is to be the first player to get four of their own colored discs in a row, either vertically, horizontally, or diagonally.

## Screenshots:
To come!
<!-- ![Screenshot of initialized game]() -->



## Technologies Used:
The game was developed using TypeScript, HTML, CSS, and DOM manipulation.

#### Chat GPT
ChatGPT: an advanced language model developed by OpenAI, capable of generating human-like text, answering questions, and writing code. ChatGPT was used to generate the code for this Connect Four game.

#### TypeScript
TypeScript is a statically typed programming language that is a superset of JavaScript. It adds features such as classes, interfaces, and type annotations to JavaScript and can be used to write scalable and maintainable applications. TypeScript was used to develop the game logic and render the game board on the web page.

#### HTML
HTML (HyperText Markup Language) is used to structure the content of the game board and provide the user interface.

#### CSS
CSS (Cascading Style Sheets) was used to style the HTML elements of the game board, such as colors and size of the cells and rows.

#### DOM manipulation
The Document Object Model (DOM) is a programming interface for HTML and XML documents. DOM manipulation is the process of changing or manipulating the elements of a web page using JavaScript. In this game, DOM manipulation was used to dynamically render the game board and update it after each move.


#### Other Tools
This game was programmed wholely on [Virtual Studio Code Editor](https://code.visualstudio.com/)

Google images was used to find one original photo that included all four possible pieces and then they were cropped with basic Windows photo editor. Then since they still had a white background, [remove.bg](https://www.remove.bg/) was used to remove the white and convert to png images.

Google Fonts was used to find the fonts.

Microsoft paint was used to create the original wireframe.

Google Chrome and its developer tools was used to test and render the game during production.

## Getting Started: 

### Demo:
[Click to play game!](https://rileygramlich.github.io/checkers/)

### Instructions:
The object of the game is to clear all of your opponent's pieces from the board.
Rules:
* Red moves first.
* Turns alternate
* A regular piece must move one square forward at a diagonal either to the right or left (unless capturing a piece)
* A regular piece can capture a piece by jumping over an enemy piece and therefore moving two squares diagonally
* If you capture a piece, you can move again. (Special rule for this version) (Regular chess is played that you must make a capture if possible and you have to continuation capture)
* A regular piece becomes a king piece upong landing on a square that is on the last row further from his side
* A king piece can move in any direction one square diagonally
* A king piece can jump and capture an enemy piece in any direction and correspondingly move two square diagonally
* You cannot jump your own pieces
* You cannot jump more than one square
* You can never land on a light square
* No foul play
* Moderate trash talking acceptable

## Planned future enhancements:
* Add animations for when making a move
* Add sound effects
* Add in move history table
* Add computer player logic for single player option
