
let holdTwoCards = [];
let countMatchCards = [];
let	stars = "";
let moves = 0;
let strtTime = false;
let seconds = 0;
let time = 0;
let check = $('.deck').find('li');

const allCard = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt',
    'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb',
     'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'
];

let allCardAfterSh = shuffle(allCard);
setCard(allCardAfterSh);

// Set cards on the page
function setCard(){
    let i = 0;
    while ( i<allCardAfterSh.length ){
        $('li.card').find('i').each(function() {
            $(this).attr('class',allCardAfterSh[i]);
            i++;
        });
    }
}

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

check.click(function() {

    if (strtTime === false) { //  when user click the first card the timer will start

        timer = setInterval(function() { // Timer function from http://logicalmoon.com/2015/05/using-javascript-to-create-a-timer/
            seconds ++;
            function zeros(seconds) { // Set second with 00 from http://matthewbibby.com/countdown/
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
            return seconds;
            }
            time = parseInt(seconds / 60)+':'+ zeros(seconds % 60);
            document.getElementById('timer').innerText = time ;
        }, 1000);

        strtTime = true;
    }

    // If the card is matched or open don't do anything and skip the click function
    if ($(this).hasClass('match') === true || $(this).hasClass('open') === true){}

    // If holdTwoCards array is less than 3 thin it will open the card and push the name of the symbol in array
    else if (holdTwoCards.length <= 2 ) {
        $(this).attr('class','card open show');
        holdTwoCards.push($(this).find('i').attr('class'));

            if (holdTwoCards[0] === holdTwoCards[1]) { // If the names of a symbol in the open cards are matched
                $('li.card.open.show').each(function() {
                    $(this).attr('class','card match animated rubberBand'); // Set class 'match' to the cards in the array
                });

                // reset empty array and increment No. of moves
                holdTwoCards = [];
                moves++;

                setTimeout(function(){ // Timeout for shows all matched cards
                    countMatchCards=[]; // count the matched cards on the page
                    $('li.match').each(function() {
                        countMatchCards.push('match');
                    });

                    if (countMatchCards.length === 16) { //  if the matched cards are 16 then the game will end and the time will stop
                        alert('Congratulations! you end the game in '+time+ ' with '+ stars + ' stars and '+ moves + ' moves');
                        clearInterval(timer);
                        restatGame();
                    }
                }, 300);
            }

            else if (holdTwoCards.length == 2){ // if holdTwoCards array elements it's not matched

                setTimeout(function(){ // Timeout for shows the open cards in 3 ms, from https://www.sitepoint.com/jquery-settimeout-function-examples/
                    $('li.card.open.show').each(function() {
                        $(this).attr('class','card animated flipInX'); // Close the open cards, css animation from  https://github.com/daneden/animate.css
                    });
                }, 300);

                // Reset empty array and increment No. of moves
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

    $('.moves').text(moves); // Display No. of moves
  });


// function call when the user clicked restart icone
function restatGame() {

     check.attr('class','card'); // Reset all li for cards with a class 'card'

     holdTwoCards = []; // Reset the holdTwoCards array

     moves = 0; // Reset moves with 0 value
     $('.moves').text(moves);

    // Shuffle the cards and assign it
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
