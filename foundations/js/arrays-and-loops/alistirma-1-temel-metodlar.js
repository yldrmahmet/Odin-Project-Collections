// ============================================
// ALIŞTIRMA 1: Temel Array Metodları
// ============================================

console.log("=== ALIŞTIRMA 1 BAŞLADI ===\n");

// SORU 1: push() kullanımı
// Aşağıdaki dizinin sonuna "elma" ve "armut" ekle
let meyveler = ["çilek", "muz"];
// KODUNU BURAYA YAZ
meyveler.push("elma");
meyveler.push("armut");

console.log("Soru 1 Cevap:", meyveler);
console.log("Beklenen: ['çilek', 'muz', 'elma', 'armut']\n");

// SORU 2: pop() kullanımı
// sayilar dizisinden son elemanı çıkar ve sonucu sakla
let sayilar = [10, 20, 30, 40];
// KODUNU BURAYA YAZ
let cikarilanSayi = sayilar.pop(); // Bu satırı düzenle

console.log("Soru 2 - Çıkarılan:", cikarilanSayi);
console.log("Soru 2 - Kalan dizi:", sayilar);
console.log("Beklenen çıkarılan: 40");
console.log("Beklenen kalan: [10, 20, 30]\n");

// SORU 3: unshift() kullanımı
// renkler dizisinin başına "beyaz" ekle
let renkler = ["kırmızı", "mavi"];
// KODUNU BURAYA YAZ
renkler.unshift("beyaz");

console.log("Soru 3 Cevap:", renkler);
console.log("Beklenen: ['beyaz', 'kırmızı', 'mavi']\n");

// SORU 4: shift() kullanımı
// gorevler dizisinden ilk elemanı çıkar
let gorevler = ["temizlik", "alışveriş", "ders çalışma"];
// KODUNU BURAYA YAZ
let tamamlananGorev = gorevler.shift(); // Bu satırı düzenle

console.log("Soru 4 - Tamamlanan görev:", tamamlananGorev);
console.log("Soru 4 - Kalan görevler:", gorevler);
console.log("Beklenen tamamlanan: 'temizlik'");
console.log("Beklenen kalan: ['alışveriş', 'ders çalışma']\n");

// SORU 5: Kombine kullanım (Challenge!)
// 1. notlar dizisinin sonuna 85 ekle
// 2. notlar dizisinin başından bir eleman çıkar
// 3. notlar dizisinin başına 100 ekle
let notlar = [70, 80, 90];
// KODUNU BURAYA YAZ
notlar.push(85);
let ilkEleman = notlar.shift();
notlar.unshift(100);

console.log("Soru 5 Cevap:", notlar);
console.log("Beklenen: [100, 80, 90, 85]\n");

// BONUS SORU: Bir stack (yığın) oluştur
// push ve pop kullanarak "son giren ilk çıkar" mantığını uygula
let stack = [];
// 1. Stack'e 1, 2, 3 sayılarını ekle
// 2. Stack'ten son eklenen elemanı çıkar ve yazdır
// 3. Stack'e 4 ekle
// 4. Tüm stack'i yazdır
// KODUNU BURAYA YAZ

stack.push(1, 2, 3);
let sonEklenen = stack.pop();
console.log(sonEklenen);
stack.push(4);

console.log("Bonus - Final Stack:", stack);
console.log("Beklenen: [1, 2, 4]");

console.log("\n=== ALIŞTIRMA 1 BİTTİ ===");
console.log("Çalıştırmak için: node alistirma-1-temel-metodlar.js");
