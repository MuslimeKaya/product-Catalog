// Ürün Tipleri ve Arayüzleri
// Ürün Verileri
// Elektronik Ürünler
const Laptop = {
    id: 1,
    name: "Laptop",
    fiyat: 30000,
    kategori: "Elektronik",
    marka: "TechBrand",
    garantiSuresi: 24
};
const samsung = {
    id: 2,
    name: "Smartphone",
    fiyat: 40000,
    kategori: "Telefon",
    marka: "Samsung",
    garantiSuresi: 20
};
// Giyim Ürünleri
const tshirt = {
    id: 3,
    name: "T-Shirt",
    fiyat: 700,
    kategori: "Kadın Giyim",
    beden: "M",
    materyal: "Pamuk"
};
const jeans = {
    id: 4,
    name: "Kot Pantolon",
    fiyat: 1500,
    kategori: "Erkek Giyim",
    beden: "M",
    materyal: "Denim"
};
// Gıda Ürünleri
const apple = {
    id: 5,
    name: "Elma",
    fiyat: 20,
    kategori: "Meyve",
    sonKullanmaTarihi: new Date('2025-02-15'),
    organikMi: true
};
const bread = {
    id: 6,
    name: "Ekmek",
    fiyat: 15,
    kategori: "Fırın Ürünleri",
    sonKullanmaTarihi: new Date('2025-02-15'),
    organikMi: false
};
// Kitaplar
const book1 = {
    id: 7,
    name: "Suç ve Ceza",
    fiyat: 500,
    kategori: "Klasikler",
    yazar: "Dostoyevski",
    sayfaSayisi: 350,
    tur: "Roman"
};
const book2 = {
    id: 8,
    name: "Uçurtma Avcısı",
    fiyat: 420,
    kategori: "Dram",
    yazar: "Khaled Hosseini",
    sayfaSayisi: 250,
    tur: "Roman"
};
// Ürün Kataloğu
export const urunkalalog = [Laptop, samsung, tshirt, jeans, apple, book1, book2, bread];
