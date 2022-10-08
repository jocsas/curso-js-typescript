let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const; //eslint-disable-line

const person = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};
// person.nome = 'Luiz1';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));


// MOdule mode
export default 1;
