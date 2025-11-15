// ============================================
// ALIŞTIRMA 2: splice, slice ve concat
// ============================================

console.log("=== ALIŞTIRMA 2 BAŞLADI ===\n");

// SORU 1: splice() ile SILME
// harfler dizisinden index 2'den başlayarak 2 eleman sil
let harfler = ["A", "B", "C", "D", "E", "F"];
// KODUNU BURAYA YAZ
harfler.splice(2, 2);

console.log("Soru 1 Cevap:", harfler);
console.log("Beklenen: ['A', 'B', 'E', 'F']");
console.log("(C ve D silindi)\n");

// SORU 2: splice() ile EKLEME
// sayilar dizisine index 2'ye (silmeden) 99 ve 100 ekle
let sayilar = [1, 2, 3, 4];
// KODUNU BURAYA YAZ
sayilar.splice(2, 0, 99, 100);

console.log("Soru 2 Cevap:", sayilar);
console.log("Beklenen: [1, 2, 99, 100, 3, 4]\n");

// SORU 3: splice() ile DEĞİŞTİRME
// sehirler dizisinde index 1'deki elemanı "İzmir" ile değiştir
let sehirler = ["İstanbul", "Bursa", "Ankara"];
// KODUNU BURAYA YAZ
sehirler.splice(1, 1, "İzmir");

console.log("Soru 3 Cevap:", sehirler);
console.log("Beklenen: ['İstanbul', 'İzmir', 'Ankara']\n");

// SORU 4: slice() ile KOPYALAMA
// renkler dizisinden index 1 ile 4 arasını (4 dahil değil) kopyala
// ORİJİNAL DİZİ DEĞİŞMEMELİ!
let renkler = ["kırmızı", "yeşil", "mavi", "sarı", "turuncu"];
// KODUNU BURAYA YAZ
let secilenRenkler = renkler.slice(1, 4); // Bu satırı düzenle

console.log("Soru 4 - Seçilen:", secilenRenkler);
console.log("Soru 4 - Orijinal:", renkler);
console.log("Beklenen seçilen: ['yeşil', 'mavi', 'sarı']");
console.log(
  "Beklenen orijinal: ['kırmızı', 'yeşil', 'mavi', 'sarı', 'turuncu'] (değişmemeli!)\n"
);

// SORU 5: slice() ile negatif index
// dizi dizisinden SON 3 ELEMANI kopyala
let dizi = [10, 20, 30, 40, 50, 60];
// KODUNU BURAYA YAZ
let sonUc = dizi.slice(-3); // Bu satırı düzenle

console.log("Soru 5 Cevap:", sonUc);
console.log("Beklenen: [40, 50, 60]\n");

// SORU 6: concat() ile birleştirme
// dizi1 ve dizi2'yi birleştir, sonucu yeniDizi'ye ata
let dizi1 = [1, 2, 3];
let dizi2 = [4, 5, 6];
// KODUNU BURAYA YAZ
let yeniDizi = dizi1.concat(dizi2); // Bu satırı düzenle

console.log("Soru 6 - Yeni dizi:", yeniDizi);
console.log("Soru 6 - Dizi1:", dizi1, "(değişmemeli!)");
console.log("Beklenen yeni: [1, 2, 3, 4, 5, 6]");
console.log("Beklenen dizi1: [1, 2, 3]\n");

// SORU 7: concat() çoklu birleştirme
// meyveler1, meyveler2 ve "üzüm" stringini birleştir
let meyveler1 = ["elma", "armut"];
let meyveler2 = ["muz", "çilek"];
// KODUNU BURAYA YAZ
let tumMeyveler = meyveler1.concat(meyveler2, "üzüm"); // Bu satırı düzenle

console.log("Soru 7 Cevap:", tumMeyveler);
console.log("Beklenen: ['elma', 'armut', 'muz', 'çilek', 'üzüm']\n");

// CHALLENGE 1: splice() ile eleman yer değiştirme
// notlar dizisinde index 1 ve 2'deki elemanları yer değiştir
// İpucu: splice() kullan, önce birini çıkar, sonra diğerini ekle
let notlar = [100, 70, 90, 80];
// KODUNU BURAYA YAZ
notlar.splice(1, 1);
notlar.splice(2, 0, 70);

console.log("Challenge 1 Cevap:", notlar);
console.log("Beklenen: [100, 90, 70, 80] (70 ve 90 yer değiştirdi)\n");

// CHALLENGE 2: Dizi kopyalama ve değiştirme
// 1. original dizisinin tam bir kopyasını oluştur (slice kullan)
// 2. Kopyayı değiştir (splice ile index 1'den 2 eleman sil)
// 3. Original dizinin değişmediğini doğrula
let original = ["X", "Y", "Z", "W", "Q"];
// KODUNU BURAYA YAZ
let kopya = original.slice(); // Bu satırı düzenle
// kopya dizisini değiştir
kopya.splice(1, 2);

console.log("Challenge 2 - Original:", original);
console.log("Challenge 2 - Kopya:", kopya);
console.log("Beklenen original: ['X', 'Y', 'Z', 'W', 'Q'] (DEĞİŞMEMELİ!)");
console.log("Beklenen kopya: ['X', 'W', 'Q']\n");

console.log("\n=== ALIŞTIRMA 2 BİTTİ ===");
console.log("Çalıştırmak için: node alistirma-2-splice-slice-concat.js");
