//--- Global variables for crystal values -------------------
var crystalOne = Math.floor(Math.random()*12 +1);
var crystalTwo = Math.floor(Math.random()*12 +1);
var crystalThree = Math.floor(Math.random()*12 +1);
var crystalFour = Math.floor(Math.random()*12 +1);


//--- Number and score variables ----------------------------
var computerPickNum = Math.floor(Math.random()*101)+19;
var userTotalScore = 0;
wins = 0;
losses = 0;


//--- JQuery Functions --------------------------------------

function initializeGame() {
    $("#random-number").html(computerPickNum);
};


function resetGame() {
    $("#user-score").empty();
    userTotalScore = 0;

    // Resets computer-generated number:
    computerPickNum = Math.floor(Math.random()*101)+19;

    // Resets all crystal values:
    crystalOne = Math.floor(Math.random()*12 +1);
    crystalTwo = Math.floor(Math.random()*12 +1);
    crystalThree = Math.floor(Math.random()*12 +1);
    crystalFour = Math.floor(Math.random()*12 +1);    
};


function checkWinsOrLosses() {
    if(userTotalScore === computerPickNum) {
        wins++;
        $("#wins-area").html(wins);
        alert("CONGRATULATIONS! YOU'RE A WINNER!");
        resetGame();
    }
    else if(userTotalScore > computerPickNum) {
        $("#losses-area").html(losses);
        losses++;
        alert("SORRY, YOU LOST. BOOO. TRY AGAIN");
        resetGame();
    }
};

function playGame() {

    //--- On-click event for #crystal-one:
    $("#crystal-one").on("click", function() {
        userTotalScore+= crystalOne;
        $("#user-score").html(userTotalScore);
        checkWinsOrLosses();
        console.log(crystalOne);
    });

    //--- On-click event for #crystal-two:
    $("#crystal-two").on("click", function() {
        userTotalScore+= crystalTwo;
        $("#user-score").html(userTotalScore);
        checkWinsOrLosses();
        console.log(crystalTwo);
    });

    //--- On-click event for #crystal-three:
    $("#crystal-three").on("click", function() {
        userTotalScore+= crystalThree;
        $("#user-score").html(userTotalScore);
        checkWinsOrLosses();
        console.log(crystalThree);
    });

    //--- On-click event for #crystal-four:
    $("#crystal-four").on("click", function() {
        userTotalScore+= crystalFour;
        $("#user-score").html(userTotalScore);
        checkWinsOrLosses();
        console.log(crystalFour);
    });
};



//--- JQuery functions that allow the click of buttons to
//--- initialize & reset the game. ----------------------

$("#start-game").on("click", function() {
    initializeGame();
    playGame();
});

$("#reset-game").on("click", function() {
    resetGame();
});


    
