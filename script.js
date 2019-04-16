let SenhaCad = "abc";
let senhaUser;

window.onload = function () {
    senhaUser = document.getElementById('senhaUser');
    SenhaCad = "abc";
    let objeto = document.getElementById('objeto');
    if (senhaUser === SenhaCad) {
        document.getElementById('login').onclick = function () {
            fadeIn(objeto, 1);
        }
    } else {


        document.getElementById('login').onclick = function () {
            fadeOut(objeto, 1);
        }
    }
}



function fadeIn(element, time) {
    processa(element, time, 0, 100);
}



function fadeOut(element, time) {
    processa(element, time, 100, 0);
}



function processa(element, time, initial, end) {
    if (initial == 0) {
        increment = 2;
        element.style.display = "block";
    } else {
        increment = -2;
    }



    opc = initial;



    intervalo = setInterval(function () {
        if ((opc == end)) {
            if (end == 0) {
                element.style.display = "none";
            }
            clearInterval(intervalo);
        } else {
            opc += increment;
            element.style.opacity = opc / 100;
            element.style.filter = "alpha(opacity=" + opc + ")";
        }
    }, time * 10);
}
