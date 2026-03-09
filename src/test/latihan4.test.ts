import { solution, narcissistic } from '../latihan4/index';

describe('latihan 4', () => {
  it('kelipatan 3 dan 5', () => {
    const hasil = solution(10);
    expect(hasil).toBe(23);
  });

  it('angka narsisistik', () => {
    expect(narcissistic(7)).toEqual(true);
    expect(narcissistic(153)).toEqual(true);
    expect(narcissistic(1634)).toEqual(true);
  });
});
