function changeBackground(bp) {
    if (bp.matches) {
        document.body.style.backgroundColor = "yellow";
        return;
    }
    document.body.style.backgroundColor = "pink";
}

var breakpoint = window.matchMedia("(max-width: 700px)");

changeBackground(breakpoint);
breakpoint.addListener(changeBackground);