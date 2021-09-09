const PDFDocument = require('pdfkit');
const fs = require('fs');

const extravioNorman03 = {
  nome: 'André',
  cpfCnpj: '32922454860',
  nacionalidade: 'Brasileira',
  naturalidade: 'São José do Rio Preto',
  uf_nascimento: 'SP',
  endereco: 'Rua Benedita Nunes de Campos',
  uf_endereco: 'SP',
  numero: '700',
  complemento: 'apt 600',
  cidade: 'Sao Jose do Rio Preto',
  bairro: 'Parque Novo Horizonte',
  cep: '12239008',
  rgcnh: '412483623',
  tel: '01239669595',
  cel: '01239669595',
  email: 'contatovercosa@gmail.com',
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Extravio Norman03 - ${extravioNorman03.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_extravioNorman03.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS 
  .fontSize(11)
  .text(extravioNorman03.nome, 110, 214)
  .text(extravioNorman03.cpfCnpj, 140, 231)
  .text(extravioNorman03.nacionalidade, 400, 231)
  .fontSize(09)
  .text(extravioNorman03.naturalidade, 165, 250)
  .text(extravioNorman03.uf_nascimento, 260, 250)
  .fontSize(11)
  .text(extravioNorman03.cidade, 130, 426)
  .text(extravioNorman03.endereco, 135, 372)
  .text(extravioNorman03.uf_endereco, 355, 426)
  .text(extravioNorman03.numero, 138, 399)
  .text(extravioNorman03.complemento, 270, 399)
  .text(extravioNorman03.bairro, 370, 399)
  .text(extravioNorman03.tel, 400, 249)
  .text(extravioNorman03.cel, 135, 265)
  .text(extravioNorman03.email, 310, 265)
  .text(extravioNorman03.cep, 420, 426)

  


doc.end()

const pdf_extravioNorman03 = doc
module.exports = pdf_extravioNorman03