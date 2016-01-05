var quotes = [
    "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car. _Bob Monkhouse",
    "I'm sorry, if you were right, I'd agree with you. _Robin Williams",
    "Always borrow money from a pessimist. He won’t expect it back. _Oscar Wilde",
    "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage. _Mark Russell",
    "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings. _Robert Bloch"
];

$(document).ready(function() {

    getQuote();

    function getQuote() {

        getRandom = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[getRandom];
        splitQuote = randomQuote.split(" _");

        $("h1").html(splitQuote[0]);
        $("h2").html(splitQuote[1]);
    }

    $(".newquote").on("click", function() {
        var $this = $(".fadein");
        $this.fadeOut(600, function() {
            getQuote();
        }).delay(600).fadeIn(3000);
        //getQuote();
    });

    $(".tweetquote").on("click", function() {
        url = "http://twitter.com/home/?status=" + $("h1").html() + " _" + $("h2").html();
        window.open(url);
    });

}); // End Doc.Ready Function
