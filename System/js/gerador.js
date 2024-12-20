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
                td1.classList.add("celulaGrade", "celulaTurmaGrade");
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
        
                var quant = "optionTurmaProf-" + (iOpt + 1);
                var liOpt = document.createElement("li");
                liOpt.classList.add("turma", quant);

                var span1Opt = document.createElement("span");
                span1Opt.classList.add("checkbox");

                var clasOpt = "nomeSpanTurma-" + (iOpt+1);
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
    /* RESET */
    var listQuantidadeAulas_li = document.getElementsByClassName("listQuantidadeAulas_li");
    for (var i = listQuantidadeAulas_li.length - 1; i >= 0; i--) {
        listQuantidadeAulas_li[i].remove();
    }

    const list = document.getElementById("listQuantidadeAulas");
    var prof = document.querySelectorAll(".P"); // Seleciona os professores
    var nome = document.querySelectorAll(".nomeProf"); // Seleciona os nomes dos professores
    var materia = document.querySelectorAll(".materiaProf"); // Seleciona as matérias dos professores

    for(i=0; i < prof.length; i++) {
        var nomeText = nome[i].value; // Obtém o nome do professor

        if(nomeText !== "") {
            var li1 = document.createElement("li");
            li1.classList.add("listQuantidadeAulas_li");

            var div = document.createElement("div");
            div.classList.add("gradeQuantidadeAulas");

            var h4 = document.createElement("h4");
            h4.classList.add("titulos_passos");
            var h4Text = document.createTextNode("- - - - - - - - AULAS - - - - - - - -");
            h4.appendChild(h4Text);

            var ul = document.createElement("ul");
            ul.classList.add("listGradeQuantidadeAulas", "scroll");

            var quant = document.querySelectorAll(".turma.optionTurmaProf-" + (i + 1));

            for (var j = 0; j < quant.length; j++) {
                var marcador = quant[j].className;
                var span = document.querySelectorAll(".turma-text.nomeSpanTurma-" + (i + 1));

                // Verifica se a turma foi marcada como 'checked' e pertence ao professor atual
                if (marcador.indexOf('checked') !== -1 && marcador.indexOf('QuantTurma-' + (i + 1)) !== -1) {
                    var li2 = document.createElement("li");
                    li2.classList = "itemTurma";

                    var h6 = document.createElement("h6");
                    h6.classList = "titulos_passos";
                    var spanText = document.createTextNode(span[j].textContent); // Obtém o nome da turma
                    h6.appendChild(spanText);

                    var input = document.createElement("input");
                    input.type = "text";
                    input.placeholder = "0"; // Espaço para inserir a quantidade de aulas

                    li2.appendChild(h6);
                    li2.appendChild(input);
                    ul.appendChild(li2);
                }
            }

            // Adiciona a identificação do professor e matéria
            var apelido = nome[i].value + " - " + materia[i].value;
            var h5 = document.createElement("h5");
            h5.classList = "titulos_passos";
            var h5Text = document.createTextNode(apelido);
            h5.appendChild(h5Text);

            // Adiciona todos os elementos criados à lista principal
            div.appendChild(h4);
            div.appendChild(ul);
            div.appendChild(h5);
            li1.appendChild(div);
            list.appendChild(li1);
        }
    }
}

