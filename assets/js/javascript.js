var blob = 0;
var autoClick = 0;
function update() {
    document.getElementById('text').value = blob;
    document.title = blob + ' Blob';
}
function timer() {
    blob = blob + autoClick;
    update()
}
setInterval(timer, 1000);
window.onload = function () {
    blob = parseInt(blob);
    blob = localStorage.getItem('bolbcunt');
    document.getElementById('text').value = blob;
}
function add() {
    blob++;
    localStorage.setItem('bolbcunt', blob);
    document.getElementById('text').value = blob;
    document.title = blob + ' Blob';
}
function buyAutoClick() {
    if (blob >= ((autoClick+1) * 12)) {
        blob = blob - ((autoClick+1) * 12);
        autoClick = autoClick + 1;
        update()
    }
}

