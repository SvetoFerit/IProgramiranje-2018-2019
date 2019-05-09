function showNeparni(images) {
    for (var i = 0; images.length; i++) {
        if (images[i].getAttribute('data-order') !== 'neparni') {
            images[i].style.display = "none";
        } else {
            images[i].style.display = "inline";
        }
    }
}

function showParni(images) {
    for (var i = 0; images.length; i++) {
        if (images[i].getAttribute('data-order') !== 'parni') {
            images[i].style.display = "none";
        } else {
            images[i].style.display = "inline";
        }
    }
}

function showAll(images) {
    for (var i = 0; images.length; i++) {
        images[i].style.display = "inline";
    }
}

// Main
document.addEventListener('DOMContentLoaded', function () {
    var buttonParni = document.body.querySelector("#filter-parni");
    var buttonNeparni = document.body.querySelector("#filter-neparni");
    var buttonSvi = document.body.querySelector("#filter-svi");
    var images = document.body.querySelectorAll('img');

    buttonNeparni.addEventListener('click', function (event) {
        showNeparni(images);
    });

    buttonParni.addEventListener('click', function (event) {
        showParni(images);
    });

    buttonSvi.addEventListener('click', function (event) {
        showAll(images);
    });
});