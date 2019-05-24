function checkRange(input) {
    if (!input.checkValidity()) {
        document.querySelector("p").innerHTML = "Provjeri ponovo unos"
        return;
    }
    document.querySelector("p").innerHTML = "Input OK";
}

// Main
document.addEventListener('DOMContentLoaded', function () {
    var button = document.body.querySelector('#check');
    var input = document.querySelector("#range");

    button.addEventListener('click', function (event) {
        checkRange(input);
    });
});