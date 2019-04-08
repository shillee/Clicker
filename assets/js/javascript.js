    var blob = 0;
    var xM = 1;
    var cost = 50;
        window.onload = function () {
        xM = parseInt(xM);
        blob = parseInt(blob);
        document.getElementById('text').value = blob;
    }
    xM = localStorage.getItem('xMvar') > 1 ? xM=localStorage.getItem('xMvar') : xM=1;
    blob = localStorage.getItem('bolbcunt') > 0 ? blob=localStorage.getItem('bolbcunt') : b=0;

    function add() {
        localStorage.setItem('bolbcunt', blob);
        localStorage.setItem('xMvar', xM);
        document.getElementById('text').value = blob;
        document.getElementById('ammountAutoClick').innerHTML = 'You own ' + xM + ' cloud XUP';
        document.title = blob + ' Blob';
        blob += xM;
    }

    function upgradeCloud() {
        if (blob >= cost) {
            blob -= cost;
            document.getElementById('text').value -= cost;
            xM *= Math.floor(2); 
            cost += Math.floor(cost / 0.6);
            console.log(cost);
        }else{
            alert('Недостаточно средств!');
        }
    }
//     //Необходимо доделать запись переменных
//     //xM
//     //cost
//     //в куки файлы//

