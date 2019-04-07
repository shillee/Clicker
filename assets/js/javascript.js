var blob = 0;
<<<<<<< HEAD
var autoClick = 0;
=======
var xM = 1;
var cost = 50;
>>>>>>> 28667d3b9a0f7efdf0f3b16a268b8036adaf6aa9
window.onload = function () {
    blob = parseInt(blob);
    blob = localStorage.getItem('bolbcunt');
    document.getElementById('text').value = blob;
    
}
<<<<<<< HEAD
function update() {
=======

function add() {
    blob += xM;
    localStorage.setItem('bolbcunt', blob);
>>>>>>> 28667d3b9a0f7efdf0f3b16a268b8036adaf6aa9
    document.getElementById('text').value = blob;
    document.title = blob + ' Blob';
    document.getElementById('ammountAutoClick').innerHTML = 'You own ' + autoClick + ' Auto click';
    setInterval(timer, 1000);
}

function upgradeCloud() {
    if (blob >= cost) {
        blob -= cost;
        document.getElementById('text').value -= cost;
        xM *= 2;    //Коэффициент увеличения эфективности прокачки (менять 2 на любое значение)
        cost += (cost / 2 );  //Коэффициент увеличения стоимости прокачки (менять 2 на любое значение)
        console.log(cost); //Цена прокачки твоего облака
    } else {
        alert("Недостаточно средств!");
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


//Необходимо доделать запись переменных
//xM
//cost
//в куки файлы
