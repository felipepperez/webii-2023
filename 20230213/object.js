const carro = require('./carro.js');
const carroProperties = {
    modelo: 'Argo',
    marca: 'Fiat',
    ano: 2018,
    revisoes: ['2018-05-10'],
};

const carroN = new carro(carroProperties);

carroN.info();

// const carroN = new Object();

// carroN.modelo = 'Argo';
// carroN.marca = 'Fiat';
// carroN.ano = 2018;
// carroN.revisoes = ['2018-05-10'];
// carroN.info = function () {
//     console.log(
//         'Carro: %s %s, %s - Quantidade de revisões: %s',
//         this.marca,
//         this.modelo,
//         this.ano,
//         this.revisoes?.length,
//     );
// };

// carroN.info();

// carro.modelo = 'Xpto';
// carroN.modelo = 'Xpto';

// carro['modelo'] = 'Xpto';
// carroN['modelo'] = 'Xpto';

// delete carro.revisoes;
// delete carroN.revisoes;
