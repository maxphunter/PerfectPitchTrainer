
$(document).ready(function () {

    var noteArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var noteLetter = null;
    var feedbackCorrectSection = $('#feedback-correct');
    var feedbackIncorrectSection = $('#feedback-incorrect');
    feedbackCorrectSection.hide();
    feedbackIncorrectSection.hide();



    $('#playBtn').on('click', function () {
        var noteNumber = Math.floor(Math.random() * 7) + 1;
        noteLetter = noteArray[noteNumber];
        var audioPlayer = document.getElementById(noteLetter);
        audioPlayer.play();

    });

    $('#hearAgainBtn').on('click', function(){
        var audioPlayer = document.getElementById(noteLetter);
        audioPlayer.play();

    });

    $('#answer').keyup(function(){
        var answer = $('#answer').val();
        if(answer.length > 0) {
            if (answer.toLowerCase() == noteLetter) {
                feedbackIncorrectSection.hide();
                feedbackCorrectSection.text("Correct! It was a " + noteLetter);
                feedbackCorrectSection.show();
            } else {
                feedbackCorrectSection.hide();
                feedbackIncorrectSection.text("Incorrect");
                feedbackIncorrectSection.show();
            }
        }
    });

    var addHoverAnimation = function(selector){
        $(selector + " > a").hover(function() {
                var CSStransforms = anime({
                    targets: selector,
                    scale: 1.1,
                    duration: 1
                });
            },
            function() {
                var CSStransforms = anime({
                    targets: selector,
                    scale: 1,
                    duration: 1
                });
            }

        );
    };

    addHoverAnimation('#new-note-div');
    addHoverAnimation('#same-note-div');



});