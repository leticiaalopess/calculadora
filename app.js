const prompt = require('prompt-sync')({sigint:true})

console.log('Calculadora')

    do {
        var primeiroNumero = parseFloat(prompt('Digite o primeiro numero? '))
        var segundoNumero = parseFloat(prompt('Qual o segundo numero? '))

            if (isNaN(primeiroNumero) && isNaN(segundoNumero)){
            console.log('Numero invalido!')
            } else {
                var operacao = prompt('Escolha uma operação: +, -, *, /, %: ')
            break;
            }
    } while (true) {       

switch (operacao){
    case '+':
        console.log((primeiroNumero + segundoNumero))
        break;
    case '-':
        console.log((primeiroNumero - segundoNumero))
        break;
    case '*':
        console.log((primeiroNumero * segundoNumero))
        break;
    case '/':
        console.log((primeiroNumero / segundoNumero))
        break;
    case '%':
        console.log(((primeiroNumero * segundoNumero) / 100))
        break;
    }
}
