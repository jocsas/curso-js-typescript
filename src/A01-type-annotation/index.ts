/*eslint-disable*/

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'jocsa';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays

let arrayDeNumeros: Array<Number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3]
let arrayDeStrings: Array<string> = ['teste']
let arrayDeStrings2: string[] = ['teste']

//Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Jocsã',
};

// Funções
function soma(x: number, y: number){
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
