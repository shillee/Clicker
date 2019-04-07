var blob = 0;
var autoClick = 0;
window.onload = function () {
    blob = parseInt(blob);
    blob = localStorage.getItem('bolbcunt');
    document.getElementById('text').value = blob;
    
}
function update() {
    document.getElementById('text').value = blob;
    document.title = blob + ' Blob';
    document.getElementById('ammountAutoClick').innerHTML = 'You own ' + autoClick + ' Auto click';
    setInterval(timer, 1000);
}
function buyAutoClick() {
    if (blob >= ((autoClick+1) * 12)) {
        blob = blob - ((autoClick+1) * 12);
        autoClick = autoClick + 1;
        update()
    }
}
function timer() {
    blob = blob + autoClick;
    update()
}


function add() {
    blob++;
    localStorage.setItem('bolbcunt', blob);
    update()
}


