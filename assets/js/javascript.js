    var blob = 0;

    var xM = 1;
    var cost = 50;
    var xMauto = 1;// Эти 2 переменные для авто + числа, нужно реализовать //

    var Ac = 1;
    var AcAuto = 1;// Эти 2 переменные для авто + числа, нужно реализовать //
    var costCloud = 5000;

    var Bc = 1;
    var costButCloud = 30000;

        window.onload = function () {
        xM = parseInt(xM);
        blob = parseInt(blob);
        cost = parseInt(cost);

        xMauto = parseInt(xMauto);// Эти 2 переменные для авто + числа, нужно реализовать //
        AcAuto = parseInt(AcAuto);// Эти 2 переменные для авто + числа, нужно реализовать //

        Ac = parseInt(Ac);
        costCloud = parseInt(costCloud);

        Bc = parseInt(Bc);
        costButCloud = parseInt(costButCloud);

        document.getElementById('text').value = blob;
    }
    xMauto = localStorage.getItem('xMauto') > 1 ? xMauto=localStorage.getItem('xMauto') : xMauto=1;
    AcAuto = localStorage.getItem('AcAuto') > 1 ? AcAuto=localStorage.getItem('AcAuto') : AcAuto=1;

    cost = localStorage.getItem('costVar') > 50 ? cost=localStorage.getItem('costVar') : cost=50;
    costCloud = localStorage.getItem('costAutoVar') > 5000 ? costCloud=localStorage.getItem('costAutoVar') : costCloud=5000;
    costButCloud = localStorage.getItem('costButCloud') > 30000 ? costButCloud=localStorage.getItem('costButCloud') : costButCloud=30000;

    xM = localStorage.getItem('xMvar') > 1 ? xM=localStorage.getItem('xMvar') : xM=1;
    Ac = localStorage.getItem('aCvar') > 1 ? Ac=localStorage.getItem('aCvar') : Ac=1;
    Bc = localStorage.getItem('Bcvar') > 1 ? Bc=localStorage.getItem('Bcvar') : Bc=1;

    blob = localStorage.getItem('bolbcunt') > 0 ? blob=localStorage.getItem('bolbcunt') : blob=0;


    function add() {
        localStorage.setItem('AcAuto', AcAuto);
        localStorage.setItem('xMauto', xMauto);

        localStorage.setItem('costVar', cost);
        localStorage.setItem('costAutoVar', costCloud);
        localStorage.setItem('costButCloud', costButCloud);
        
        localStorage.setItem('bolbcunt', blob);

        localStorage.setItem('xMvar', xM);
        localStorage.setItem('aCvar', Ac);
        localStorage.setItem('Bcvar', Bc);

        document.getElementById('text').value = blob;

        document.getElementById('ammountAutoClick').innerHTML = 'You own: ' + xM + ' cloud X-UP';
        document.getElementById('costAutoClick').innerHTML = 'cloud X-UP price: ' + cost;


        document.getElementById('ownAutoCloud').innerHTML = 'You own: ' + Ac + ' auto cloud';
        document.getElementById('costAutoCloud').innerHTML = 'cloud Auto price: ' + costCloud;

        document.getElementById('butCloud').innerHTML = 'You own: ' + Bc + ' But';
        document.getElementById('costButCloud').innerHTML = 'But price: ' + costButCloud;

        document.title = blob + ' Blob';
        if  (Ac >= 2){
            blob += Ac * 2;
        }
        if  (Bc >= 2){
            blob += Bc * 3;
        }
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

    function butUpgradeCloud() {
        if (blob >= costButCloud) {
            blob -= costButCloud;
            document.getElementById('text').value -= costButCloud;
            Bc *= Math.floor(6); 
            costButCloud += Math.floor(costButCloud / 0.3);
            console.log(costButCloud);
        }else{
            alert('Недостаточно средств!');
        }
    }
    
