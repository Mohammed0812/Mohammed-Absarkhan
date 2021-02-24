function apple() {
    var table = document.querySelector('#myTable');
    var apple = parseInt(document.querySelector('#quant').value);
    var q1 = 800;
    var sum1 = q1 - apple;
    document.querySelector('#apple-in').innerHTML = sum1;
    document.querySelector('#apple-out').innerHTML = apple;
    localStorage.setItem('sum1', sum1);
    localStorage.setItem('apple', apple);
}

function banana() {
    var table = document.querySelector('#myTable');
    var banana = parseInt(document.querySelector('#quant').value);
    var q2 = 1100;
    var sum2 = q2 - banana;
    document.querySelector('#banana-in').innerHTML = sum2;
    document.querySelector('#banana-out').innerHTML = banana;
    localStorage.setItem('sum2', sum2);
    localStorage.setItem('banana', banana);
}

function mango() {
    var table = document.querySelector('#myTable');
    var mango = parseInt(document.querySelector('#quant').value);
    var q3 = 500;
    var sum3 = q3 - mango;
    document.querySelector('#mango-in').innerHTML = sum3;
    document.querySelector('#mango-out').innerHTML = mango;
    localStorage.setItem('sum3', sum3);
    localStorage.setItem('mango', mango);
}
function orange() {
    var table = document.querySelector('#myTable');
    var orange = parseInt(document.querySelector('#quant').value);
    var q4 = 650;
    var sum4 = q4 - orange;
    document.querySelector('#orange-in').innerHTML = sum4;
    document.querySelector('#orange-out').innerHTML = orange;
    localStorage.setItem('sum4', sum4);
    localStorage.setItem('orange', orange);
}
function lemon() {
    var table = document.querySelector('#myTable');
    var lemon = parseInt(document.querySelector('#quant').value);
    var q5 = 1000;
    var sum5 = q5 - lemon;
    document.querySelector('#lemon-in').innerHTML = sum5;
    document.querySelector('#lemon-out').innerHTML = lemon;
    localStorage.setItem('sum5', sum5);
    localStorage.setItem('lemon', lemon);
}
function pineApple() {
    var table = document.querySelector('#myTable');
    var pineApple = parseInt(document.querySelector('#quant').value);
    var q6 = 300;
    var sum6 = q6 - pineApple;
    document.querySelector('#pineApple-in').innerHTML = sum6;
    document.querySelector('#pineApple-out').innerHTML = pineApple;
    localStorage.setItem('sum6', sum6);
    localStorage.setItem('pineApple', pineApple);
}
function waterMelon() {
    var table = document.querySelector('#myTable');
    var waterMelon = parseInt(document.querySelector('#quant').value);
    var q7 = 350;
    var sum7 = q7 - waterMelon;
    document.querySelector('#waterMelon-in').innerHTML = sum7;
    document.querySelector('#waterMelon-out').innerHTML = waterMelon;
    localStorage.setItem('sum7', sum7);
    localStorage.setItem('waterMelon', waterMelon);
}

function quantLoad() {
    //apple
    let a = localStorage.getItem('sum1');
    document.querySelector('#apple-in').innerHTML = a;
    let b = localStorage.getItem('apple');
    document.querySelector('#apple-out').innerHTML = b;
    //banana
    let c = localStorage.getItem('sum2');
    document.querySelector('#banana-in').innerHTML = c;
    let d = localStorage.getItem('banana');
    document.querySelector('#banana-out').innerHTML = d;
    //mango
    let m = localStorage.getItem('sum3');
    document.querySelector('#mango-in').innerHTML = m;
    let n = localStorage.getItem('mango');
    document.querySelector('#mango-out').innerHTML = n;
    //orange
    let o = localStorage.getItem('sum4');
    document.querySelector('#orange-in').innerHTML = o;
    let p = localStorage.getItem('orange');
    document.querySelector('#orange-out').innerHTML = p;
    //lemon
    let le = localStorage.getItem('sum5');
    document.querySelector('#lemon-in').innerHTML = le;
    let mon = localStorage.getItem('lemon');
    document.querySelector('#lemon-out').innerHTML = mon;
    //pineapple
    let pi = localStorage.getItem('sum6');
    document.querySelector('#pineApple-in').innerHTML = pi;
    let ne = localStorage.getItem('pineApple');
    document.querySelector('#pineApple-out').innerHTML = ne;
    //watermelon
    let w = localStorage.getItem('sum7');
    document.querySelector('#waterMelon-in').innerHTML = w;
    let z = localStorage.getItem('waterMelon');
    document.querySelector('#waterMelon-out').innerHTML = z;
}