// let email = "cnboz@hotmail.com";
let email = 'cnboz@hotmail.com';
console.log(email);

// Birleştirme

let ad = "Zekeriya";
let soyad = "Duranel Altın";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[0]);

// Kaç Karakter
console.log(adSoyad.length);

// String Metodlar
console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

// Kaçıncı İndexte Bulunduğu
let index = adSoyad.indexOf('a');
let indexLast = adSoyad.lastIndexOf('a');
console.log(index);
console.log(indexLast);

// Slice Kullanımı
let ilkIsim = adSoyad.slice(0,8);
console.log(ilkIsim);

// Replace Kullanımı
let yerDegistir = adSoyad.replace(" ","");
console.log(yerDegistir);

// ReplaceAll Kullanımı
let yerDegistirAll = adSoyad.replaceAll(" ","");
console.log(yerDegistirAll);