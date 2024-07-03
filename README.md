# Calculadora
Esse programa tem exatamente a mesma função que uma calculadora, onde ele irá executar os calculos de acordo com o operador escolhido pelo usuario.

## Estrutura e Codigo

### Modulos e Variaveis 
-`prompt-sync`: modulo foi importado para pegar as entradas do usuario.
```
const prompt = require('prompt-sync')({sigint:true})
```
- `primeiroNumero`: variavel utilizada para armazenar o primeiro numero dado pelo usuario.
- `segundoNumero`: variavel utilizada para armazenar o segundo numero a ser utilizado no calculo. 

### Funções principais
1. `do while`: foi utilizado para obter os numeros e a operação. Esse loop irá rodar até que as entradas sejam validas. 
2. `if ... else`: o `isNaN`e segundo numero, vai verificar se o numero dado pelo usuario é valido ou não, se for, ele pede o operador e continua a operação, se não ele imprime a mensagem `Numero invalido!`, e continua o loop.
```
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

```
