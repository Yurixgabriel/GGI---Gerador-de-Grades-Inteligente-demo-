// ETAPA 1
function btnProntoPasso1() {
    // Criar linhas e colunas da grade
    const linhas = document.querySelectorAll(".H");
    const linhaP = document.querySelectorAll(".linhaPrincipal")
    const colunas = document.querySelectorAll(".T");
    const tables = document.querySelectorAll(".tbody");
    const LT = document.querySelectorAll(".list-turmas");

    for(i=0; i < tables.length; i++) {
        var contColuns = 0;

        // Remover apenas as colunas dinâmicas da linha principal, mantendo o conteúdo fixo
        while (linhaP[i].children.length > 1) {
            linhaP[i].removeChild(linhaP[i].lastChild);
        }

        // Remover todas as linhas dinâmicas do tbody, exceto a linha principal
        const linhasTbody = tables[i].querySelectorAll('tr:not(.linhaPrincipal)');
        linhasTbody.forEach(linha => linha.remove());

        // Criar colunas
        for (j = 0; j < colunas.length; j++) {
            if (colunas[j].value != "") {
                const td1 = document.createElement("td");
                td1.classList.add("celulaGrade");
                td1.textContent = colunas[j].value;
                linhaP[i].appendChild(td1);
                contColuns++;
            }
        }

        // Criar linhas
        for(k=0; k < linhas.length; k++) {
            if(linhas[k].value != "") {
                const tr = document.createElement("tr");
                tr.align = "center";
                const td2 = document.createElement("td");
                td2.classList.add("celulaGrade", "turnos");
                td2.textContent = linhas[k].value;
                tr.appendChild(td2);
                tables[i].appendChild(tr);

                
                // Criar células
                for(l=0; l < contColuns; l++) {
                    const td = document.createElement("td");

                    // Gerador de id para as células
                    const listDias = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
                    var idCelula = listDias[i] + "_C" + (l+1) + "L" + (k+1);

                    td.id = idCelula;
                    td.classList.add("celulaGrade");
                    tr.appendChild(td);
                }
            }
        }
    }

    // Remove as opções dos drops da etapa 2
    LT.forEach((listTurma) => {
        listTurma.innerHTML = '';  // Limpa todas as <li> existentes
    });

    // ETAPA 2 - Adicionar turma no dropdown
    for(var iOpt=0; iOpt < LT.length; iOpt++) {
        for(iOptC=0; iOptC < colunas.length; iOptC++) {
            if(colunas[iOptC].value != "") {
                var Ctext = colunas[iOptC].value;
        
                var quant = "optionTurmaProf-" + iOpt;
                var liOpt = document.createElement("li");
                liOpt.classList.add("turma", quant);

                var span1Opt = document.createElement("span");
                span1Opt.classList.add("checkbox");

                var clasOpt = "nomeSpanTurma-" + iOpt;
                var span2Opt = document.createElement("span");
                span2Opt.classList.add("turma-text", clasOpt);

                var textTOpt = document.createTextNode(Ctext);

                span2Opt.appendChild(textTOpt);
                liOpt.appendChild(span1Opt);
                liOpt.appendChild(span2Opt);
                LT[iOpt].appendChild(liOpt);
            }
        }
    }
}

