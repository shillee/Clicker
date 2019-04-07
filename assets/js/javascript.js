var blob = 0;
var xM = 1;
var cost = 50;
window.onload = function () {
    blob = parseInt(blob);
    blob = localStorage.getItem('bolbcunt');
    document.getElementById('text').value = blob;
}

function add() {
    blob += xM;
    localStorage.setItem('bolbcunt', blob);
    document.getElementById('text').value = blob;
    document.title = blob + ' Blob';
}

function upgradeCloud() {
    if (blob >= cost) {
        blob -= cost;
        document.getElementById('text').value -= 50;
        xM *= 2;
        cost *= 2;
        console.log(cost);
    } else {
        alert("Недостаточно средств!");
    }
}