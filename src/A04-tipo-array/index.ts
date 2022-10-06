// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3, 4);
const concatenacao = concatenaString('1', '1a');
const uppercase = toUpperCase('a', 'b');

console.log(result);
console.log(concatenacao);
console.log(uppercase);
