/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

console.log("Exercício 3: ");

function sortear_numero() {
    const numeros = [];

    while (numeros.length < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

        if (numeros.includes(numeroAleatorio)) {
            console.log("Houve dois números iguais e foi sorteado novamente! Sendo o número: ", numeroAleatorio);
        } else {
            numeros.push(numeroAleatorio);
        }
    }

    return numeros;
}

const sorteio_final = sortear_numero();
console.log("Números sorteados: " + sorteio_final.join(", "));