// ETAPA 2
function btnProntoPasso2() {
    /*RESET*/
    var bloco = document.getElementsByClassName("bloco");
    for(var i = bloco.length - 1; i >= 0; i--) {bloco[i].remove()}

    /*BLOCOS*/
    const list = document.getElementById("listBlocos");
    var prof = document.querySelectorAll(".P");
    var nome = document.querySelectorAll(".nomeProf");
    var materia = document.querySelectorAll(".materiaProf");


    for(var i=0; i < prof.length; i++) {
        var nomeText = nome[i].value;
        var materiaText = materia[i].value;

        if(nomeText != "") {
            var li = document.createElement("li");
            li.classList = "bloco";

            var div1 = document.createElement("div");
            div1.classList = "grade_disponibilidade";

            var h4 = document.createElement("h4");
            h4.classList = "nomeBloco";
            var apelido = document.createTextNode(nomeText + " - " + materiaText);
            h4.appendChild(apelido);

            var div2 = document.createElement("div");
            div2.classList = "GD subGrade_disponibilidade scroll";

            var table = document.createElement("table");
            table.classList = "disponibilidade";

            var tr = document.createElement("tr");
            tr.classList = "listDisponibilidade";
            tr.align = "center";

            var td1 = document.createElement("td");

            var td2 = document.createElement("td");
            var input1 = document.createElement("input");
            input1.type = "button";
            input1.value = "DOM";
            input1.classList = "btnDesmarcado btnMarcado";
            td2.appendChild(input1);

            var td3 = document.createElement("td");
            var input2 = document.createElement("input");
            input2.type = "button";
            input2.value = "SEG";
            input2.classList = "btnDesmarcado btnMarcado";
            td3.appendChild(input2);

            var td4 = document.createElement("td");
            var input3 = document.createElement("input");
            input3.type = "button";
            input3.value = "TER";
            input3.classList = "btnDesmarcado btnMarcado";
            td4.appendChild(input3);

            var td5 = document.createElement("td");
            var input4 = document.createElement("input");
            input4.type = "button";
            input4.value = "QUA";
            input4.classList = "btnDesmarcado btnMarcado";
            td5.appendChild(input4);

            var td6 = document.createElement("td");
            var input5 = document.createElement("input");
            input5.type = "button";
            input5.value = "QUI";
            input5.classList = "btnDesmarcado btnMarcado";
            td6.appendChild(input5);

            var td7 = document.createElement("td");
            var input6 = document.createElement("input");
            input6.type = "button";
            input6.value = "SEX";
            input6.classList = "btnDesmarcado btnMarcado";
            td7.appendChild(input6);

            var td8 = document.createElement("td");
            var input7 = document.createElement("input");
            input7.type = "button";
            input7.value = "SAB";
            input7.classList = "btnDesmarcado btnMarcado";
            td8.appendChild(input7);

            var h5 = document.createElement("h5");
            h5.classList = "titulos_passos";
            var h5Text = document.createTextNode("DISPONIBILIDADE");
            h5.appendChild(h5Text);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);
            table.appendChild(tr);
            div2.appendChild(table);
            div1.appendChild(h4);
            div1.appendChild(div2);
            li.appendChild(div1);
            li.appendChild(h5);
            list.appendChild(li);
        }
    }


    /*LINHAS*/
    var table = document.querySelectorAll(".disponibilidade");
    var horarios = document.querySelectorAll(".H");

    for(var i=0; i < table.length; i++) {
        for(var j=0; j < horarios.length; j++) {
            var horarioText = horarios[j].value;

            if(horarioText != "") {
                var tr = document.createElement("tr");
                tr.classList = "listDisponibilidade listDisponibilidadeSegments";
                tr.align = "center";

                var td1 = document.createElement("td");
                var td1Text = document.createTextNode(horarioText);
                td1.appendChild(td1Text);

                var td2 = document.createElement("td");
                var input1 = document.createElement("input");
                input1.type = "checkbox";
                input1.classList = "DomB" + i;
                td2.appendChild(input1);

                var td3 = document.createElement("td");
                var input2 = document.createElement("input");
                input2.type = "checkbox";
                input2.classList = "SegB" + i;
                td3.appendChild(input2);

                var td4 = document.createElement("td");
                var input3 = document.createElement("input");
                input3.type = "checkbox";
                input3.classList = "TerB" + i;
                td4.appendChild(input3);

                var td5 = document.createElement("td");
                var input4 = document.createElement("input");
                input4.type = "checkbox";
                input4.classList = "QuaB" + i;
                td5.appendChild(input4);

                var td6 = document.createElement("td");
                var input5 = document.createElement("input");
                input5.type = "checkbox";
                input5.classList = "QuiB" + i;
                td6.appendChild(input5);

                var td7 = document.createElement("td");
                var input6 = document.createElement("input");
                input6.type = "checkbox";
                input6.classList = "SexB" + i;
                td7.appendChild(input6);

                var td8 = document.createElement("td");
                var input7 = document.createElement("input");
                input7.type = "checkbox";
                input7.classList = "SabB" + i;
                td8.appendChild(input7);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                table[i].appendChild(tr);
            }
        }
    }
}

// ETAPA 3
function btnProntoPasso3() {
    /*RESET*/
    var listQuantidadeAulas_li = document.getElementsByClassName("listQuantidadeAulas_li");
    for(var i = listQuantidadeAulas_li.length - 1; i >= 0; i--) {listQuantidadeAulas_li[i].remove()}

    const list = document.getElementById("listQuantidadeAulas");
    var prof = document.querySelectorAll(".P");
    var nome = document.querySelectorAll(".nomeProf");
    var materia = document.querySelectorAll(".materiaProf");

    for(var i=0; i < prof.length; i++) {
        var nomeText = nome[i].value;

        if(nomeText != "") {
            var li1 = document.createElement("li");
            li1.classList = "listQuantidadeAulas_li";

            var div = document.createElement("div");
            div.classList = "gradeQuantidadeAulas";

            var h4 = document.createElement("h4");
            h4.classList = "titulos_passos";
            var h4Text = document.createTextNode("- - - - - - - - AULAS - - - - - - - -");
            h4.appendChild(h4Text);

            var ul = document.createElement("ul");
            ul.classList = "listGradeQuantidadeAulas scroll";

            var quant = document.querySelectorAll(".turma.optionTurmaProf-" + i);

            for(var j=0; j < quant.length; j++) {
                var marcador = quant[j].className;
                var span = document.querySelectorAll(".turma-text.nomeSpanTurma-" + i);
                
                if(marcador.indexOf('checked QuantTurma-' + i) != -1) {
                    var li2 = document.createElement("li");
                    li2.classList = "itemTurma";

                    var h6 = document.createElement("h6");
                    h6.classList = "titulos_passos";
                    var spanText = document.createTextNode(span[j].textContent);
                    h6.appendChild(spanText);

                    var input = document.createElement("input");
                    input.type = "text";
                    input.placeholder = "0";

                    li2.appendChild(h6);
                    li2.appendChild(input);
                    ul.appendChild(li2);
                }
            }

            var apelido = nome[i].value + " - " + materia[i].value;
            var h5 = document.createElement("h5");
            h5.classList = "titulos_passos";
            var h5Text = document.createTextNode(apelido);
            h5.appendChild(h5Text);

            div.appendChild(h4);
            div.appendChild(ul);
            div.appendChild(h5);
            li1.appendChild(div);
            list.appendChild(li1);
        }
    }
}
