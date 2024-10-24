
/*ETAPA 1*/
function iniciaModal1(modalID_1) {
    const modal1 = document.getElementById(modalID_1);

    if(modal1) {
        modal1.classList.add('mostrar');

        modal1.addEventListener('click', (e) => {
            if(e.target.id == modalID_1 || e.target.className == 'fechar' || e.target.className == 'button_pronto') {
                modal1.classList.remove('mostrar');
            }
        });
    }
};

const butao1 = document.querySelector('.btnModalPasso1');
butao1.addEventListener('click', () => iniciaModal1('modalPasso1'));


/*ETAPA 2*/
function iniciaModal2(modalID_2) {
    const modal2 = document.getElementById(modalID_2);

    if(modal2) {
        modal2.classList.add('mostrar');

        modal2.addEventListener('click', (e) => {
            if(e.target.id == modalID_2 || e.target.className == 'fechar'  || e.target.className == 'button_pronto') {
                modal2.classList.remove('mostrar');
            }
        });
    }
};

const butao2 = document.querySelector('.btnModalPasso2');
butao2.addEventListener('click', () => iniciaModal2('modalPasso2'));


/*ETAPA 3*/
function iniciaModal3(modalID_3) {
    const modal3 = document.getElementById(modalID_3);

    if(modal3) {
        modal3.classList.add('mostrar');

        modal3.addEventListener('click', (e) => {
            if(e.target.id == modalID_3 || e.target.className == 'fechar'  || e.target.className == 'button_pronto') {
                modal3.classList.remove('mostrar');
            }
        });
    }
};

const butao3 = document.querySelector('.btnModalPasso3');
butao3.addEventListener('click', () => iniciaModal3('modalPasso3'));


/*ETAPA 4*/
function iniciaModal4(modalID_4) {
    const modal4 = document.getElementById(modalID_4);

    if(modal4) {
        modal4.classList.add('mostrar');

        modal4.addEventListener('click', (e) => {
            if(e.target.id == modalID_4 || e.target.className == 'fechar'  || e.target.className == 'button_pronto') {
                modal4.classList.remove('mostrar');
            }
        });
    }
};

const butao4 = document.querySelector('.btnModalPasso4');
butao4.addEventListener('click', () => iniciaModal4('modalPasso4'));


/*MANUAL*/