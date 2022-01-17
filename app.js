function createRandomInt() {
    return Math.ceil(Math.random() * 6);
}
document.querySelector(".btn").onclick = function() {
    // PLAYER 1
    var randomInt1 = createRandomInt();
    var imageLocation1 = "images/dice"+randomInt1+".png";
    document.querySelector(".img1").setAttribute("src", imageLocation1);

    // Player 2
    var randomInt2 = createRandomInt();
    var imageLocation2 = "images/dice"+randomInt2+".png";
    document.querySelector(".img2").setAttribute("src", imageLocation2);

    if(randomInt1 > randomInt2) {
        document.querySelector("h1").innerHTML = "👻 Player 1 Wins";
    } else if(randomInt1 < randomInt2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 👻";
    } else {
        document.querySelector("h1").innerHTML = "Draw 😕";
    }
};
