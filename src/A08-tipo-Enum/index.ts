enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[10]);
// console.log(Cores.ROXO);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(10);
