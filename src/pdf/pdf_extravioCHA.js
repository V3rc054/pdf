const PDFDocument = require('pdfkit');
const fs = require('fs');

const extravioCHA = {
    nome: 'André Luiz Verçosa',
    endereco: 'Rua Benedita Nunes de Campos',
    cidade: 'Sao Jose do Rio Preto',
    bairro: 'Parque Novo Horizonte',
    cep: '12239008',
    rgcnh: '412483623',
    o_emissor: 'SSP',
    dateEmissao: '10/10/2005',
    cpfCnpj: '32922454860',
    tel: '01239669595',
    cel: '01239669595',
    email: 'contatovercosa@gmail.com',
    nf: 41236958545365,
    dateVenda: '10/05/2006',
    localVenda: 'São José dos Campos',
    vendedor: 'Maria da Silva',
    cpf_cnpjVendedor: '27018085000191',
    nomeEmbarcacao: 'Trovao do Mar',
    incricao: 236985225541252,
    arqBruta: '052053',
    tipo: 'Veleiro',
    arqLiquida: '080560',
    atividade: 'Recreacao',
    comprimento: 250,
    tripulantes: 02,
    anoConstrucao: '10/06/2001',
    boca: '12345',
    pontal: '012456',
    passageiros: '000000',
    numCasco: '000000',
    matCasco: '000000',
    contorno: '000000',
    oneMotorMarca: '000000',
    onePotencia: '0000000',
    oneNumSerie: '000000000',
    twoMotorMarca: '000000',
    twoPotencia: '0000000',
    twoNumSerie: '000000000',
    threeMotorMarca: '000000',
    threePotencia: '0000000',
    threeNumSerie: '000000000'
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Extravio CHA - ${extravioCHA.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_extravioCHA.png', 0, 15,
    {
        width: 595.28,
        height: 841.49
    })

doc
    //DADOS PESSOAIS DO REQUERENTE
    .fontSize(11)
    .text(extravioCHA.nome, 100, 119)
    .text(extravioCHA.endereco, 350, 161)
    .fontSize(08)
    .text(extravioCHA.cidade, 445, 186,{lineBreak: false})
    .fontSize(11)
    .text(extravioCHA.bairro, 209, 183)
    .text(extravioCHA.cep, 330, 183)
    .text(extravioCHA.rgcnh, 150, 140)
    .text(extravioCHA.o_emissor, 275, 140)
    .text(extravioCHA.dateEmissao, 430, 139)
    .text(extravioCHA.cpfCnpj, 80, 161)
    .text(extravioCHA.tel, 260, 287)
    .text(extravioCHA.cha, 435, 287)
    .text(extravioCHA.dateEmissaoCha, 95, 305)
    .text(extravioCHA.categoria, 95, 305)
  

    


doc.end()

const pdf_extravioCHA = doc
module.exports = pdf_extravioCHA
