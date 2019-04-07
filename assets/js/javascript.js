var blob = 0;

window.onload = function () {
    blob = parseInt(blob);
    document.getElementById('text').value = blob;
    blob = localStorage.getItem('bolbcunt');
}
function add() {
    blob++
    document.getElementById('text').value = blob;
    document.title = blob + ' Blob';
    localStorage.setItem('bolbcunt', blob);
}

