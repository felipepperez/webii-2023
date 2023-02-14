let carro = {
    modelo: 'Argo',
    marca: 'Fiat',
    ano: 2018,
    revisoes: ['2018-05-10', '2018-08-25', '2019-01-15'],
    info: function () {
        console.log("Carro: %s %s, %s - Quantidade de revisões: %s", this.marca, this.modelo, this.ano, this.revisoes.length);
    }
};

let acesso = false;

module.exports = { ...carro, acesso };