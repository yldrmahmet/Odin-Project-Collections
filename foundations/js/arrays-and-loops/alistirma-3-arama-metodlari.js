// ============================================
// ALIŞTIRMA 3: Arama Metodları
// ============================================

console.log("=== ALIŞTIRMA 3 BAŞLADI ===\n");

// SORU 1: indexOf() kullanımı
// sayilar dizisinde 50'nin indexini bul
let sayilar = [10, 20, 30, 40, 50, 60];
// KODUNU BURAYA YAZ
let index = sayilar.indexOf(50); // Bu satırı düzenle

console.log("Soru 1 Cevap:", index);
console.log("Beklenen: 4\n");

// SORU 2: indexOf() - bulunamayan eleman
// renkler dizisinde "siyah" var mı? (indexOf kullan)
let renkler = ["kırmızı", "mavi", "yeşil"];
// KODUNU BURAYA YAZ
let siyahIndex = renkler.indexOf("siyah"); // Bu satırı düzenle

console.log("Soru 2 Cevap:", siyahIndex);
console.log("Beklenen: -1 (bulunamadı)\n");

// SORU 3: lastIndexOf() kullanımı
// harfler dizisinde "a" harfinin SON konumunu bul
let harfler = ["a", "b", "c", "a", "d", "a"];
// KODUNU BURAYA YAZ
let sonA = harfler.lastIndexOf("a"); // Bu satırı düzenle

console.log("Soru 3 Cevap:", sonA);
console.log("Beklenen: 5\n");

// SORU 4: includes() kullanımı
// meyveler dizisinde "elma" var mı?
let meyveler = ["armut", "elma", "muz"];
// KODUNU BURAYA YAZ
let elmaVarMi = meyveler.includes("elma"); // Bu satırı düzenle

console.log("Soru 4 Cevap:", elmaVarMi);
console.log("Beklenen: true\n");

// SORU 5: includes() vs indexOf() - NaN durumu
// dizi içinde NaN var mı? (includes kullan)
let dizi = [1, 2, NaN, 4];
// KODUNU BURAYA YAZ
let nanVarMi = dizi.includes(NaN); // Bu satırı düzenle

console.log("Soru 5 Cevap:", nanVarMi);
console.log("Beklenen: true");
console.log("Not: indexOf(NaN) -1 döner ama includes(NaN) true döner!\n");

// SORU 6: find() ile obje bulma
// users dizisinde id'si 3 olan kullanıcıyı bul
let users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Veli", age: 30 },
  { id: 3, name: "Ayşe", age: 22 },
];
// KODUNU BURAYA YAZ
let user = users.find((item) => item.id === 3); // Bu satırı düzenle

console.log("Soru 6 Cevap:", user);
console.log("Beklenen: {id: 3, name: 'Ayşe', age: 22}\n");

// SORU 7: find() - bulunamayan
// products dizisinde fiyatı 1000'den büyük ürün bul
let products = [
  { name: "Klavye", price: 200 },
  { name: "Mouse", price: 100 },
  { name: "Monitör", price: 800 },
];
// KODUNU BURAYA YAZ
let pahaliUrun = products.find((item) => item.price > 1000); // Bu satırı düzenle

console.log("Soru 7 Cevap:", pahaliUrun);
console.log("Beklenen: undefined (bulunamadı)\n");

// SORU 8: findIndex() kullanımı
// students dizisinde notu 90'dan büyük olan İLK öğrencinin indexini bul
let students = [
  { name: "Mehmet", grade: 85 },
  { name: "Zeynep", grade: 95 },
  { name: "Can", grade: 92 },
];
// KODUNU BURAYA YAZ
let basariliIndex = students.findIndex((student) => student.grade > 90); // Bu satırı düzenle

console.log("Soru 8 Cevap:", basariliIndex);
console.log("Beklenen: 1\n");

// SORU 9: filter() - basit kullanım
// numbers dizisinden 15'ten büyük sayıları filtrele
let numbers = [5, 10, 15, 20, 25, 30];
// KODUNU BURAYA YAZ
let buyukler = numbers.filter((number) => number > 15); // Bu satırı düzenle

console.log("Soru 9 Cevap:", buyukler);
console.log("Beklenen: [20, 25, 30]\n");

// SORU 10: filter() - çift sayılar
// notlar dizisinden çift sayıları filtrele
let notlar = [45, 50, 67, 80, 92, 33];
// KODUNU BURAYA YAZ
let ciftNotlar = notlar.filter((not) => not % 2 === 0); // Bu satırı düzenle

console.log("Soru 10 Cevap:", ciftNotlar);
console.log("Beklenen: [50, 80, 92]\n");

// SORU 11: filter() - obje dizisi
// employees dizisinden yaşı 25'ten küçük çalışanları filtrele
let employees = [
  { name: "Ahmet", age: 30 },
  { name: "Fatma", age: 22 },
  { name: "Hasan", age: 28 },
  { name: "Elif", age: 20 },
];
// KODUNU BURAYA YAZ
let gencler = employees.filter((e) => e.age < 25); // Bu satırı düzenle

console.log("Soru 11 Cevap:", gencler);
console.log("Beklenen: [{name: 'Fatma', age: 22}, {name: 'Elif', age: 20}]\n");

// CHALLENGE 1: find() ve filter() farkı
// books dizisinde:
// 1. Fiyatı 50'den pahalı İLK kitabı bul (find kullan)
// 2. Fiyatı 50'den pahalı TÜM kitapları bul (filter kullan)
let books = [
  { title: "Kitap A", price: 30 },
  { title: "Kitap B", price: 60 },
  { title: "Kitap C", price: 80 },
  { title: "Kitap D", price: 40 },
];
// KODUNU BURAYA YAZ
let ilkPahali = books.find((book) => book.price > 50); // Bu satırı düzenle
let tumPahalilar = books.filter((book) => book.price > 50); // Bu satırı düzenle

console.log("Challenge 1 - İlk pahalı:", ilkPahali);
console.log("Challenge 1 - Tüm pahalılar:", tumPahalilar);
console.log("Beklenen ilk: {title: 'Kitap B', price: 60}");
console.log(
  "Beklenen tüm: [{title: 'Kitap B', price: 60}, {title: 'Kitap C', price: 80}]\n"
);

// CHALLENGE 2: Çoklu filtre
// cars dizisinden:
// 1. Yılı 2015'ten yeni VE fiyatı 100000'den ucuz arabaları filtrele
let cars = [
  { model: "Araba A", year: 2018, price: 80000 },
  { model: "Araba B", year: 2012, price: 50000 },
  { model: "Araba C", year: 2020, price: 150000 },
  { model: "Araba D", year: 2017, price: 95000 },
];
// KODUNU BURAYA YAZ
let uygunArabalar = cars.filter((car) => car.year > 2015 && car.price < 100000); // Bu satırı düzenle

console.log("Challenge 2 Cevap:", uygunArabalar);
console.log(
  "Beklenen: [{model: 'Araba A', year: 2018, price: 80000}, {model: 'Araba D', year: 2017, price: 95000}]\n"
);

console.log("\n=== ALIŞTIRMA 3 BİTTİ ===");
console.log("Çalıştırmak için: node alistirma-3-arama-metodlari.js");
