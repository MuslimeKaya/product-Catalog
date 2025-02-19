import { urunkalalog } from './urun.js';
import { listeliUrunler, urunleriKalalogaGöreFiltrele } from './katalog.js';
// Ürünleri Listele
console.log("Tüm Ürünler:");
listeliUrunler(urunkalalog);
// Filtrelenmiş Ürünleri Listele
const electronicsProducts = urunleriKalalogaGöreFiltrele(urunkalalog, "Elektronik");
console.log("Elektronik Ürünler:");
listeliUrunler(electronicsProducts);
const clothingProducts = urunleriKalalogaGöreFiltrele(urunkalalog, "Giyim");
console.log("Giyim Ürünleri:");
listeliUrunler(clothingProducts);
const foodProducts = urunleriKalalogaGöreFiltrele(urunkalalog, "Gıda");
console.log("Gıda Ürünleri:");
listeliUrunler(foodProducts);
const booksProducts = urunleriKalalogaGöreFiltrele(urunkalalog, "Kitap");
console.log("Kitaplar:");
listeliUrunler(booksProducts);
