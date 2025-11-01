// ============================================
// ALIŞTIRMA 6: sort() ve reverse()
// ============================================
// sort: Diziyi SIRALAR (orijinali DEĞİŞTİRİR!)
// reverse: Diziyi TERS ÇEVİRİR (orijinali DEĞİŞTİRİR!)

console.log("=== ALIŞTIRMA 6 BAŞLADI ===\n");

// ====================================
// ÖNEMLİ UYARI: sort() ve reverse()
// ====================================
// map(), filter(), slice() → YENİ DİZİ döndürür, orijinali DEĞİŞTİRMEZ
// sort(), reverse()         → ORİJİNAL DİZİYİ DEĞİŞTİRİR!
//
// Eğer orijinali korumak istersen:
// let kopya = [...orijinal].sort()  veya
// let kopya = orijinal.slice().sort()

// ====================================
// BÖLÜM 1: reverse() - Basit!
// ====================================

// SORU 1: Basit reverse
// sayilar dizisini ters çevir
let sayilar = [1, 2, 3, 4, 5];
console.log("Soru 1 - Önce:", sayilar);
// KODUNU BURAYA YAZ
// İpucu: sayilar.reverse()
sayilar.reverse();

console.log("Soru 1 - Sonra:", sayilar);
console.log("Beklenen: [5, 4, 3, 2, 1]");
console.log("DİKKAT: Orijinal dizi değişti!\n");

// SORU 2: Orijinali koruyarak reverse
// renkler dizisini ters çevir AMA ORİJİNALİ KORU!
let renkler = ["kırmızı", "mavi", "yeşil"];
// KODUNU BURAYA YAZ
let tersRenkler = renkler.reversse();
// [...renkler].reverse() veya renkler.slice().reverse()
console.log("Soru 2 - Orijinal:", renkler);
console.log("Soru 2 - Ters:", tersRenkler);
console.log("Beklenen orijinal: ['kırmızı', 'mavi', 'yeşil'] (DEĞİŞMEMELİ!)");
console.log("Beklenen ters: ['yeşil', 'mavi', 'kırmızı']\n");

// ====================================
// BÖLÜM 2: sort() String Sıralama
// ====================================

// SORU 3: String sıralama (alfabetik)
// İsimleri alfabetik sırala
let isimler = ["Zeynep", "Ali", "Mehmet", "Ayşe"];
console.log("Soru 3 - Önce:", isimler);
// KODUNU BURAYA YAZ
// İpucu: isimler.sort()
isimler.sort();

console.log("Soru 3 - Sonra:", isimler);
console.log("Beklenen: ['Ali', 'Ayşe', 'Mehmet', 'Zeynep'] (alfabetik)\n");

// SORU 4: String sıralama - küçük/büyük harf sorunu
// Kelimeler sıralanacak ama BÜYÜK HARF ÖNCE GELİR!
let kelimeler = ["elma", "Armut", "çilek", "Muz"];
console.log("Soru 4 - Önce:", kelimeler);
// KODUNU BURAYA YAZ
kelimeler = kelimeler.map((kelime) => kelime.toLowerCase());
kelimeler.sort();

console.log("Soru 4 - Sonra:", kelimeler);
console.log("Not: Büyük harfler küçüklerden önce gelir (ASCII sırası)");
console.log("Beklenen: ['Armut', 'Muz', 'çilek', 'elma']\n");

// ====================================
// BÖLÜM 3: sort() Sayı Sıralama - DİKKAT!
// ====================================

// SORU 5: sort() YANLIŞ kullanımı (sık yapılan hata!)
// Sayıları sıralamaya çalış - AMA YANLIŞ SONUÇ!
let numbers1 = [1, 2, 15, 10, 5];
console.log("Soru 5 - Önce:", numbers1);
// KODUNU BURAYA YAZ
numbers1.sort(); // Bu YANLIŞ sonuç verir!

console.log("Soru 5 - Sonra (YANLIŞ!):", numbers1);
console.log("PROBLEM: [1, 10, 15, 2, 5] → String gibi sıralandı!");
console.log("Çünkü sort() varsayılan olarak her şeyi STRING'e çevirir\n");

