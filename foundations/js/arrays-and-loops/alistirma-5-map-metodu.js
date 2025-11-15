// ============================================
// ALIŞTIRMA 5: map() Metodu
// ============================================
// map: Her elemanı DÖNÜŞTÜRÜP YENİ DİZİ oluşturur
// Syntax: let yeniDizi = arr.map((item, index, array) => { return yeniDeger })

console.log("=== ALIŞTIRMA 5 BAŞLADI ===\n");

// ====================================
// ÖNEMLİ: forEach vs map FARKI
// ====================================
// forEach → Yan etki için kullanılır (console.log, değişken değiştirme vb.)
//           Geriye bir şey DÖNDÜRMEZ
//
// map     → Dönüştürme için kullanılır
//           YENİ BİR DİZİ DÖNDÜRÜR
//           Orijinal diziyi DEĞİŞTİRMEZ

// ====================================
// BÖLÜM 1: map() Temelleri
// ====================================

// SORU 1: Basit dönüştürme
// Her sayıyı 2 ile çarp ve yeni dizi oluştur
let sayilar = [1, 2, 3, 4, 5];
// KODUNU BURAYA YAZ
let ikiKati = sayilar.map((sayi) => sayi * 2);

console.log("Soru 1 - Orijinal:", sayilar);
console.log("Soru 1 - 2 katı:", ikiKati);
console.log("Beklenen: [2, 4, 6, 8, 10]");
console.log("Orijinal değişmemeli: [1, 2, 3, 4, 5]\n");

// SORU 2: String dönüştürme
// Her meyvenin uzunluğunu içeren yeni dizi oluştur
let meyveler = ["elma", "muz", "çilek", "üzüm"];
// KODUNU BURAYA YAZ
let uzunluklar = meyveler.map((meyve) => meyve.length);
console.log("Soru 2 - Meyveler:", meyveler);
console.log("Soru 2 - Uzunluklar:", uzunluklar);
console.log("Beklenen: [4, 3, 5, 4]\n");

// SORU 3: Büyük harfe çevirme
// Her ismi BÜYÜK HARFLE yaz
let isimler = ["ali", "veli", "ayşe", "fatma"];
// KODUNU BURAYA YAZ
let buyukIsimler = isimler.map((isim) => isim.toUpperCase());
console.log("Soru 3 - Orijinal:", isimler);
console.log("Soru 3 - Büyük harf:", buyukIsimler);
console.log("Beklenen: ['ALI', 'VELI', 'AYŞE', 'FATMA']\n");

// SORU 4: Matematiksel işlem
// Her sayının karesini al
let numbers = [2, 3, 4, 5];
// KODUNU BURAYA YAZ
let kareler = numbers.map((number) => number * number);
console.log("Soru 4 - Kareler:", kareler);
console.log("Beklenen: [4, 9, 16, 25]\n");

// ====================================
// BÖLÜM 2: Obje Dizileriyle map()
// ====================================

// SORU 5: Objeden tek özellik çıkarma
// Sadece kullanıcı isimlerinden oluşan dizi oluştur
let users = [
  { name: "Ali", age: 25 },
  { name: "Veli", age: 30 },
  { name: "Ayşe", age: 22 },
];
// KODUNU BURAYA YAZ
let sadecIsimler = users.map((user) => user.name);
console.log("Soru 5 - Sadece isimler:", sadecIsimler);
console.log("Beklenen: ['Ali', 'Veli', 'Ayşe']\n");

// SORU 6: Obje dönüştürme
// Her ürüne %20 KDV ekle (price * 1.2)
let products = [
  { name: "Klavye", price: 100 },
  { name: "Mouse", price: 50 },
  { name: "Monitör", price: 500 },
];
// KODUNU BURAYA YAZ
let kdvliUrunler = products.map((product) => ({
  name: product.name,
  price: product.price * 1.2,
}));
console.log("Soru 6 - KDV'li ürünler:", kdvliUrunler);
console.log("Beklenen: [{name: 'Klavye', price: 120}, ...]");
console.log("Orijinal products değişmemeli!\n");

// SORU 7: Yeni özellik ekleme
// Her öğrenciye "status" özelliği ekle (notu >= 50 ise "Geçti", değilse "Kaldı")
let students = [
  { name: "Mehmet", grade: 85 },
  { name: "Zeynep", grade: 45 },
  { name: "Can", grade: 60 },
];
// KODUNU BURAYA YAZ
let ogrencilerDurum = students.map((student) => {
  return { ...student, status: student.grade >= 50 ? "Geçti" : "Kaldı" };
});
// map ile { ...student, status: grade >= 50 ? "Geçti" : "Kaldı" }
console.log("Soru 7 - Öğrenci durumları:", ogrencilerDurum);
console.log("Beklenen: Her objede status özelliği olmalı\n");

// ====================================
// BÖLÜM 3: map() ile Index Kullanımı
// ====================================

// SORU 8: Index ile sıra numarası ekleme
// Her renge sıra numarası ekle: "1. kırmızı"
let renkler = ["kırmızı", "mavi", "yeşil"];
// KODUNU BURAYA YAZ
let numaraliRenkler = renkler.map((renk, index) => `${index + 1}. ${renk}`);
// map((renk, index) => `${index + 1}. ${renk}`)
console.log("Soru 8 - Numaralı renkler:", numaraliRenkler);
console.log("Beklenen: ['1. kırmızı', '2. mavi', '3. yeşil']\n");

