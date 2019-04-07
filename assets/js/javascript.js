// var blob = 0;
// var autoClick = 0;
// var xM = 1;
// var cost = 50;
// window.onload = function () {
//     blob = parseInt(blob);
//     blob = localStorage.getItem('bolbcunt');
//     document.getElementById('text').value = blob;

// }

// function update() {

//     function add() {
//         blob += xM;
//         localStorage.setItem('bolbcunt', blob);
//         document.getElementById('text').value = blob;
//         document.title = blob + ' Blob';
//         document.getElementById('ammountAutoClick').innerHTML = 'You own ' + autoClick + ' Auto click';
//         setInterval(timer, 1000);
//     }

//     function upgradeCloud() {
//         if (blob >= cost) {
//             blob -= cost;
//             document.getElementById('text').value -= cost;
//             xM *= 2; //Коэффициент увеличения эфективности прокачки (менять 2 на любое значение)
//             cost += (cost / 2); //Коэффициент увеличения стоимости прокачки (менять 2 на любое значение)
//             console.log(cost); //Цена прокачки твоего облака
//         } else {
//             alert("Недостаточно средств!");
//         }
//     }

//     function timer() {
//         blob = blob + autoClick;
//         update()
//     }


//     function add() {
//         blob++;
//         localStorage.setItem('bolbcunt', blob);
//         update()
//     }


    var blob = 0;
    var xM = 1;
    var cost = 50;
    window.onload = function () {
        blob = parseInt(blob);
        blob = localStorage.getItem('bolbcunt');
        document.getElementById('text').value = blob;
    }

    function add() {
        localStorage.setItem('bolbcunt', blob);
        blob += xM;
        document.getElementById('text').value = blob;
        document.title = blob + ' Blob';
    }

    function upgradeCloud() {
        if (blob >= cost) {
            blob -= cost;
            document.getElementById('text').value -= cost;
            xM *= (Math.floor(2)); 
            cost += Math.floor(cost / 0.9);
            console.log(cost);
        }else{
            alert('Недостаточно средств!');
        }
    }
//     //Необходимо доделать запись переменных
//     //xM
//     //cost
//     //в куки файлы//

