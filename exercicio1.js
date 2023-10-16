/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

console.log("Exercício 1: ");
function separar(lista){
    let par = [];
    let impar = [];

    for (const elemento of lista){
        if (elemento % 2 === 0){
            par.push(elemento);
        }else{
            impar.push(elemento);
        }
    }
    return {par , impar};
    
}

const lista = [1,2,3,4,5,6,7,8,9];

let separado = separar(lista);

console.log("Lista: ", lista);
console.log("Pares: ", separado.par);
console.log("Impares: ", separado.impar);