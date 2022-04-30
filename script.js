/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
////////////////////////////////////////////////////////
// 1) Define required constants:
const playerX = "X";
const playerO = "O";
const mainGrid = [];

// 2) Define required variables used to track the state of the game:
let playedCells = [];
let currentPlayer = playerX;

// 	2.1) Use either 3 arrays representing 3 "rows", or 9 variables each representing 9 "squares", or one 2D "board" array to represent the squares.	
// 	2.2) Use a variable to remember whose turn it is.
// 	2.3) Use a variable to represent three different possibilities - player that won, a tie, or game in play.

// 3) Store DOM elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:

// 	3.1) Depending on our choice of how we're representing the state of the game, we can either store/cache the 9 DOM elements (eg., divs) that represent the squares on the page, or we can store the div containing the 2D array. For example, let square1 = document.getElementById("square1") or let myGrid = document.getElementById("board") or let winMessageDiv = document.getElementById("winMessageDiv"), so that we can later just modify the square visually by doing things like myGrid.addEventListener("click", ...)  or   square1.innerHTML = "X" or any other UI update.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables:
// 		4.1.1) Initialize "board" array or "rows" array or 9 "squares" variables to somehow represent empty squares.
// 		4.1.2) Initialize turn variable representing whose turn it is first. We can use numbers 1 and -1 to represent the two players, or we can use "O" and "X" as strings.
// 		4.1.3) Initialize our winner variable to indicate that there is no winner or tie yet and the game is in progress. Decide how this variable will work. Maybe "-1" can mean that "O" has won? Or maybe "O" can represent that "O" has won. Maybe "T" can represent there is a tie. Maybe "?" or "None" or "null" can mean there is no winner or tie yet. We have lots of options.
// 	4.2) Render those state variables to the page:
// 		4.2.1) Render the board, with a render() function that is called (1) once when the game starts, and then (2) afterwards is either called every half second by itself, or is called  every time a player clicks anywhere. The render() function should:
// 			4.2.1.1) Update the user interface visually based on the data stored in our state variables. For example, if our state variables indicate that row 1 column 1 has a "O" in it, then our render function should draw an "O" visually there using the DOM.
// 		4.2.2) Render a message:
// 			4.2.2.1) If the "winner" variable has a value, render it visually
// 			4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
// 			4.2.2.3) If somebody has won, render a congratulatory message to which player has won.
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square:
// 	5.1) If our winner variable indicates that somebody has won, don't do anything. We don't want to update any variables if someone's won, or if it's a tie.
// 	5.2) Our event listener(s) should help us figure out which square was clicked by the player. 
// 	5.3) Check our variable or array element corresponding to the clicked square. If our variable corresponding to the clicked square already has a value, don't do anything. We don't update a square if it already has a value.
// 	5.4) If our variable or array element doesn't already have a value, update it to indicate that it was clicked by the current player.
// 	5.5) Update the turn variable to indicate that it is the next player's turn.
// 	5.6) Set the winner variable if there's a winner. Check your 9 variables, or your 3 arrays, or your one 2D-array for any rows, diagonals, or columns that have the same player. If there is, set the winner variable to indicate who won. If there isn't, don't modify the winner variable.
// 	5.7) If there's no winner, check if there's a tie
// 	5.8) All state has been updated, so render the state to the page (step 4.2).
		

// 6) Handle a player clicking the replay button:
// 	6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).
