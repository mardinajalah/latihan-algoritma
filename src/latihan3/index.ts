const hitung = (n: number) : number => {
  if (n <= 1) return 1;
  return n * hitung(n - 1);
}

export { hitung };