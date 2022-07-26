// Uygulama 

// Şifre uzunluğunun 12 den büyükse güçlü şifre
//  8 ile 12 arasındaysa yeterli şifre 8 den daha küçükse yetersiz olduğunu console a bastırın

const yeniSifre = "dasdadasdasda321"

if(yeniSifre.length > 12) {
    console.log("Şifre güçlü");
} else if (yeniSifre.length >= 8 && yeniSifre.length <= 12) {
    console.log("Şifre yeterli");
} else {
    console.log("Şifreyi yeniden giriniz");
}