// SORU 6: sort() DOĞRU kullanımı (compare function)
// Sayıları DOĞRU şekilde sırala (küçükten büyüğe)
let numbers2 = [1, 2, 15, 10, 5];
console.log("Soru 6 - Önce:", numbers2);
// KODUNU BURAYA YAZ
// İpucu: numbers2.sort((a, b) => a - b)
numbers2.sort((a, b) => a - b);

console.log("Soru 6 - Sonra (DOĞRU!):", numbers2);
console.log("Beklenen: [1, 2, 5, 10, 15]\n");

// SORU 7: Büyükten küçüğe sıralama
// Sayıları büyükten küçüğe sırala
let numbers3 = [3, 1, 4, 1, 5, 9, 2, 6];
// KODUNU BURAYA YAZ
// İpucu: numbers3.sort((a, b) => b - a)  // b - a = büyükten küçüğe
numbers3.sort((a, b) => b - a);

console.log("Soru 7 - Büyükten küçüğe:", numbers3);
console.log("Beklenen: [9, 6, 5, 4, 3, 2, 1, 1]\n");

// ====================================
// BÖLÜM 4: sort() Nasıl Çalışır?
// ====================================

// ÖĞRETİCİ ÖRNEK:
console.log("=== sort() NASIL ÇALIŞIR? ===");
console.log("Compare function (a, b) => a - b");
console.log("• Eğer a - b < 0 (negatif) → a önce gelir");
console.log("• Eğer a - b > 0 (pozitif) → b önce gelir");
console.log("• Eğer a - b = 0 (sıfır)   → sıra değişmez\n");

console.log("Örnek: [5, 2, 8]");
console.log("5 ile 2 karşılaştır: 5 - 2 = 3 (pozitif) → 2 önce");
console.log("5 ile 8 karşılaştır: 5 - 8 = -3 (negatif) → 5 önce");
console.log("Sonuç: [2, 5, 8]\n");

// ====================================
// BÖLÜM 5: Obje Dizilerini Sıralama
// ====================================

// SORU 8: Yaşa göre sıralama
// Kullanıcıları yaşlarına göre küçükten büyüğe sırala
let users = [
  { name: "Ali", age: 30 },
  { name: "Veli", age: 22 },
  { name: "Ayşe", age: 28 },
];
// KODUNU BURAYA YAZ
// İpucu: users.sort((a, b) => a.age - b.age)
users.sort((a, b) => a.age - b.age);

console.log("Soru 8 - Yaşa göre sıralı:", users);
console.log("Beklenen: Veli(22), Ayşe(28), Ali(30)\n");

// SORU 9: İsme göre alfabetik sıralama
// Ürünleri isme göre alfabetik sırala
let products = [
  { name: "Monitör", price: 500 },
  { name: "Klavye", price: 100 },
  { name: "Mouse", price: 50 },
];
// KODUNU BURAYA YAZ
// İpucu: products.sort((a, b) => a.name.localeCompare(b.name))
// localeCompare: Türkçe karakterler için doğru sıralama
products.sort((a, b) => a.name.localeCompare(b.name));

console.log("Soru 9 - İsme göre sıralı:", products);
console.log("Beklenen: Klavye, Monitör, Mouse (alfabetik)\n");

// SORU 10: Fiyata göre sıralama (büyükten küçüğe)
// Ürünleri fiyata göre pahalıdan ucuza sırala
let items = [
  { name: "Ürün A", price: 100 },
  { name: "Ürün B", price: 500 },
  { name: "Ürün C", price: 50 },
];
// KODUNU BURAYA YAZ
// İpucu: items.sort((a, b) => b.price - a.price)
items.sort((a, b) => b.price - a.price);

console.log("Soru 10 - Fiyata göre (pahalıdan ucuza):", items);
console.log("Beklenen: Ürün B(500), Ürün A(100), Ürün C(50)\n");

// ====================================
// CHALLENGE SORULAR
// ====================================

// CHALLENGE 1: sort() ve reverse() kombinasyonu
// Sayıları küçükten büyüğe sırala, sonra ters çevir
let nums1 = [3, 1, 4, 1, 5, 9];
// KODUNU BURAYA YAZ
// İpucu: nums1.sort(...).reverse()
nums1.sort((a, b) => a - b).reverse();