// ====================================
// BÖLÜM 4: forEach vs map Karşılaştırması
// ====================================

// SORU 9: forEach ile (YANLIŞ YÖNTEM!)
// Bu yöntem çalışır ama map daha temiz!
let dizi1 = [10, 20, 30];
let sonuc1 = [];
dizi1.forEach((sayi) => {
  sonuc1.push(sayi + 5);
});
console.log("Soru 9 - forEach ile:", sonuc1);

// SORU 10: map ile (DOĞRU YÖNTEM!)
// Aynı işlemi map ile yap (daha temiz!)
let dizi2 = [10, 20, 30];
// KODUNU BURAYA YAZ
let sonuc2 = dizi2.map((eleman) => eleman + 5);
// map kullan, her sayıya 5 ekle
console.log("Soru 10 - map ile:", sonuc2);
console.log("Beklenen: [15, 25, 35]");
console.log("Gördün mü? map çok daha temiz! 🎯\n");

// ====================================
// CHALLENGE SORULAR
// ====================================

// CHALLENGE 1: Fiyat listesi oluşturma
// Her ürün için "Klavye: 100 TL" formatında string oluştur
let urunler = [
  { name: "Klavye", price: 100 },
  { name: "Mouse", price: 50 },
  { name: "Monitör", price: 500 },
];
// KODUNU BURAYA YAZ
let fiyatListesi = urunler.map((urun) => {
  return `${urun.name}: ${urun.price} TL`;
});
// map ile template string kullan
console.log("Challenge 1 - Fiyat listesi:");
fiyatListesi.forEach((item) => console.log(item));
console.log("Beklenen format: 'Klavye: 100 TL'\n");

// CHALLENGE 2: Yaş hesaplama
// Doğum yılından yaşı hesapla (2024 - birthYear)
let people = [
  { name: "Ali", birthYear: 1990 },
  { name: "Veli", birthYear: 1985 },
  { name: "Ayşe", birthYear: 2000 },
];
// KODUNU BURAYA YAZ
let peopleWithAge = people.map((person) => {
  return {
    ...person,
    age: 2025 - person.birthYear,
  };
});
// map ile { ...person, age: 2024 - birthYear }
console.log("Challenge 2 - Yaşlar eklendi:", peopleWithAge);
console.log("Beklenen: Her objede age özelliği olmalı\n");

// CHALLENGE 3: Not harfi hesaplama
// Sayısal notu harf notuna çevir:
// 90-100: AA, 80-89: BA, 70-79: BB, 60-69: CB, 50-59: CC, 0-49: FF
let notlar = [95, 87, 72, 65, 45, 100];
// KODUNU BURAYA YAZ
let harfNotlari = notlar.map((not) => {
  if (not >= 90) {
    return "AA";
  } else if (not >= 80) {
    return "BA";
  } else if (not >= 70) {
    return "BB";
  } else if (not >= 60) {
    return "CB";
  } else if (not >= 50) {
    return "CC";
  } else {
    return "FF";
  }
});
// map ile if...else veya ternary kullan
console.log("Challenge 3 - Harf notları:", harfNotlari);
console.log("Beklenen: ['AA', 'BA', 'BB', 'CB', 'FF', 'AA']\n");

// CHALLENGE 4: İç içe map (Advanced!)
// Her öğrencinin notlarını 10 ile çarp
let ogrenciler = [
  { name: "Ali", grades: [8, 9, 7] },
  { name: "Veli", grades: [6, 7, 8] },
];
// KODUNU BURAYA YAZ
let ogrencilerYuzluk = ogrenciler.map((ogrenci) => {
  return {
    ...ogrenci,
    grades: ogrenci.grades.map((grade) => grade * 10),
  };
});
// dış map ile { ...ogr, grades: grades.map(g => g * 10) }
console.log("Challenge 4 - Yüzlük sistem:", ogrencilerYuzluk);
console.log("Beklenen: Her notun 10 katı\n");

// CHALLENGE 5: Zincirleme map (Chaining!)
// 1. Her sayıyı 2 ile çarp
// 2. Sonucu 10 ile topla
// 3. Karesini al
let nums = [1, 2, 3];
// KODUNU BURAYA YAZ
let sonuc = nums
  .map((num) => num * 2)
  .map((num) => num + 10)
  .map((num) => num * num);
// map(...).map(...).map(...)
console.log("Challenge 5 - Zincirleme:", sonuc);
console.log("Beklenen: [(1*2+10)² = 144, (2*2+10)² = 196, (3*2+10)² = 256]");
console.log("Sonuç: [144, 196, 256]\n");

console.log("\n=== ALIŞTIRMA 5 BİTTİ ===");
console.log("Çalıştırmak için: node alistirma-5-map-metodu.js");
console.log("\n📚 ÖĞRENDİKLERİN:");
console.log("✓ map() YENİ DİZİ DÖNDÜRÜR!");
console.log("✓ forEach() sadece işlem yapar, map() dönüştürür");
console.log("✓ map() orijinal diziyi DEĞİŞTİRMEZ");
console.log("✓ Objelerle de kullanılabilir");
console.log("✓ map().map() şeklinde ZİNCİRLENEBİLİR");
console.log("✓ Dönüştürme işlemleri için HER ZAMAN map() kullan!");
