const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = '1';
objetoA.chaveC = '2';
objetoA.chaveD = 1;

console.log(objetoA);