// ETAPA 4
function btnProntoPasso4() {
    const alertModal = document.getElementById("alertModal");

    // Limpa o content da janela de alerta
    const alertContent = document.getElementById("alertModalContent");
    alertContent.innerHTML = "";

    // Verifica e compara as informações
    const prof = document.querySelectorAll(".nomeProf")
    const materiaProf = document.querySelectorAll(".materiaProf");
    const arrayDisp = ['DomB', 'SegB', 'TerB', 'QuaB', 'QuiB', 'SexB', 'SabB']
    
    // Verifica se a quantidade de aulas que o professor deve dar é equivalente a disponibilidade que ele possui
    for(iPV=0; iPV < prof.length; iPV++) {
        if(prof[iPV].value !== "") {
            let quantDisp = 0;
            let quantAulas = 0;

            for(a=0; a < arrayDisp.length; a++) {
                let classDisp = "."+arrayDisp[a]+iPV;
                let celulaDisp = document.querySelectorAll(classDisp);
                
                for(b=0; b < celulaDisp.length; b++) {
                    if(celulaDisp[b].checked) {
                        quantDisp++;
                    }
                }
            }

            const listAulas = document.querySelectorAll(".listGradeQuantidadeAulas");
            let listAulasB = listAulas[iPV];
            let itensAulas = listAulasB.querySelectorAll(".itemTurma input");

            for (let c = 0; c < itensAulas.length; c++) {
                quantAulas = quantAulas + parseInt(itensAulas[c].value);
            }

            var comparacao = quantAulas - quantDisp;
            let nome = prof[iPV].value;
            let materia = materiaProf[iPV].value;

            if(quantAulas > quantDisp) {
                var span = document.createElement("span");
                span.classList.add("boxAlert");
                var p = document.createElement("p");
                p.textContent = "O(A) " + nome + " de " + materia + " tem " + comparacao + " aulas a mais do que dias disponivéis para lecionar."
                span.appendChild(p);
                alertContent.appendChild(span);
                alertModal.classList.add('mostrar');
            }
        }
    }

    const turmas = document.querySelectorAll(".T");
    const listAulasF = document.querySelectorAll(".listGradeQuantidadeAulas");
    var turnos = document.querySelectorAll(".turnos");

    // Verifica a quantidade total de aulas para a mesma turma
    // Passa por cada input com as turmas
    for(let a=0; a < turmas.length; a++) {
        if(turmas[a].value !== "") {
            let contadorAulasTotais = 0;

            // Passa por cada professor e soma a quantidade total de aulas para aquela turma
            for(let b=0; b < prof.length; b++) {
                if(prof[b].value !== "") {
                    let listAulasBF = listAulasF[b];
                    let itensAulasNomeF = listAulasBF.querySelectorAll(".itemTurma .titulos_passos");
                    let itensAulasQuantF = listAulasBF.querySelectorAll(".itemTurma input");

                    // Passa por cada item turma
                    for(let c=0; c < itensAulasNomeF.length; c++) {
                        if(itensAulasNomeF[c].textContent === turmas[a].value) {
                            contadorAulasTotais += parseInt(itensAulasQuantF[c].value);
                        }
                    }
                }
            }

            // Cálcula a quantidade total de espaços para cada turma
            let contadorEspaçosTurma = turnos.length;
            if(contadorAulasTotais > contadorEspaçosTurma) {
                let comparacao = contadorAulasTotais - contadorEspaçosTurma;
                let span = document.createElement("span");
                span.classList.add("boxAlert");
                let p = document.createElement("p");
                p.textContent = "A turma " + turmas[a].value + " tem " + comparacao + " a mais do que espaços para montar."
                span.appendChild(p);
                alertContent.appendChild(span);
                alertModal.classList.add('mostrar');
            }
        }
    }

    // Modal de alerta
    if(alertModal) {
        alertModal.addEventListener('click', (e) => {
            if(e.target.id == "alertModal" || e.target.className == 'fechar') {
                alertModal.classList.remove('mostrar');
            }
        });
    }
}

