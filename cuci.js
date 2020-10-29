/*
Caul akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang 
akan dicuci oleh Caul sebanyak 20 dan akan dimasukkan ke mesin cuci. 
Tombol power mesin cuci akan menyala jika semua pakaian Caul sudah 
masuk ke mesin cuci.Buatlah algoritma & pseudocode perulangan dari 
permasalahan Foxie!

*/

let jumlahBaju = 21;

for ( let i = 1; i <= jumlahBaju; i++){

  if ( i >= 0 && i < 20) {
    tampilkan = `baju ke ${i} , mesin belum dapat diaktifkan`
  } else if ( i = 20 ) {
    tampilkan = `baju ke ${i} , MESIN CUCI DAPAT DIAKTIFKAN!`
  } else if ( i > 20 && i < 100) {
    tampilkan = `baju ke ${i} harus antri ya`
  }
  console.log(tampilkan);
}  

