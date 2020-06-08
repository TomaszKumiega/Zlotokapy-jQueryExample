$(document).ready(function() {
    loadFirstQuestion();

    function loadFirstQuestion() {

        question = "1. Bierzesz dwa tygodnie wolnego w pracy. Jak je wykorzystasz?";

        answer1 = "Wyruszam w podróż do jakiegoś egzotycznego miejsca i poznaję nową kulturę.";
        answer2 = "Jadę na kepmping nad morzem.";
        answer3 = "Wynajmuję domek w górach.";

        $("#question").text(question);
        $("#answer3").text(answer1);
        $("#answer1").text(answer2);
        $("#answer2").text(answer3);

    }
});