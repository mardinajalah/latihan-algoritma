export const solution = (n: number): number => {
  if (n < 1) return 0;

  let sum: number = 0

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }

  return sum
};

export const narcissistic = (value: number): boolean => {
  const strValue = value.toString()
  const length = strValue.length
  let sum = 0
  for (let i = 0; i < length; i++) {
    sum += parseInt(strValue[i]) ** length
  }

  return sum === value
}