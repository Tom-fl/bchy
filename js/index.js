var icn = document.querySelector('.iconfont ');
var navSmall = document.querySelector('.nav-small');
var a = 0;
icn.onclick = function() {
    a++;
    navSmall.style.display = 'block';
    if (a % 2 == 0) {
        navSmall.style.display = 'none';
    }
}