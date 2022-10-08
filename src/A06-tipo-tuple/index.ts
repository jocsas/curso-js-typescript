const dadosCliente: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Luiz',
  'Miranda',
  'Santos',
];

dadosCliente[0] = 100;
dadosCliente[1] = 'Jocs';
dadosCliente.pop();
// dadosCliente[2] = 'Santos';

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly
const array: readonly string[] = ['Luiz', 'Otavio'];
const array2: ReadonlyArray<string> = ['Jocsa', 'santos'];
