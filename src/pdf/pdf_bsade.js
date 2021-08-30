const PDFDocument = require('pdfkit');
const fs = require('fs');

const bsade = {
nome : 'André Verçosa',
   endereco : 'Rua Benedita Nunes de Campos',
   cidade : 'Sao Jose do Rio Preto',
   bairro : 'Parque Novo Horizonte',
   cep : '12239008',
   rgcnh : '412483623',
   o_emissor : 'SSP',
   dateEmissao : '10/10/2005',
   cpfCnpj : '32922454860',
   tel : '01239669595',
   cel : '01239669595',
   email : 'contatovercosa@gmail.com',
   nf : 41236958545365,
   dateVenda : '10/05/2006',
   localVenda : 'São José dos Campos',
   vendedor : 'Maria da Silva',
   cpf_cnpjVendedor : '27018085000191',
   nomeEmbarcacao : 'Trovao do Mar',
   incricao : 236985225541252,
   arqBruta : '052053',
   tipo : 'Veleiro',
   arqLiquida : '080560',
   atividade : 'Recreacao',
   comprimento : 250,
   tripulantes : 02,
   anoConstrucao  :'10/06/2001',
   boca : '12345',
   pontal : '012456'
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`BSADE - ${bsade.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_bsade.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS DO REQUERENTE
  .fontSize(11)
  .text(bsade.nome, 195, 214)
  
  .text(bsade.endereco, 120, 231)
  .text(bsade.cidade, 100, 250)
  .text(bsade.bairro, 280, 250)
  .text(bsade.cep, 430, 250)
  .text(bsade.rgcnh, 125, 269)
  .text(bsade.o_emissor, 325, 269)
  .text(bsade.dateEmissao, 490, 268, { lineBreak: false })
  .text(bsade.cpfCnpj, 110, 287)
  .text(bsade.tel, 260, 287)
  .text(bsade.cel, 435, 287)
  .text(bsade.email, 95, 305)
  .fontSize(09)

  //DADOS DA VENDA
  .text(bsade.nf, 130, 515)
  .text(bsade.dateVenda, 287, 515)
  .text(bsade.localVenda, 390, 515)
  .text(bsade.vendedor, 130, 530)
  .text(bsade.cpf_cnpjVendedor, 452, 530)

  //DADOS DA EMBARCAÇÃO
  .text(bsade.nomeEmbarcacao, 160, 560)
  .text(bsade.incricao, 369, 560)
  .text(bsade.arqBruta, 515, 560, { lineBreak: false })
  .text(bsade.tipo, 85, 575)
  .text(bsade.arqLiquida, 515, 575, { lineBreak: false })
  .text(bsade.atividade, 320, 575)
  .text(bsade.comprimento, 125, 590)
  .text(bsade.tripulantes, 290, 590)
  .text(bsade.anoConstrucao, 475, 590, {lineBreak: false})
  .text(bsade.boca, 145, 605)
  .text(bsade.pontal, 145, 620)

doc.end();

const pdf = doc
module.exports = pdf
