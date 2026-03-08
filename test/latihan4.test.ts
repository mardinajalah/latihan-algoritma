import { solution } from "../src/latihan4"

describe('latihan 4', () => {
  it('hitung kelipatan 3 dan 5', () => {
    const hasil = solution(10)
    expect(hasil).toBe(23)
  })
})