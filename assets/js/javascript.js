    var blob = 0;

    var xM = 1;
    var cost = 50;

    var Ac = 1;
    var costCloud = 1000;
        window.onload = function () {
        xM = parseInt(xM);
        blob = parseInt(blob);
        cost = parseInt(cost);

        Ac = parseInt(Ac);
        costCloud = parseInt(costCloud);
        document.getElementById('text').value = blob;
    }
    cost = localStorage.getItem('costVar') > 50 ? cost=localStorage.getItem('costVar') : cost=50;
    costCloud = localStorage.getItem('costAutoVar') > 1000 ? costCloud=localStorage.getItem('costAutoVar') : costCloud=1000;

    xM = localStorage.getItem('xMvar') > 1 ? xM=localStorage.getItem('xMvar') : xM=1;
    Ac = localStorage.getItem('aCvar') > 1 ? Ac=localStorage.getItem('aCvar') : Ac=1;

    blob = localStorage.getItem('bolbcunt') > 0 ? blob=localStorage.getItem('bolbcunt') : b=0;

    function add() {
        localStorage.setItem('costVar', cost);
        localStorage.setItem('costAutoVar', costCloud);
        localStorage.setItem('bolbcunt', blob);
        localStorage.setItem('xMvar', xM);
        localStorage.setItem('aCvar', Ac);
        document.getElementById('text').value = blob;
        document.getElementById('ammountAutoClick').innerHTML = 'You own: ' + xM + ' cloud X-UP';
        document.getElementById('costAutoClick').innerHTML = 'cloud X-UP price: ' + cost;


        document.getElementById('ownAutoCloud').innerHTML = 'You own: ' + Ac + ' auto cloud';
        document.getElementById('costAutoCloud').innerHTML = 'cloud Auto price: ' + costCloud;
        document.title = blob + ' Blob';
        blob += xM;
        blob += Ac;
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


    function autoUpgradeCloud() {
        if (blob >= costCloud) {
            blob -= costCloud;
            document.getElementById('text').value -= costCloud;
            Ac *= Math.floor(4); 
            costCloud += Math.floor(costCloud / 0.3);
            console.log(costCloud);
        }else{
            alert('Недостаточно средств!');
        }
    }
//     //Необходимо доделать запись переменных
//     //xM
//     //cost
//     //в куки файлы//