// Contar as vezes tentadas
var contadorVezesTentadas = 0;
// Função delay para evitar execução rápida
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// MONTAGEM
async function geradorGrade() {
    contadorVezesTentadas++;
    // Abre o modal de carregamento
    const modalMontagem = document.getElementById("modalMontagem");
    modalMontagem.classList.add('mostrar');
    
    // Montagem
    var grades = document.querySelectorAll(".grade");
    var prof = document.querySelectorAll(".P");
    var profNome = document.querySelectorAll(".P .nomeProf");
    var profMateria = document.querySelectorAll(".P .materiaProf");

    // Função para embaralhar um array
    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Limpar células
    cleanCelula();
    function cleanCelula() {
        // Adicionando delay para limpar células
        setTimeout(() => {
            for (let i = 0; i < grades.length; i++) {
                var abrevDiaClean = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
                var colunasClean = grades[i].querySelectorAll(".celulaTurmaGrade");
                var linhasClean = grades[i].querySelectorAll(".turnos");

                for (let j = 0; j < colunasClean.length; j++) {
                    for (let k = 0; k < linhasClean.length; k++) {
                        var idCelulaClean = abrevDiaClean[i] + "_C" + (j + 1) + "L" + (k + 1);
                        var celulaClean = document.getElementById(idCelulaClean);

                        if (celulaClean) {
                            celulaClean.innerHTML = "";
                        }
                    }
                }
            }
        }, 300); // Delay de 300ms para limpar células
    }

    // Passa por cada grade
    for (var i = 0; i < grades.length; i++) {
        var abrevDia = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
        var colunas = grades[i].querySelectorAll(".celulaTurmaGrade");
        var linhas = grades[i].querySelectorAll(".turnos");

        // Obtenha um array de índices de professores disponíveis
        var indicesProfs = [];
        for (let a = 0; a < prof.length; a++) {
            if (profNome[a].value !== "") {
                indicesProfs.push(a); // Adiciona o índice do professor ao array
            }
        }
        // Embaralha os índices dos professores
        indicesProfs = embaralhar(indicesProfs);

        // Passa pelos índices de professores embaralhados
        for (let l = 0; l < indicesProfs.length; l++) {

            // Passa por cada coluna da grade em questão
            for (var j = 0; j < colunas.length; j++) {

                // Passa por cada linha da grade em questão
                for (var k = 0; k < linhas.length; k++) {
                    var idCelula = abrevDia[i] + "_C" + (j + 1) + "L" + (k + 1);
                    var celula = document.getElementById(idCelula);

                    // Verifica se a célula tá vazia
                    if (celula && celula.textContent === "") {
                        var quantProfApareceu = 0;

                        // Passa por cada coluna da grade em questão
                        for(m=0; m < colunas.length; m++) {
                            var idCelulaComp = abrevDia[i] + "_C" + (m + 1) + "L" + (k + 1);
                            var celulaComp = document.getElementById(idCelulaComp);

                            const tb = document.createElement("tb");
                            const nomeCompleto = profNome[indicesProfs[l]].value.split(" ");
                            const primeiroNome = nomeCompleto[0];
                            const segundoNomeAbreviado = nomeCompleto[1] ? nomeCompleto[1].substring(0, 1) + "." : "";
                            const p1 = document.createElement("p");
                            const p2 = document.createElement("p");
                            p2.textContent = profMateria[indicesProfs[l]].value;
                            p1.textContent = primeiroNome + " " + segundoNomeAbreviado;
                            tb.appendChild(p1); 
                            tb.appendChild(p2);
                        
                            if (tb.innerHTML.trim() === celulaComp.innerHTML.trim()) {
                                quantProfApareceu++;
                                await delay(200);
                            }                            
                        }

                        // Verifica se o professor já foi adicionado naquela linha(horário)
                        if(quantProfApareceu === 0) {

                            // Verifica se a celula ainda está vazia
                            if (celula && celula.textContent === "") {

                                // Verifica se o professor da aula pra turma
                                var indice = indicesProfs[l]+1;
                                var listBoxTurmas = document.querySelectorAll(".QuantTurma-" + indice);

                                // Passa por todas as boxes de turmas do professor em questão
                                for(m=0; m < listBoxTurmas.length; m++) {
                                    var boxTurmaTextOpt = listBoxTurmas[m].querySelector(".nomeSpanTurma-"+(indicesProfs[l]+1))

                                    // Verifica se o nome da box(turma) é igual ao nome da coluna(turma) sendo preenchida
                                    if(colunas[j].textContent === boxTurmaTextOpt.textContent) {
                                        await delay(200);

                                        // Verifica a disponibilidade do professor em questão
                                        const arrayDisp = ['DomB', 'SegB', 'TerB', 'QuaB', 'QuiB', 'SexB', 'SabB'];
                                        var classDisp = document.querySelectorAll("."+arrayDisp[i]+indicesProfs[l]);
                                        
                                        // Verifica se o professor tem disponibilidade no horário sendo preenchido
                                        if(classDisp[k].checked) {

                                            // Verifica a quantidade de aulas que o professor em questão tem que lecionar
                                            const listAulas = document.querySelectorAll(".listGradeQuantidadeAulas");
                                            let listAulasB = listAulas[indicesProfs[l]];
                                            let itensAulasNome = listAulasB.querySelectorAll(".itemTurma .titulos_passos");
                                            let itensAulasQuant = listAulasB.querySelectorAll(".itemTurma input");
                                            
                                            // Passa por cada item da box de quantidade de aulas do professor em questão
                                            for(IAN=0; IAN < itensAulasNome.length; IAN++) {

                                                // Verifica se o nome do IAN (item de aulas) atual possue o mesmo nome da coluna atual
                                                if(itensAulasNome[IAN].textContent === colunas[j].textContent) {
                                                    await delay(200);

                                                    var quantProfApareceuVerif = 0;                                                    
                                                    // Verifica quantas vezes o professor já apareceu ao todo
                                                    // Passa por cada grade
                                                    for(ii=0; ii < grades.length; ii++) {
                                                        // Passa por cada linha em questão
                                                        for(kk=0; kk < linhas.length; kk++) {
                                                            var idCelulaVerif = abrevDia[ii] + "_C" + (j + 1) + "L" + (kk + 1);
                                                            var celulaVerif = document.getElementById(idCelulaVerif);

                                                            const tbVerif = document.createElement("tb");
                                                            const nomeCompletoVerif = profNome[indicesProfs[l]].value.split(" ");
                                                            const primeiroNomeVerif = nomeCompletoVerif[0];
                                                            const segundoNomeAbreviadoVerif = nomeCompletoVerif[1] ? nomeCompletoVerif[1].substring(0, 1) + "." : "";
                                                            const p1Verif = document.createElement("p");
                                                            const p2Verif = document.createElement("p");
                                                            p2Verif.textContent = profMateria[indicesProfs[l]].value;
                                                            p1Verif.textContent = primeiroNomeVerif + " " + segundoNomeAbreviadoVerif;
                                                            tbVerif.appendChild(p1Verif);
                                                            tbVerif.appendChild(p2Verif);
                                                        
                                                            // Compara todas as células existentes com o professor em questão
                                                            if (tbVerif.innerHTML.trim() === celulaVerif.innerHTML.trim()) {
                                                                quantProfApareceuVerif++;
                                                            }
                                                        }
                                                    }

                                                    // Compara o valor final das vezes que o professor apareceu com a quantidade de aulas que ele tem que lecionar
                                                    if(quantProfApareceuVerif < parseInt(itensAulasQuant[IAN].value)) {

                                                        // Gerenciador de equilibrio
                                                        // Passa pela disponibilidade, vendo os dias que o professor tem para lecionar
                                                        let contadorDiarioDisp = [];
                                                        for(divI=0; divI < grades.length; divI++) {
                                                            let classDispDiv = document.querySelectorAll("."+arrayDisp[divI]+indicesProfs[l]);
                                                            let A = 0;

                                                            for(CD=0; CD < classDisp.length; CD++) {
                                                                if(classDispDiv[CD].checked) {
                                                                    A = 1;
                                                                    }
                                                            }

                                                            if(A !== 0) {
                                                                contadorDiarioDisp[contadorDiarioDisp.length] = divI;
                                                            }
                                                        }

                                                        // Divide a quantidade de aulas que o professor deve aplicar na turma, pelos dias que tem disponivel
                                                        let quantDiarioAulas = Math.ceil(parseInt(itensAulasQuant[IAN].value)/parseInt(contadorDiarioDisp.length));
                                                        let quantProfApareceuDiv = 0;

                                                        // Se a divisão for igual a 1, ele arredonda pra 2
                                                        if(quantDiarioAulas === 1) {
                                                            quantDiarioAulas = 2;
                                                        }

                                                        for(kkk=0; kkk < linhas.length; kkk++) {
                                                            var idCelulaDiv = abrevDia[i] + "_C" + (j + 1) + "L" + (kkk + 1);
                                                            var celulaDiv = document.getElementById(idCelulaDiv);

                                                            const tbDiv = document.createElement("tb");
                                                            const nomeCompletoDiv = profNome[indicesProfs[l]].value.split(" ");
                                                            const primeiroNomeDiv = nomeCompletoDiv[0];
                                                            const segundoNomeAbreviadoDiv = nomeCompletoDiv[1] ? nomeCompletoDiv[1].substring(0, 1) + "." : "";
                                                            const p1Div = document.createElement("p");
                                                            const p2Div = document.createElement("p");
                                                            p2Div.textContent = profMateria[indicesProfs[l]].value;
                                                            p1Div.textContent = primeiroNomeDiv + " " + segundoNomeAbreviadoDiv;
                                                            tbDiv.appendChild(p1Div);
                                                            tbDiv.appendChild(p2Div);
                                                        
                                                            // Compara todas as células existentes com o professor em questão
                                                            if (tbDiv.innerHTML.trim() === celulaDiv.innerHTML.trim()) {
                                                                quantProfApareceuDiv++;
                                                            }
                                                        }

                                                        if(quantProfApareceuDiv < quantDiarioAulas) {
                                                            const nomeCompleto = profNome[indicesProfs[l]].value.split(" ");
                                                            const primeiroNome = nomeCompleto[0];
                                                            const segundoNomeAbreviado = nomeCompleto[1] ? nomeCompleto[1].substring(0, 1) + "." : "";
                                                            const p1 = document.createElement("p");
                                                            const p2 = document.createElement("p");
                                                            p2.textContent = profMateria[indicesProfs[l]].value;
                                                            p1.textContent = primeiroNome + " " + segundoNomeAbreviado;
                                                            celula.appendChild(p1); 
                                                            celula.appendChild(p2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            await delay(1000);
        }
    }

    // Verificação final
    // Passa por cada professor
    setTimeout(revisaoFinal, 600);
    function revisaoFinal() {
        let controlFim = 0; // Inicializa como 0 para indicar que a função começou corretamente

        // Função para definir controlFim e parar a execução
        function definirErro() {
            controlFim = 1;
            modalMontagemControl(controlFim); // Chama o modal com erro
            return; // Encerra a execução da função `geradorGrade`
        }

        // Obtenha um array de índices de professores disponíveis
        let indicesProfs = [];
        for (let a = 0; a < prof.length; a++) {
            if (profNome[a].value !== "") {
                indicesProfs.push(a); // Adiciona o índice do professor ao array
            }
        }

        for(p=0; p < indicesProfs.length; p++) {
            // Verifica a quantidade de aulas que o professor em questão tem que lecionar
            const listAulasF = document.querySelectorAll(".listGradeQuantidadeAulas");
            let listAulasBF = listAulasF[p];
            let itensAulasNomeF = listAulasBF.querySelectorAll(".itemTurma .titulos_passos");
            let itensAulasQuantF = listAulasBF.querySelectorAll(".itemTurma input");
    
            for(c=0; c < colunas.length; c++) {
                // Passa por cada item da box de quantidade de aulas do professor em questão
                for(i=0; i < itensAulasNomeF.length; i++) {
    
                    // Verifica se o nome do i(item de aulas) atual possue o mesmo nome da coluna atual
                    if(itensAulasNomeF[i].textContent === colunas[c].textContent) {
                        let quantProfApareceuF = 0;
    
                        // Verifica quantas vezes o professor já apareceu ao todo
                        // Passa por cada grade
                        for(ii=0; ii < grades.length; ii++) {
                            // Passa por cada linha em questão
                            for(kk=0; kk < linhas.length; kk++) {
                                let idCelulaF = abrevDia[ii] + "_C" + (c + 1) + "L" + (kk + 1);
                                let celulaF = document.getElementById(idCelulaF);
    
                                const tbF = document.createElement("tb");
                                const nomeCompletoF = profNome[p].value.split(" ");
                                const primeiroNomeF = nomeCompletoF[0];
                                const segundoNomeAbreviadoF = nomeCompletoF[1] ? nomeCompletoF[1].substring(0, 1) + "." : "";
                                const p1F = document.createElement("p");
                                const p2F = document.createElement("p");
                                p2F.textContent = profMateria[p].value;
                                p1F.textContent = primeiroNomeF + " " + segundoNomeAbreviadoF;
                                tbF.appendChild(p1F);
                                tbF.appendChild(p2F);
                            
                                // Compara todas as células existentes com o professor em questão
                                if (tbF.innerHTML.trim() === celulaF.innerHTML.trim()) {
                                    quantProfApareceuF++;
                                }
                            }
                        }
    
                        // Compara o valor final das vezes que o professor apareceu com a quantidade de aulas que ele tem que lecionar
                        if(quantProfApareceuF !== parseInt(itensAulasQuantF[i].value)) {
                            definirErro();
                        }
                    }
                }
            }
        }

        // Se não houve erro, finaliza com sucesso
        modalMontagemControl(controlFim);
        return;
    }
}

function modalMontagemControl(controlFim) {
    const modalMontagem = document.getElementById("modalMontagem");
    const modalAlert = document.getElementById("alertModal");
    const modalAlertContent = document.getElementById("alertModalContent");

    if (controlFim === 1) {
        if(contadorVezesTentadas <= 100) {
            setTimeout(geradorGrade, 600);
        } else {
            modalMontagem.classList.remove('mostrar');
        
            // Modal alerta
            modalAlertContent.innerHTML = "";
    
            // Elementos da janela modal
            let spanMsg = document.createElement("span");
            let pMsg = document.createElement("p");
            pMsg.textContent = "Foi tentado o máximo de vezes possível. Falha na criação!";
            spanMsg.classList.add("boxAlert");
            spanMsg.appendChild(pMsg);
            modalAlertContent.appendChild(spanMsg);
    
            if(modalAlert) {
                modalAlert.classList.add('mostrar');
        
                modalAlert.addEventListener('click', (e) => {
                    if(e.target.id == modalAlert || e.target.className == 'fechar') {
                        modalAlert.classList.remove('mostrar');
                        contadorVezesTentadas = 0;
                    }
                });
            }
        }
    } else {
        modalMontagem.classList.remove('mostrar');
        
        // Modal alerta
        modalAlertContent.innerHTML = "";

        // Elementos da janela modal
        let pMsg = document.createElement("p");
        pMsg.textContent = "A grade foi criada com sucesso!"
        pMsg.classList.add("msgGradeSucesso");
        modalAlertContent.appendChild(pMsg);

        if(modalAlert) {
            modalAlert.classList.add('mostrar');
    
            modalAlert.addEventListener('click', (e) => {
                if(e.target.id == modalAlert || e.target.className == 'fechar') {
                    modalAlert.classList.remove('mostrar');
                }
            });
        }
    }
}