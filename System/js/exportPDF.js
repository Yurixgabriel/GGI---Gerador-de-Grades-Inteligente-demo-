document.getElementById('exportBtn').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'mm', 'a4'); // Modo paisagem

    // Seleciona todas as grades na div
    const grades = document.querySelectorAll(".grade");
    
    grades.forEach((grade, index) => {
      html2canvas(grade).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 297; // Largura em mm (modo paisagem A4)
        const pageHeight = 210; // Altura em mm (modo paisagem A4)
        const imgHeight = canvas.height * imgWidth / canvas.width;

        // Se for a primeira grade, adiciona diretamente, sem addPage()
        if (index === 0) {
          doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        } else {
          // Para as próximas grades, adiciona uma nova página
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        }
        
        // Salva o PDF após a última grade
        if (index === grades.length - 1) {
          doc.save("grades.pdf");
        }
      });
    });
});