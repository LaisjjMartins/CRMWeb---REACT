import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export function ClientsPDF(clientes){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reporTitle =[{
        text: 'Clientes',
        fontSize: 18,
        bold: true,
        margin: [50, 20, 0, 45] //left, top, right, bottom
    }];

    const dados = clientes.map ((cliente) => {
        return  [
            {text: cliente.id, fontSize: 10, margin: [5, 2, 5, 2]},
            {text: cliente.nome, fontSize: 10, margin: [5, 2, 5, 2]},
            {text: cliente.email, fontSize: 10, margin: [5, 2, 5, 2]},
            {text: cliente.fone, fontSize: 10, margin: [5, 2, 5, 2]},
        ]
    })

    const details =[{
        table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*'], //ajusta automatico
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 12, margin: [5, 0, 5, 0], bold: true},
                        {text: 'Nome', style: 'tableHeader', fontSize: 12, margin: [5, 0, 5, 0], bold: true},
                        {text: 'E-mail', style: 'tableHeader', fontSize: 12, margin: [5, 0, 5, 0], bold: true},
                        {text: 'Telefone', style: 'tableHeader', fontSize: 12, margin: [5, 0, 5, 0], bold: true},
                    ],
                   ...dados
                    
                    

                ]
        },
        layout: 'headerLineOnly'
    }];

    function rodape (currentPage, pageCount) {
        return (
         [
            {
                text: currentPage + '/' +  pageCount,
                alignment: 'right',
                fontSize: 10,
                margin: [0, 10, 20, 0]   
            }
        ]
        )
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reporTitle],
        content: [details],
        footer: rodape

    }
    
    pdfMake.createPdf(docDefinitions).open();
}