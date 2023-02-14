class Carro {
    modelo;
    marca;
    ano;
    revisoes;

    constructor(carro) {
        this.modelo = carro.modelo;
        this.marca = carro.marca;
        this.ano = carro.ano;
        this.revisoes = carro.revisoes;
    }

    info() {
        console.log(
            'Carro: %s %s, %s - Quantidade de revisões: %s',
            this.marca,
            this.modelo,
            this.ano,
            this.revisoes.length,
        );
    }
}

module.exports = Carro;
