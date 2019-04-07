window.load = function () {
    blob = localStorage.getItem('bolbcunt');
    blob = parseInt(blob);
    document.getElementById('text').value = blob;
}
var blob = 0;
function add() {
    blob++;
    document.getElementById('text').value = blob;
    localStorage.setItem('bolbcunt', blob);
}


