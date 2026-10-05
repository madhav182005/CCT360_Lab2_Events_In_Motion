// CCT360 Interactive JavaScript Lab - Lab 2: Events in Motion

// Match variables
let madhavScore = 0;
let aadiScore = 0;

let matchStarted = false;

// Start Match
document.getElementById("start-match").addEventListener("click", function() {
    if (matchStarted === false) {

        matchStarted = true;

        document.getElementById("match-status").innerHTML =
            "Match Status: In Progress";

        document.getElementById("match-status").style.backgroundColor =
            "#c8e6c9";

        document.getElementById("events").innerHTML =
            "<li>The match has started.</li>";

    }
}); 

// Point for Madhav
document.getElementById("madhav-point").addEventListener("click", function() {

    if (matchStarted === true) {

        madhavScore = madhavScore + 1;

        document.getElementById("score").innerHTML =
            "Madhav: " + madhavScore + " | Aadi: " + aadiScore;

        document.getElementById("events").innerHTML +=
            "<li>Madhav scored a point.</li>";

    }
});

// Point for Aadi
document.getElementById("aadi-point").addEventListener("click", function() {

    if (matchStarted === true) {

        aadiScore = aadiScore + 1;

        document.getElementById("score").innerHTML =
                    "Madhav: " + madhavScore + " | Aadi: " + aadiScore;

        document.getElementById("events").innerHTML +=
            "<li>Aadi scored a point.</li>";

    }
});

// End Match
document.getElementById("end-match").addEventListener("click", function() {

    if (matchStarted === true) {

        let answer = window.confirm(
            "Are you sure you want to end the match?"
        );

        if (answer === true) {

            matchStarted = false;

            let winner;

            if (madhavScore > aadiScore) {
                winner = "Winner: Madhav";
            }

            else if (aadiScore > madhavScore) {
                winner = "Winner: Aadi";
            }

            else {
                winner = "Match Drawn";
            }

            document.getElementById("match-status").innerHTML =
                "Match Status: Finished - " + winner;

            document.getElementById("match-status").style.backgroundColor =
                "#ffcdd2";

            document.getElementById("events").innerHTML +=
                "<li>The match has ended.</li>";
        }

    }
});

// Reset Match
document.getElementById("reset-match").addEventListener("click", function() {

    madhavScore = 0;
    aadiScore = 0;

    matchStarted = false;

    document.getElementById("score").innerHTML =
        "Madhav: 0 | Aadi: 0";

    document.getElementById("match-status").innerHTML =
        "Match Status: Not Started";

    document.getElementById("match-status").style.backgroundColor =
        "#eeeeee";

    document.getElementById("events").innerHTML =
        "<li>Waiting for the match to start.</li>";

});