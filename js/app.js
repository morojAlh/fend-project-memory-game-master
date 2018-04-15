/*
 * Create a list that holds all of your cards
 */

let allCard = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
let allCardAfterSh = shuffle(allCard);
setCard(allCardAfterSh);

// Set cards in the page
function setCard(){
  let i = 0;
  while ( i<allCardAfterSh.length ){
  $('li.card').find('i').each(function() {
      $(this).attr('class',allCardAfterSh[i]);
        i++;
    });
  }
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

  let holdTwoCards = [];
  let countMatchCards = [];
  let	stars = "";
  let moves = 0;
  let strtTime = false;
  let seconds = 0;

  let check = $('.deck').find('li');

  check.click(function() {

    // when user click first card the timer will start
    if (strtTime === false) {
        // Timer function from http://logicalmoon.com/2015/05/using-javascript-to-create-a-timer/
      timer = setInterval(function() {
          seconds ++;
          // Set second with 00 from http://matthewbibby.com/countdown/
          function zeros(seconds) {
          if (seconds < 10) {
              seconds = "0" + seconds;
          }
          return seconds;
          }
          document.getElementById('timer').innerText = parseInt(seconds / 60)+':'+ zeros(seconds % 60) ;
          }, 1000);
          strtTime = true;
        }

        // If card is match or open don't do anything and skip the click function
    if ($(this).hasClass('match') === true || $(this).hasClass('open') === true){
    }

// If holdTwoCards array is less than 3 thin it will open card and push the name of symbol in array
      else if (holdTwoCards.length <= 2 ) {
        $(this).attr('class','card open show');
        holdTwoCards.push($(this).find('i').attr('class'));

// If the name of symbol in the open cards is match
            if (holdTwoCards[0] === holdTwoCards[1]) {
              $('li.card.open.show').each(function() {
                // Set class match to the cards in array
                  $(this).attr('class','card match animated rubberBand');
                });
                // reset empty array and increment No. of moves
                holdTwoCards = [];
                moves++;
                // Timeout for show all matched cards
                setTimeout(function(){
                  // count the matched cards in page
                  countMatchCards=[];
                  $('li.match').each(function() {
                    countMatchCards.push('match');
                    });

                    // if the matched cards is 16 then the game will end and the time will stop
                  if (countMatchCards.length === 16) {
                    alert('Congratulations! you won! with '+ stars + ' stars and '+ moves + ' moves');
                     clearInterval(timer);
                    restatGame();
                  }
                }, 300);
                  }
                  // if holdTwoCards array elements it's not matched
                  else if (holdTwoCards.length == 2){
                    // Timeout function card show for 3 sec, from https://www.sitepoint.com/jquery-settimeout-function-examples/
                    // Timeout for show the open cards in 3 ms
                    setTimeout(function(){
                      // css animation from  https://github.com/daneden/animate.css
                      // close the open cards
                      $('li.card.open.show').each(function() {
                      $(this).attr('class','card animated flipInX');
                      });
                    }, 300);
                    // reset empty array and increment No. of moves
                    holdTwoCards = [];
                    moves++;
                  }
        }

// Remove star after some moves
    if (moves == 13) {
        $('li#one').find('i').remove();
        stars = '2';
    }
    else if (moves == 19) {
      $('li#two').find('i').remove();
      stars = '1';
    }
// disply no. of move
    $('.moves').text(moves);
  	});

// It's call when user clicked restart icone
function restatGame() {
 check.attr('class','card'); // Reset all li for card with class card
 holdTwoCards = []; // Reset the holdTwoCards array

 moves = 0; // Reset moves
 $('.moves').text(moves); // Reassigned move with 0 value

// Shuffle cards and reassigned after Shuffle
 allCardAfterSh = shuffle(allCard);
 setCard(allCardAfterSh);

 $('li#one, li#two').find('i').remove(); // Remove stars if it is not deleted

// Reset the missed stars
$('li#one').prepend('<i class="fa fa-star" id="one"></i>');
$('li#two').prepend('<i class="fa fa-star" id="two"></i>');

// Reset timer to 0:00
seconds = 0;
strtTime = false;
clearInterval(timer);
document.getElementById('timer').innerHTML = '0:00';
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
