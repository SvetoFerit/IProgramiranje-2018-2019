// Main
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#show-more');
    var sectionText = document.querySelector('.section-text');
    var hiddenText = document.querySelector('span');

    button.addEventListener('click', function (event) {
        event.preventDefault();
        hiddenText.classList.toggle('hidden');
    })
})