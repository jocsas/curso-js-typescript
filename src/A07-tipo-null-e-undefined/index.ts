let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x !== 'number') return null;
  return x * x;
}

const square = squareOf(2);
const square2 = squareOf('2');

if (square === null) {
  console.log('Conta invalida', square * 2);
} else {
  console.log(square * 100);
}
