function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var guessingInput = document.getElementById("guess");

guessingInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});