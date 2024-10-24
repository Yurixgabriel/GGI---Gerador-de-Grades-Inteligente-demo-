// ETAPA 1
function btnProntoPasso1() {
    // Criar linhas e colunas da grade
    const linhas = document.querySelectorAll(".H");
    const linhaP = document.querySelectorAll(".linhaPrincipal")
    const colunas = document.querySelectorAll(".T");
    const tables = document.querySelectorAll(".tbody");

    for(i=0; i < tables.length; i++) {
        var contColuns = 0;

        // Criar colunas
        for(j=0; j < colunas.length; j++) {
            if(colunas[j].value != "") {
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
}

// ETAPA 2
