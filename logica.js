const input = require("prompt-sync")();

let num1 = Number(input("Ingrese numero 1: "))
let num2 = Number(input("Ingrese numero 2: "))
let num3 = Number(input("Ingrese numero 3: "))


let lista = [num1, num2, num3]

if (num1 == num2 && num2 == num3){
    console.log("Son iguales.")
}

let mayor = Math.max(...lista);
let menor = Math.min(...lista);
let medio = 0;
for (let num of lista){
    if (num != mayor && num != menor){
        medio = num

    }
}

let lista_n = [mayor, medio, menor]
let lista_rn = [menor, medio, mayor]

console.log(lista_n, lista_rn)