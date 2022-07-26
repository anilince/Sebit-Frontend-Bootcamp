function hello() {
    console.log("Hello");
}

hello();
hello();
hello();

// Fonksiyonlara parametre gönderme

const canboz = function(ad = "Can", soyad = "Boz") {
    console.log(`Ad Soyad ${ad} ${soyad}`);
}

canboz('Kemal','Doğukan');
canboz();

// Eski tipten arrowa hafif geçiş
const kareAlani = function(kenar) {
    return kenar*kenar
}

let sonuc = kareAlani(6);
console.log(sonuc);

// Arrow ilk versiyonu
// const kareAlanim = (kenar) => {
//     return kenar**2;
// }

// Tek parametreyse
// const kareAlanim = kenar => {
//     return kenar**2;
// }

const kareAlanim = kenar => kenar**2;
console.log(kareAlanim(7));


// const donus = () => {
//     return "Burak"
// }

const stringDonus = () => "Burak";
console.log(stringDonus());


// Uygulama
// Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

const urunSatis = function(urunler, vergi) {
    let toplam = 0;
    for(let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi
    }
    return toplam;
}

console.log(urunSatis([10, 20, 30],[0.25]));


const urunSatisArrow = (urunler, vergi) => {
    let toplam = 0;
    for(let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi
    }
    return toplam;
}

console.log(urunSatis([10, 20, 30],[0.25]));
