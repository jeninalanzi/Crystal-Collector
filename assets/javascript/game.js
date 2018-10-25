//--- Global variables for crystal values -------------------
var crystalOne = Math.floor(Math.random()*12 +1);
var crystalTwo = Math.floor(Math.random()*12 +1);
var crystalThree = Math.floor(Math.random()*12 +1);
var crystalFour = Math.floor(Math.random()*12 +1);


//--- Number and score variables ----------------------------
var computerPickNum = Math.floor(Math.random()*120)+19;
var userTotalScore;


//--- crystalGame object with properties & values -----------

var crystalGame = {
    wins: 0,
    losses: 0,

    resetGame: function() {
        computerPickNum = Math.floor(Math.random()*120)+19;
            console.log("randomNumber = " + computerPickNum);
        crystalOne = Math.floor(Math.random()*12 +1);
        crystalTwo = Math.floor(Math.random()*12 +1);
        crystalThree = Math.floor(Math.random()*12 +1);
        crystalFour = Math.floor(Math.random()*12 +1);
        userTotalScore = 0;

        $("#random-number").html(computerPickNum);
        $("#user-score").html(userTotalScore);

        $("#reset-game").on("click", function() {
            $("#random-number").empty();
            $("#user-score").empty();
        });
    },

    initializeGame: function() {

            //---Same as reset values.
            computerPickNum = Math.floor(Math.random()*120)+19;
                console.log("randomNumber = " + computerPickNum);
            crystalOne = Math.floor(Math.random()*12 +1);
            crystalTwo = Math.floor(Math.random()*12 +1);
            crystalThree = Math.floor(Math.random()*12 +1);
            crystalFour = Math.floor(Math.random()*12 +1);
            userTotalScore = 0;

            $("#random-number").html(computerPickNum);
            $("#user-score").html(userTotalScore);

            //---Assign each crystal a random value:
            $("#crystal-one").attr("value", crystalOne);
                var test = $("#crystal-one").attr("value");
                console.log("Crystal One Value: " + test);

            $("#crystal-two").attr("value", crystalTwo);
                var test = $("#crystal-two").attr("value");
                console.log("Crystal Two Value: " + test);

            $("#crystal-three").attr("value", crystalThree);
                var test = $("#crystal-three").attr("value");
                console.log("Crystal Three Value: " + test);
            
            $("#crystal-four").attr("value", crystalFour);
                var test = $("#crystal-four").attr("value");
                console.log("Crystal Four Value: " + test);

            //---Adds value to the userTotalScore once crystals are clicked:
            $(".box").on("click", function() {
                var userScoreOutput = parseInt(userTotalScore) + parseInt(test);
                    console.log("userTotalScore = " + userTotalScore);
                    console.log("Crystal collected value = " + userScoreOutput);
                    $("#user-score").html(userScoreOutput);

            }); // *** PLEASE REVIEW W/TEACHER. NOT ADDING UP NUMBERS TOGETHER.
    
    },

    
        


};



// JQuery functions that work so far, not yet tied to any functional gameplay.
// $("#start-game").click(function() {
//     $("#random-number").text(computerPickNum);
// });

// $("#reset-game").click(function() {
//     $("#random-number").empty();
// });

$("#start-game").on("click", function() {
    crystalGame.initializeGame();
});

$("#reset-game").on("click", function() {
    crystalGame.resetGame();
});