const PDFDocument = require('pdfkit');
const fs = require('fs');

const declaracaoRes = {
  nome: 'André',
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
doc.pipe(fs.createWriteStream(`declaracaoRes - ${declaracaoRes.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_declaracaoRes.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS DO REQUERENTE
  .fontSize(11)
  .text(declaracaoRes.nome, 195, 214)
  .text(declaracaoRes.endereco, 120, 231)
  .text(declaracaoRes.cidade, 100, 250)
  .text(declaracaoRes.bairro, 280, 250)
  .text(declaracaoRes.cep, 430, 250)
  .text(declaracaoRes.rgcnh, 125, 269)
  .text(declaracaoRes.o_emissor, 325, 269)
  .text(declaracaoRes.dateEmissao, 490, 268, { lineBreak: false })
  .text(declaracaoRes.cpfCnpj, 110, 287)
  .text(declaracaoRes.tel, 260, 287)
  .text(declaracaoRes.cel, 435, 287)
  .text(declaracaoRes.email, 95, 305)
  

  //DADOS DA VENDA
  .fontSize(09)
  .text(declaracaoRes.nf, 130, 515)
  .text(declaracaoRes.dateVenda, 287, 515)
  .text(declaracaoRes.localVenda, 390, 515)
  .text(declaracaoRes.vendedor, 130, 530)
  .text(declaracaoRes.cpf_cnpjVendedor, 452, 530)

  //DADOS DA EMBARCAÇÃO
  .text(declaracaoRes.nomeEmbarcacao, 160, 560)
  .text(declaracaoRes.incricao, 369, 560)
  .text(declaracaoRes.arqBruta, 515, 560, { lineBreak: false })
  .text(declaracaoRes.tipo, 85, 575)
  .text(declaracaoRes.arqLiquida, 515, 575, { lineBreak: false })
  .text(declaracaoRes.atividade, 320, 575)
  .text(declaracaoRes.comprimento, 125, 590)
  .text(declaracaoRes.tripulantes, 290, 590)
  .text(declaracaoRes.anoConstrucao, 475, 590, { lineBreak: false })
  .text(declaracaoRes.boca, 145, 605)
  .text(declaracaoRes.pontal, 145, 620)
  .text(declaracaoRes.passageiros, 290, 605)
  .text(declaracaoRes.numCasco, 440, 605)
  .text(declaracaoRes.matCasco, 270, 620)
  .text(declaracaoRes.contorno, 475, 620)
  .text(declaracaoRes.oneMotorMarca, 145, 650)
  .text(declaracaoRes.onePotencia, 315, 650)
  .text(declaracaoRes.oneNumSerie, 430, 650)
  .text(declaracaoRes.twoMotorMarca, 145, 665)
  .text(declaracaoRes.twoPotencia, 315, 665)
  .text(declaracaoRes.twoNumSerie, 430, 665)
  .text(declaracaoRes.threeMotorMarca, 145, 680)
  .text(declaracaoRes.threePotencia, 315, 680)
  .text(declaracaoRes.threeNumSerie, 430, 680)


doc.end()

const pdf_declaracaoRes = doc
module.exports = pdf_declaracaoRes
