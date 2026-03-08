export function countBits(n: number): number {
  const biner = n.toString(2);

  let cont = 0;

  for (let i = 0; i < biner.length; i++) {
    if (biner[i] === "1") {
      cont++;
    }
  }

  return cont;
}