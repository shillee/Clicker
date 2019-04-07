var blob = 0;

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

