var blob = 0;
window.onload = function () {
    blob = localStorage.getItem('bolbcunt');
    blob = parseInt(blob);
    document.getElementById('text').value = blob;
    
}

function add() {
    blob++;
    document.getElementById('text').value = blob;
    localStorage.setItem('bolbcunt', blob);
}


