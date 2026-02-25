import { LatihanAlgoritma } from "./latihan1/index";

// start ganjil genap
// const jawaban1 = new LatihanAlgoritma(4);
// const jawaban2 = new LatihanAlgoritma(7);

// const hasilLatihan1 = jawaban1.ganjilGenap();
// const hasilLatihan2 = jawaban2.ganjilGenap();

// console.log(`Nilai ${jawaban1.nilai} adalah ${hasilLatihan1}`);
// console.log(`Nilai ${jawaban2.nilai} adalah ${hasilLatihan2}`);
// end ganjil genap

// start fizz buzz
// const jawaban3 = new LatihanAlgoritma(3);
// const jawaban4 = new LatihanAlgoritma(5);
// const jawaban5 = new LatihanAlgoritma(15);
// const jawaban6 = new LatihanAlgoritma(7);

// const hasilLatihan3 = jawaban3.fizzBuzz();
// const hasilLatihan4 = jawaban4.fizzBuzz();
// const hasilLatihan5 = jawaban5.fizzBuzz();
// const hasilLatihan6 = jawaban6.fizzBuzz();

// console.log(`Nilai ${jawaban3.nilai} adalah ${hasilLatihan3}`);
// console.log(`Nilai ${jawaban4.nilai} adalah ${hasilLatihan4}`);
// console.log(`Nilai ${jawaban5.nilai} adalah ${hasilLatihan5}`);
// console.log(`Nilai ${jawaban6.nilai} adalah ${hasilLatihan6}`);
// end fizz buzz

// start cari angka terbesar
// const jawaban7 = new LatihanAlgoritma(0, [10, 5, 7, 2, 8]);

// const hasilLatihan7 = jawaban7.cariAngkaTerbesar();

// if(hasilLatihan7 !== undefined) {
//   console.log(`Angka terbesar adalah ${hasilLatihan7}`);
// } else {
//   console.log('Array kosong, tidak ada angka terbesar.');
// }
// end cari angka terbesar

// start cari angka terbesar kedua
const jawaban8 = new LatihanAlgoritma(0, [4, 9, 7, 1]);

const hasilLatihan8 = jawaban8.cariAngkaTerbesarKedua();

if(hasilLatihan8 !== undefined) {
  console.log(`Angka terbesar kedua adalah ${hasilLatihan8.terbesarKedua}`);
  console.log(`Angka terbesar adalah ${hasilLatihan8.terbesar}`);
  
} else {
  console.log('Array harus memiliki setidaknya dua elemen untuk mencari angka terbesar kedua.');
}
// end cari angka terbesar kedua