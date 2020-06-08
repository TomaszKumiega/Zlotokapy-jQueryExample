$(document).ready(function() {
    $("#logo-button").on("click", function() {
        location.replace("index.html");
    });
    $("#gatunki-button").on("click", function() {
        location.replace("gatunki.html");
    });
    $("#pielegnacja-button").on("click", function() {
        location.replace("pielegnacja.html");
    });
    $("#ciecie-button").on("click", function() {
        location.replace("ciecie.html");
    });
    $("#ciekawostki-button").on("click", function() {
        location.replace("ciekawostki.html");
    });
    $("#quiz-button").on("click", function() {
        location.replace("quiz-question.html");
    });
    $("#galeria-button").on("click", function() {
        location.replace("galeria.html");
    });

    loadFirstQuestion();

    function loadFirstQuestion() {

        $("#answer3").text('adfgadg');
        $("#answer1").text('adfgadg');
        $("#answer2").text('adfgadg');

    }

});