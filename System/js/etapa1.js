/*DIAS DE AULA*/
function gradeDias(button, idDia, dia) {
    // Obter a div onde as grades são criadas
    const grade = document.getElementById("grade");

    // Verificar se a div correspondente ao dia já existe
    const existingDiv = document.getElementById(idDia);

    if (existingDiv) {
        // Se a div já existir, remove-a
        grade.removeChild(existingDiv);
        button.classList.remove("pressionado"); // Remover estilo do botão
    } else {
        // Se a div não existir, cria a nova div com o dia
        const div1 = document.createElement("div");
        div1.id = idDia;
        div1.classList.add("grade");

        const div2 = document.createElement("div");
        div2.classList.add("gradeContent");

        const div3 = document.createElement("div");
        div3.classList.add("titulo_grade");

        const h4 = document.createElement("h4");
        h4.textContent = "--- " + dia + " ---";

        const table = document.createElement("table");
        table.classList.add("tabela", "scroll");
        table.cellSpacing = '6px';

        const tbody = document.createElement("tbody");
        tbody.classList.add("tbody");

        const tr = document.createElement("tr");
        tr.classList.add("linhaPrincipal");
        tr.align = "center";

        const td = document.createElement("td");
        td.classList.add("logo918Table", "celulaGrade");
        td.textContent = "~ 918 ~";

        tr.appendChild(td);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        div3.appendChild(h4);
        div2.appendChild(div3);
        div2.appendChild(table);
        div1.appendChild(div2);
        grade.appendChild(div1);

        button.classList.add("pressionado"); // Adicionar estilo ao botão pressionado
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