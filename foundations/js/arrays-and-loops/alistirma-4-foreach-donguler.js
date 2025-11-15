// ============================================
// ALIŞTIRMA 4: forEach ve Döngüler
// ============================================
// forEach: Her eleman için bir fonksiyon çalıştırır
// Syntax: arr.forEach((item, index, array) => { ... })

console.log("=== ALIŞTIRMA 4 BAŞLADI ===\n");

// ====================================
// BÖLÜM 1: forEach Temelleri
// ====================================

// SORU 1: Basit forEach kullanımı
// Aşağıdaki dizideki her sayıyı konsola yazdır
let sayilar = [10, 20, 30, 40];
console.log("Soru 1 - Sayıları yazdır:");
// KODUNU BURAYA YAZ
// Örnek: sayilar.forEach(...
sayilar.forEach((sayi) => console.log(sayi));
console.log("\n");

// SORU 2: forEach ile index kullanımı
// Her meyveyi şu formatta yazdır: "Index 0: elma"
let meyveler = ["elma", "muz", "çilek"];
console.log("Soru 2 - Index ile yazdır:");
// KODUNU BURAYA YAZ
// İpucu: forEach((item, index) => { ... })
meyveler.forEach((meyve, index) => console.log(`Index ${index}: ${meyve}`));

console.log("\n");

// SORU 3: forEach ile toplam hesaplama
// Notların toplamını hesapla (forEach kullan)
let notlar = [80, 90, 70, 85];
let toplam = 0;
// KODUNU BURAYA YAZ
// İpucu: forEach içinde toplam += ... kullan
notlar.forEach((not) => (toplam += not));

console.log("Soru 3 - Notların toplamı:", toplam);
console.log("Beklenen: 325\n");

// SORU 4: forEach ile yeni dizi oluşturma
// renkler dizisindeki her rengi büyük harfle yeniRenkler dizisine ekle
let renkler = ["kırmızı", "mavi", "yeşil"];
let yeniRenkler = [];
// KODUNU BURAYA YAZ
// İpucu: forEach içinde yeniRenkler.push(renk.toUpperCase())
renkler.forEach((renk) => yeniRenkler.push(renk.toUpperCase()));

console.log("Soru 4 - Büyük harfli renkler:", yeniRenkler);
console.log("Beklenen: ['KIRMIZI', 'MAVİ', 'YEŞİL']\n");

// ====================================
// BÖLÜM 2: Obje Dizileriyle forEach
// ====================================

// SORU 5: Obje dizisini yazdırma
// Her kullanıcının adını konsola yazdır
let users = [
  { name: "Ali", age: 25 },
  { name: "Veli", age: 30 },
  { name: "Ayşe", age: 22 },
];
console.log("Soru 5 - Kullanıcı isimleri:");
// KODUNU BURAYA YAZ
users.forEach((user) => console.log(user.name));

console.log("\n");

// SORU 6: Obje dizisinde hesaplama
// Tüm ürünlerin toplam fiyatını hesapla
let products = [
  { name: "Klavye", price: 200 },
  { name: "Mouse", price: 100 },
  { name: "Monitör", price: 800 },
];
let toplamFiyat = 0;
// KODUNU BURAYA YAZ
products.forEach((product) => (toplamFiyat += product.price));

console.log("Soru 6 - Toplam fiyat:", toplamFiyat);
console.log("Beklenen: 1100\n");

// SORU 7: Koşullu işlem
// Yaşı 25'ten büyük olan kullanıcıların isimlerini yazdır
let kisiler = [
  { name: "Mehmet", age: 30 },
  { name: "Zeynep", age: 22 },
  { name: "Can", age: 28 },
];
console.log("Soru 7 - Yaşı 25'ten büyük olanlar:");
// KODUNU BURAYA YAZ
// İpucu: forEach içinde if (kisi.age > 25) { ... }
kisiler.forEach((kisi) => kisi.age >= 25 && console.log(kisi.name));

console.log("\n");

// ====================================
// BÖLÜM 3: for vs forEach karşılaştırması
// ====================================

// SORU 8: Klasik for döngüsü
// dizi1'deki sayıların toplamını klasik for ile hesapla
let dizi1 = [5, 10, 15, 20];
let toplam1 = 0;
// KODUNU BURAYA YAZ
// İpucu: for (let i = 0; i < dizi1.length; i++) { ... }
for (let i = 0; i < dizi1.length; i++) {
  toplam1 += dizi1[i];
}

console.log("Soru 8 - For ile toplam:", toplam1);
console.log("Beklenen: 50\n");

// SORU 9: for...of döngüsü
// dizi2'deki sayıların toplamını for...of ile hesapla
let dizi2 = [5, 10, 15, 20];
let toplam2 = 0;
// KODUNU BURAYA YAZ
// İpucu: for (let sayi of dizi2) { ... }
for (let sayi of dizi2) {
  toplam2 += sayi;
}

console.log("Soru 9 - For...of ile toplam:", toplam2);
console.log("Beklenen: 50\n");

// ====================================
// CHALLENGE SORULAR
// ====================================

// CHALLENGE 1: forEach ile çift sayıları bulma
// numbers dizisindeki çift sayıları ciftler dizisine ekle
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ciftler = [];
// KODUNU BURAYA YAZ
numbers.forEach((number) => number % 2 === 0 && ciftler.push(number));

console.log("Challenge 1 - Çift sayılar:", ciftler);
console.log("Beklenen: [2, 4, 6, 8, 10]\n");

// CHALLENGE 2: İç içe forEach
// Her öğrenci için tüm notlarını yazdır
let ogrenciler = [
  { name: "Ali", grades: [80, 90, 85] },
  { name: "Veli", grades: [70, 75, 80] },
];
console.log("Challenge 2 - Her öğrencinin notları:");
// KODUNU BURAYA YAZ
// İpucu: ogrenciler.forEach içinde grades.forEach
ogrenciler.forEach(
  (ogrenci) => (
    console.log(ogrenci.name),
    ogrenci.grades.forEach((grade) => console.log(grade))
  )
);

console.log("\n");

// CHALLENGE 3: forEach ile ortalama hesaplama
// Her öğrencinin not ortalamasını hesapla ve yazdır
let students = [
  { name: "Mehmet", grades: [100, 90, 80] },
  { name: "Zeynep", grades: [85, 95, 90] },
  { name: "Can", grades: [70, 80, 75] },
];
console.log("Challenge 3 - Not ortalamaları:");
// KODUNU BURAYA YAZ
// İpucu: grades dizisinin toplamını / grades.length yap
students.forEach((student) => {
  let toplam = 0;
  student.grades.forEach((grade) => {
    toplam += grade;
  });
  let ortalama = toplam / student.grades.length;
  console.log(`${student.name}: ${ortalama}`);
});

console.log("\n=== ALIŞTIRMA 4 BİTTİ ===");
console.log("Çalıştırmak için: node alistirma-4-foreach-donguler.js");
console.log("\n📚 ÖĞRENDİKLERİN:");
console.log("✓ forEach() her eleman için fonksiyon çalıştırır");
console.log("✓ forEach((item, index, array) => { }) şeklinde kullanılır");
console.log("✓ Klasik for döngüsünden daha okunabilir");
console.log("✓ for...of döngüsü de diziler için kullanılabilir");
console.log("✓ forEach ile yeni diziler oluşturabilirsin");
console.log("✓ Objelerle de çalışabilir");
