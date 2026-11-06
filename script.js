// 1. Script Countdown Timer
let countDownDate = new Date().getTime() + (5 * 60 * 60 * 1000);
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = hours + "j " + minutes + "m " + seconds + "d ";
    }
    if (distance < 0) {
        clearInterval(x);
        if (countdownElement) countdownElement.innerHTML = "PROMO BERAKHIR";
    }
}, 1000);

// Daftar produk Gadget
const listGadget = [
    { nama: "POCO C65 8/256GB", harga: "Rp 1.449.000", deskripsi: "Performa kencang, layar 90Hz smooth.", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
    { nama: "Smartwatch Sport Series", harga: "Rp 350.000", deskripsi: "Monitor detak jantung & olahraga.", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
    { nama: "TWS Wireless Bluetooth", harga: "Rp 189.000", deskripsi: "Suara bass jernih & tahan lama.", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
    { nama: "Keyboard Mechanical RGB", harga: "Rp 299.000", deskripsi: "Switch empuk, lampu RGB interaktif.", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80" },
    { nama: "Mouse Gaming Wireless", harga: "Rp 125.000", deskripsi: "Desain ergonomis & responsif.", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80" },
    { nama: "Powerbank Fast Charge", harga: "Rp 210.000", deskripsi: "Pengisian cepat Type-C.", img: "https://images.unsplash.com/photo-1609592424074-131df3393a52?w=400&q=80" },
];

// Daftar produk Software
const listSoftware = [
    { nama: "Lisensi Tools SEO Pro", harga: "Rp 250.000", deskripsi: "Riset kata kunci & optimasi Google.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
    { nama: "Source Code E-Commerce", harga: "Rp 499.000", deskripsi: "Siap pakai & responsif.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80" },
    { nama: "Template Tailwind CSS", harga: "Rp 150.000", deskripsi: "Desain modern dan cepat.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80" },
    { nama: "Bot WhatsApp Business", harga: "Rp 199.000", deskripsi: "Balas pesan otomatis 24 jam.", img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80" },
];

// Daftar produk E-Book
const listEbook = [
    { nama: "E-Book Digital Marketing", harga: "Rp 99.000", deskripsi: "Panduan FB & Google Ads.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
    { nama: "E-Book Web Developer", harga: "Rp 120.000", deskripsi: "Belajar HTML, CSS, JS praktis.", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80" },
    { nama: "E-Book Jualan Marketplace", harga: "Rp 85.000", deskripsi: "Strategi banjir orderan Shopee.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80" },
];

// Generator 30+ Produk
function generate30Products(baseList) {
    let result = [];
    for (let i = 0; i < 30; i++) {
        let base = baseList[i % baseList.length];
        result.push({
            nama: `${base.nama} V-${i + 1}`,
            harga: base.harga,
            deskripsi: base.deskripsi,
            img: base.img
        });
    }
    return result;
}

const databaseProduk = {
    "Gadget": generate30Products(listGadget),
    "Software": generate30Products(listSoftware),
    "E-Book": generate30Products(listEbook)
};

// 3. Fungsi Membuka Modal Kategori dengan Layout Rapi
function openCategoryModal(categoryName) {
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalProductList = document.getElementById('modalProductList');

    modalTitle.innerText = `Katalog Lengkap: ${categoryName} (30+ Produk)`;
    modalProductList.innerHTML = '';

    modalProductList.className = "p-6 overflow-y-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[65vh]";

    let produkList = databaseProduk[categoryName] || [];

    produkList.forEach((produk, index) => {
        let card = document.createElement('div');
        card.className = "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition";
        card.innerHTML = `
            <div>
                <div class="h-32 w-full bg-slate-100 overflow-hidden">
                    <img src="${produk.img}" alt="${produk.nama}" class="w-full h-full object-cover">
                </div>
                <div class="p-3">
                    <span class="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded">No. ${index + 1}</span>
                    <h5 class="font-bold text-slate-800 text-xs mt-1 truncate">${produk.nama}</h5>
                    <p class="text-slate-500 text-[11px] mt-0.5 line-clamp-1">${produk.deskripsi}</p>
                </div>
            </div>
            <div class="p-3 pt-0 flex items-center justify-between mt-1">
                <span class="font-bold text-blue-600 text-xs">${produk.harga}</span>
                <button onclick="orderViaWhatsApp('${produk.nama}', '${produk.harga}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-2.5 py-1 rounded-lg text-[11px] transition cursor-pointer">
                    Pesan WA
                </button>
            </div>
        `;
        modalProductList.appendChild(card);
    });

    modal.classList.remove('hidden');
}

// 4. Fungsi Menutup Modal
function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
}

// 5. Fungsi Kirim Pesanan ke WhatsApp Japos Store
function orderViaWhatsApp(productName, productPrice) {
    let phoneNumber = "6281234567899"; // Ganti dengan nomor WA Japos Store kamu
    let message = `Halo Admin Japos Store, saya ingin memesan produk:\n\n*${productName}* (${productPrice})\n\nMohon info selanjutnya ya kak. Terima kasih!`;
    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// 6. Registrasi Progressive Web App (PWA) Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log("PWA Service Worker Terdaftar Berhasil"))
      .catch((err) => console.log("PWA Service Worker Gagal:", err));
  });
}