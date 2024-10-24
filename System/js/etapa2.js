/*DROPDOWN*/
{function drop1() {
    const selectBtn = document.getElementById("btnS-1"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT1").style.position;
    if(position == "inherit") {
        document.getElementById("dropT1").style.position = "relative";
    } else {
        document.getElementById("dropT1").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-1');
    
            let checked = document.querySelectorAll(".QuantTurma-1"),
                btnText = document.getElementById("btnT-1");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop2() {
    const selectBtn = document.getElementById("btnS-2"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT2").style.position;
    if(position == "inherit") {
        document.getElementById("dropT2").style.position = "relative";
    } else {
        document.getElementById("dropT2").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-2');
    
            let checked = document.querySelectorAll(".QuantTurma-2"),
                btnText = document.getElementById("btnT-2");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop3() {
    const selectBtn = document.getElementById("btnS-3"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT3").style.position;
    if(position == "inherit") {
        document.getElementById("dropT3").style.position = "relative";
    } else {
        document.getElementById("dropT3").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-3');
    
            let checked = document.querySelectorAll(".QuantTurma-3"),
                btnText = document.getElementById("btnT-3");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop4() {
    const selectBtn = document.getElementById("btnS-4"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT4").style.position;
    if(position == "inherit") {
        document.getElementById("dropT4").style.position = "relative";
    } else {
        document.getElementById("dropT4").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-4');
    
            let checked = document.querySelectorAll(".QuantTurma-4"),
                btnText = document.getElementById("btnT-4");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop5() {
    const selectBtn = document.getElementById("btnS-5"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT5").style.position;
    if(position == "inherit") {
        document.getElementById("dropT5").style.position = "relative";
    } else {
        document.getElementById("dropT5").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-5');
    
            let checked = document.querySelectorAll(".QuantTurma-5"),
                btnText = document.getElementById("btnT-5");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop6() {
    const selectBtn = document.getElementById("btnS-6"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT6").style.position;
    if(position == "inherit") {
        document.getElementById("dropT6").style.position = "relative";
    } else {
        document.getElementById("dropT6").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-6');
    
            let checked = document.querySelectorAll(".QuantTurma-6"),
                btnText = document.getElementById("btnT-6");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop7() {
    const selectBtn = document.getElementById("btnS-7"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT7").style.position;
    if(position == "inherit") {
        document.getElementById("dropT7").style.position = "relative";
    } else {
        document.getElementById("dropT7").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-7');
    
            let checked = document.querySelectorAll(".QuantTurma-7"),
                btnText = document.getElementById("btnT-7");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop8() {
    const selectBtn = document.getElementById("btnS-8"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT8").style.position;
    if(position == "inherit") {
        document.getElementById("dropT8").style.position = "relative";
    } else {
        document.getElementById("dropT8").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-8');
    
            let checked = document.querySelectorAll(".QuantTurma-8"),
                btnText = document.getElementById("btnT-8");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}
function drop9() {
    const selectBtn = document.getElementById("btnS-9"),
        itens = document.querySelectorAll(".turma");
    
    selectBtn.classList.toggle("open");

    position = document.getElementById("dropT9").style.position;
    if(position == "inherit") {
        document.getElementById("dropT9").style.position = "relative";
    } else {
        document.getElementById("dropT9").style.position = "inherit";
    }

    itens.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            item.classList.toggle('QuantTurma-9');
    
            let checked = document.querySelectorAll(".QuantTurma-9"),
                btnText = document.getElementById("btnT-9");
    
                if(checked && checked.length > 0) {
                    btnText.innerHTML = checked.length + " Selected";
                } else {
                    btnText.innerHTML = "Turmas";
                }
        });
    })
}}

/*ADD*/
function addProf() {
    {const list = document.getElementById("listaProfessores");

    var li = document.createElement("li");
    li.classList = "P";

    var input1 = document.createElement("input");
    input1.classList.add("nomeProf");
    input1.type = "text";
    input1.placeholder = "Nome";
    input1.name = "nome";

    var input2 = document.createElement("input");
    input2.classList.add("materiaProf", "disciplina");
    input2.type = "text";
    input2.placeholder = "Matéria";
    input2.name = "materia";
    input2.list = "materias";

    var n = document.querySelectorAll(".P").length;
    var i = n + 1;

    var div1 = document.createElement("div");
    div1.id = "dropT" + i;
    div1.classList = "Turmas";
    div1.style = "position: inherit;";

    var div2 = document.createElement("div");
    div2.onclick = function (){
        const selectBtn = document.getElementById("btnS-" + i),
          itens = document.querySelectorAll(".turma");
    
        selectBtn.classList.toggle("open");

        position = document.getElementById("dropT" + i).style.position;
        if(position == "inherit") {
            document.getElementById("dropT" + i).style.position = "relative";
        } else {
            document.getElementById("dropT" + i).style.position = "inherit";
        }

        itens.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('checked');
                item.classList.toggle('QuantTurma-' + i);
        
                let checked = document.querySelectorAll('.QuantTurma-' + i),
                    btnText = document.getElementById("btnT-" + i);
        
                    if(checked && checked.length > 0) {
                        btnText.innerHTML = checked.length + " Selected";
                    } else {
                        btnText.innerHTML = "Turmas";
                    }
            });
        })
    };
    div2.id = "btnS-" + i;
    div2.classList = "select-btn";

    var span1 = document.createElement("span");
    span1.id = "btnT-" + i;
    span1.classList = "btn-text";
    var span1Text = document.createTextNode("Turmas");
    span1.appendChild(span1Text);

    var span2 = document.createElement("span");
    span2.classList = "arrow-dwn";
    span2.textContent = "▼";
    var icon = document.createElement("i");
    icon.classList = "fa-solid fa-chevron-down";
    span2.appendChild(icon);

    var ul = document.createElement("ul");
    ul.classList = "list-turmas scroll";

    //opções
    var C = document.querySelectorAll(".T");
    var LT = document.querySelectorAll(".list-turmas");

    for(var iOpt=0; iOpt < C.length; iOpt++) {
        var Ctext = C[iOpt].value;

        if(Ctext != "") {
            var k = LT.length;
            var l = k + 1;
            
            var quant = "optionTurmaProf-" + l;
            var liOpt = document.createElement("li");
            liOpt.classList = "turma " + quant;

            var span1Opt = document.createElement("span");
            span1Opt.classList = "checkbox";

            var clasOpt = "nomeSpanTurma-" + l;
            var span2Opt = document.createElement("span");
            span2Opt.classList = "turma-text " + clasOpt;

            var textTOpt = document.createTextNode(Ctext);

            span2Opt.appendChild(textTOpt);
            liOpt.appendChild(span1Opt);
            liOpt.appendChild(span2Opt);
            ul.appendChild(liOpt);
        }
    }

    li.appendChild(input1);
    li.appendChild(input2);
    div2.appendChild(span1);
    div2.appendChild(span2);
    div1.appendChild(div2);
    div1.appendChild(ul);
    li.appendChild(div1);
    list.appendChild(li);}
}