class LatihanAlgoritma {
  private nilai: number;
  private array: number[];

  constructor(nilai: number, array: number[]) {
    this.nilai = nilai;
    this.array = array;
  }

  public ganjilGenap(): string {
    return this.nilai % 2 === 0 ? 'Genap' : 'Ganjil';
  }

  public fizzBuzz(): string {
    if (this.nilai % 3 === 0 && this.nilai % 5 === 0) {
      return 'FizzBuzz';
    } else if (this.nilai % 3 === 0) {
      return 'Fizz';
    } else if (this.nilai % 5 === 0) {
      return 'Buzz';
    } else {
      return this.nilai.toString();
    }
  }

  public cariAngkaTerbesar(): number | undefined {
    if( this.array.length === 0) {
      return undefined;
    }

    let terbesar = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] > terbesar) {
        terbesar = this.array[i];
      }
    }
    
    return terbesar;
  }
}

export { LatihanAlgoritma };