console.log("Challenge 1 - Sıralı ve ters:", nums1);
console.log("Beklenen: [9, 5, 4, 3, 1, 1]\n");

// CHALLENGE 2: Türkçe karakter sıralaması
// Türkçe karakterli kelimeleri doğru sırala
let turkceKelimeler = ["şeker", "çay", "üzüm", "ığdır", "ödül"];
// KODUNU BURAYA YAZ
// İpucu: localeCompare('tr') kullan
turkceKelimeler.sort((a, b) => a.localeCompare(b));

console.log("Challenge 2 - Türkçe sıralama:", turkceKelimeler);
console.log("Beklenen: Türkçe alfabeye göre sıralı\n");

// CHALLENGE 3: Çoklu kritere göre sıralama
// Önce yaşa göre, yaşlar eşitse isme göre sırala
let people = [
  { name: "Zeynep", age: 25 },
  { name: "Ali", age: 25 },
  { name: "Mehmet", age: 30 },
  { name: "Ayşe", age: 20 },
];
// KODUNU BURAYA YAZ
// İpucu:
// if (a.age !== b.age) return a.age - b.age;
// return a.name.localeCompare(b.name);

console.log("Challenge 3 - Çoklu sıralama:", people);
console.log("Beklenen: Ayşe(20), Ali(25), Zeynep(25), Mehmet(30)");
console.log("(Önce yaş, sonra isim)\n");

// CHALLENGE 4: String uzunluğuna göre sıralama
// Kelimeleri uzunluklarına göre sırala (kısadan uzuna)
let words = ["elma", "muz", "çilek", "üzüm", "portakal"];
// KODUNU BURAYA YAZ
// İpucu: words.sort((a, b) => a.length - b.length)

console.log("Challenge 4 - Uzunluğa göre:", words);
console.log("Beklenen: muz(3), elma(4), üzüm(4), çilek(5), portakal(8)\n");

// CHALLENGE 5: Son harfe göre sıralama
// Kelimeleri SON harflerine göre alfabetik sırala
let sehirler = ["İstanbul", "Ankara", "İzmir", "Bursa"];
// KODUNU BURAYA YAZ
// İpucu: a[a.length - 1].localeCompare(b[b.length - 1])

console.log("Challenge 5 - Son harfe göre:", sehirler);
console.log("Beklenen: Ankara(a), Bursa(a), İstanbul(l), İzmir(r)\n");

// CHALLENGE 6: Karmaşık obje sıralaması
// Öğrencileri not ortalamasına göre sırala (büyükten küçüğe)
let students = [
  { name: "Ali", grades: [80, 90, 85] },
  { name: "Veli", grades: [70, 75, 80] },
  { name: "Ayşe", grades: [90, 95, 92] },
];
// KODUNU BURAYA YAZ
// İpucu:
// 1. Önce her öğrencinin ortalamasını hesapla
// 2. Ortalamalara göre sırala

console.log("Challenge 6 - Ortalamaya göre sıralı:");
students.forEach((s) => {
  let avg = s.grades.reduce((sum, g) => sum + g, 0) / s.grades.length;
  console.log(`${s.name}: ${avg.toFixed(2)}`);
});
console.log("Beklenen: Ayşe(92.33), Ali(85), Veli(75)\n");

console.log("\n=== ALIŞTIRMA 6 BİTTİ ===");
console.log("Çalıştırmak için: node alistirma-6-sort-reverse.js");
console.log("\n📚 ÖĞRENDİKLERİN:");
console.log("✓ reverse() diziyi ters çevirir");
console.log("✓ sort() ve reverse() ORİJİNAL DİZİYİ DEĞİŞTİRİR!");
console.log("✓ sort() varsayılan olarak STRING gibi sıralar");
console.log("✓ Sayıları sıralamak için: .sort((a, b) => a - b)");
console.log("✓ String sıralama için: .sort((a, b) => a.localeCompare(b))");
console.log("✓ Objeleri özelliğe göre sıralayabilirsin");
console.log("✓ Çoklu kritere göre sıralama yapabilirsin");
console.log("✓ Orijinali korumak için: [...dizi].sort() kullan!");
