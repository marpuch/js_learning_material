var papier = document.getElementById('myCanvas');
var pedzel = papier.getContext('2d');
var szerokosc = papier.clientWidth;
var wysokosc = papier.clientHeight;

var rysujOs = function() {
    pedzel.fillStyle="#000000";
    pedzel.moveTo(0, wysokosc/2);
    pedzel.lineTo(szerokosc, wysokosc/2);
    pedzel.stroke();
    pedzel.moveTo(szerokosc/2, 0);
    pedzel.lineTo(szerokosc/2, wysokosc);
    pedzel.stroke();

    pedzel.fillText("-" + szerokosc/2, 0, wysokosc/2 - 5);
    pedzel.fillText(szerokosc/2, szerokosc-20, wysokosc/2 - 5);

    pedzel.fillText(wysokosc/2, szerokosc/2 + 5, 10);
    pedzel.fillText("-" + wysokosc/2, szerokosc/2 + 5, wysokosc - 5);
}

var rysujPunkt = function(x, y) {
    pedzel.fillStyle="#990000";
    pedzel.fillRect(x + szerokosc/2, -1*y + wysokosc/2, 1, 1);
}
