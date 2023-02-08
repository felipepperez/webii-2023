const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite um valor: ',(valor1)=>{
    teclado.question('Digite outro valor: ',(valor2)=>{
        let soma = parseInt(valor1) + parseInt(valor2);
        console.log("A soma é: %s",soma);
        teclado.close();
    })
})