import { KatalogTipi } from './urun';

// Ürün Kataloğunu Listeleme Fonksiyonu
export function  listeliUrunler(katalog: KatalogTipi[]) {
    katalog.forEach(Urun => {
        console.log(`ID: ${Urun.id}, Name: ${Urun.name}, Fiyat: ${Urun.fiyat}, Kategori: ${Urun.kategori}`);

        // Elektronik Ürünler İçin Özel Bilgiler
        if ("marka" in Urun) {
            console.log(`Marka: ${Urun.marka}, Garanti Süresi: ${Urun.garantiSuresi} ay`);
        }

        // Giyim Ürünleri İçin Özel Bilgiler
        if ("beden" in Urun) {
            console.log(`Beden: ${Urun.beden}, Materyal: ${Urun.materyal}`);
        }

        // Gıda Ürünleri İçin Özel Bilgiler
        if ("sonKullanmaTarihi" in Urun) {
            console.log(`Son Kullanma Tarihi: ${Urun.sonKullanmaTarihi.toDateString()}, Organik: ${Urun.organikMi}`);
        }

        // Kitaplar İçin Özel Bilgiler
        if ("yazar" in Urun) {
            console.log(`Yazar: ${Urun.yazar}, Sayfa Sayısı: ${Urun.sayfaSayisi}, Tür: ${Urun.tur}`);
        }

        console.log('----------------------');
    });
}

// Ürün Kataloğunu Kategoriye Göre Filtreleme Fonksiyonu
export function urunleriKalalogaGöreFiltrele(katalog: KatalogTipi[], kategori: string): KatalogTipi[] {
    return katalog.filter(urun => urun.kategori === kategori);
}
