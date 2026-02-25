export const twoSum = (target: number, array: number[]): [number, number] | undefined => {
  const map = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (map.has(complement)) {
      return [map.get(complement) as number, i];
    }

    map.set(array[i], i);
  }

  return undefined;
};

export const  hitungJumlahGenap = (array: number[]): number => {
  let jumlahGenap = 0;

  for (const num of array) {
    if (num % 2 === 0) {
      jumlahGenap++;
    }
  }

  return jumlahGenap;
}