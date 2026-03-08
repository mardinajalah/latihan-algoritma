import { countBits } from "../latihan5";

describe("Latihan 5", () => {
  it('hitung jumlah bit 1 dalam representasi biner dari sebuah angka', () => {
    expect(countBits(10)).toBe(2);
  });
});