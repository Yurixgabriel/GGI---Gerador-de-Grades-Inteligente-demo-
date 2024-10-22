/*DIAS DE AULA*/
function grade_dom(Dom) {
    var display1 = document.getElementById(Dom).style.display;
    var btnDom = document.getElementById('btn_dom');

    if(display1 == "none") {
        document.getElementById(Dom).style.display = 'flex';
        btnDom.classList.add('pressionado');
    }
    else {
        document.getElementById(Dom).style.display = 'none';
        btnDom.classList.remove('pressionado');
    }
}

function grade_seg(Seg) {
    var display2 = document.getElementById(Seg).style.display;
    var btnSeg = document.getElementById('btn_seg');

    if(display2 == "none") {
        document.getElementById(Seg).style.display = 'flex';
        btnSeg.classList.add('pressionado');
    }
    else {
        document.getElementById(Seg).style.display = 'none';
        btnSeg.classList.remove('pressionado');
    }
}

function grade_ter(Ter) {
    var display3 = document.getElementById(Ter).style.display;
    var btnTer = document.getElementById('btn_ter');

    if(display3 == "none") {
        document.getElementById(Ter).style.display = 'flex';
        btnTer.classList.add('pressionado');
    }
    else {
        document.getElementById(Ter).style.display = 'none';
        btnTer.classList.remove('pressionado');
    }
}

function grade_qua(Qua) {
    var display4 = document.getElementById(Qua).style.display;
    var btnQua = document.getElementById('btn_qua');

    if(display4 == "none") {
        document.getElementById(Qua).style.display = 'flex';
        btnQua.classList.add('pressionado');
    }
    else {
        document.getElementById(Qua).style.display = 'none';
        btnQua.classList.remove('pressionado');
    }
}

function grade_qui(Qui) {
    var display5 = document.getElementById(Qui).style.display;
    var btnQui = document.getElementById('btn_qui');

    if(display5 == "none") {
        document.getElementById(Qui).style.display = 'flex';
        btnQui.classList.add('pressionado');
    }
    else {
        document.getElementById(Qui).style.display = 'none';
        btnQui.classList.remove('pressionado');
    }
}

function grade_sex(Sex) {
    var display6 = document.getElementById(Sex).style.display;
    var btnSex = document.getElementById('btn_sex');

    if(display6 == "none") {
        document.getElementById(Sex).style.display = 'flex';
        btnSex.classList.add('pressionado');
    }
    else {
        document.getElementById(Sex).style.display = 'none';
        btnSex.classList.remove('pressionado');
    }
}

function grade_sab(Sab) {
    var display7 = document.getElementById(Sab).style.display;
    var btnSab = document.getElementById('btn_sab');

    if(display7 == "none") {
        document.getElementById(Sab).style.display = 'flex';
        btnSab.classList.add('pressionado');
    }
    else {
        document.getElementById(Sab).style.display = 'none';
        btnSab.classList.remove('pressionado');
    }
}

/*ADD*/
function addTurno() {
    const list = document.getElementById("horarios");

    var li = document.createElement("li");

    var input = document.createElement("input");
    input.classList = "H";
    input.type = "text";

    li.appendChild(input);
    list.appendChild(li);
}

function addTurma() {
    const list = document.getElementById("turmas");

    var li = document.createElement("li");

    var input = document.createElement("input");
    input.classList = "T";
    input.type = "text";

    li.appendChild(input);
    list.appendChild(li);
}