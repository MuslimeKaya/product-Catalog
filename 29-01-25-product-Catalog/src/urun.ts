// Ürün Tipleri ve Arayüzleri

// Genel Ürün Arayüzü
interface Urun {
    id: number;
    name: string;
    fiyat: number;
    kategori: string;
}

// Elektronik Ürünler Arayüzü
interface Elektronik extends Urun {
    marka: string; // Marka bilgisi
    garantiSuresi: number; // Garanti süresi (ay olarak)
}

// Giyim Ürünleri Arayüzü
interface Giyim extends Urun {
    beden: string; // Beden bilgisi
    materyal: string; // Malzeme bilgisi
}

// Gıda Ürünleri Arayüzü
interface Gida extends Urun {
    sonKullanmaTarihi: Date; // Son kullanma tarihi
    organikMi: boolean; // Organik mi?
}

// Kitaplar Arayüzü
interface Kitap extends Urun {
    yazar: string;
    sayfaSayisi: number;
    tur: string;
}

// Ürün Tipleri
export type KatalogTipi = Elektronik | Gida | Giyim | Kitap;

// Ürün Verileri

// Elektronik Ürünler
const Laptop: Elektronik = {
    id: 1,
    name: "Laptop",
    fiyat: 30000,
    kategori: "Elektronik",
    marka: "TechBrand",
    garantiSuresi: 24
};

const samsung: Elektronik = {
    id: 2,
    name: "Smartphone",
    fiyat: 40000,
    kategori: "Telefon",
    marka: "Samsung",
    garantiSuresi: 20
};

// Giyim Ürünleri
const tshirt: Giyim = {
    id: 3,
    name: "T-Shirt",
    fiyat: 700,
    kategori: "Kadın Giyim",
    beden: "M",
    materyal: "Pamuk"
};

const jeans: Giyim = {
    id: 4,
    name: "Kot Pantolon",
    fiyat: 1500,
    kategori: "Erkek Giyim",
    beden: "M",
    materyal: "Denim"
};

// Gıda Ürünleri
const apple: Gida = {
    id: 5,
    name: "Elma",
    fiyat: 20,
    kategori: "Meyve",
    sonKullanmaTarihi: new Date('2025-02-15'),
    organikMi: true
};

const bread: Gida = {
    id: 6,
    name: "Ekmek",
    fiyat: 15,
    kategori: "Fırın Ürünleri",
    sonKullanmaTarihi: new Date('2025-02-15'),
    organikMi: false
};

// Kitaplar
const book1: Kitap = {
    id: 7,
    name: "Suç ve Ceza",
    fiyat: 500,
    kategori: "Klasikler",
    yazar: "Dostoyevski",
    sayfaSayisi: 350,
    tur: "Roman"
};

const book2: Kitap = {
    id: 8,
    name: "Uçurtma Avcısı",
    fiyat: 420,
    kategori: "Dram",
    yazar: "Khaled Hosseini",
    sayfaSayisi: 250,
    tur: "Roman"
};

// Ürün Kataloğu
export const urunkalalog: KatalogTipi[] = [Laptop, samsung, tshirt, jeans, apple, book1, book2, bread];
