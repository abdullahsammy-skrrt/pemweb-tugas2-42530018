const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const menus = [
    // --- KOPI ---
    { 
        id: 8, 
        nama: 'Americano', 
        kategori: 'kopi', 
        harga: 'Rp 18.000', 
        deskripsi: 'Espresso murni dilarutkan dengan air panas, memiliki rasa kopi yang bersih dan mantap.', 
        foto: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 9, 
        nama: 'Espresso', 
        kategori: 'kopi', 
        harga: 'Rp 16.000', 
        deskripsi: 'Ekstrak kopi pekat dengan aroma tajam dan crema yang kaya.', 
        foto: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 10, 
        nama: 'Kapucino', 
        kategori: 'kopi', 
        harga: 'Rp 23.000', 
        deskripsi: 'Perpaduan seimbang antara espresso, steamed milk, dan lapisan foam tebal.', 
        foto: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 11, 
        nama: 'Kapucino Caramel', 
        kategori: 'kopi', 
        harga: 'Rp 26.000', 
        deskripsi: 'Kapucino klasik yang diberi sentuhan sirup karamel manis dan harum.', 
        foto: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 12, 
        nama: 'Macchiato', 
        kategori: 'kopi', 
        harga: 'Rp 22.000', 
        deskripsi: 'Espresso shot yang diberi sedikit sentuhan foam susu lembut di atasnya.', 
        foto: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=60'
    },

    // --- NON KOPI ---
    { 
        id: 13, 
        nama: 'Hazelnut Mocha', 
        kategori: 'non-kopi', 
        harga: 'Rp 27.000', 
        deskripsi: 'Minuman cokelat lezat berpadu dengan gurihnya aroma sirup hazelnut.', 
        foto:  '/images/hazelnut mocha.jpg'
    },
    { 
        id: 14, 
        nama: 'Matcha Cream', 
        kategori: 'non-kopi', 
        harga: 'Rp 26.000', 
        deskripsi: 'Olahan matcha khas Jepang dipadukan dengan whipped cream manis gurih.', 
        foto: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 15, 
        nama: 'Matcha Latte', 
        kategori: 'non-kopi', 
        harga: 'Rp 25.000', 
        deskripsi: 'Bubuk matcha autentik diseduh sempurna dengan susu segar yang creamy.', 
        foto: '/images/Matcha Latte.jpg' 
    },
    { 
        id: 16, 
        nama: 'Pure Matcha', 
        kategori: 'non-kopi', 
        harga: 'Rp 24.000', 
        deskripsi: 'Seduhan teh hijau matcha murni tanpa campuran susu bagi pecinta matcha sejati.', 
        foto: '/images/Pure matcha.jpg' 
    },
    { 
        id: 17, 
        nama: 'Milkshake', 
        kategori: 'non-kopi', 
        harga: 'Rp 22.000', 
        deskripsi: 'Susu kocok dingin nan manis dengan tekstur kental dan menyegarkan.', 
        foto: '/images/milkshake.jpg' 
    },
    { 
        id: 18, 
        nama: 'Milk-Tea', 
        kategori: 'non-kopi', 
        harga: 'Rp 19.000', 
        deskripsi: 'Seduhan teh hitam pilihan yang dipadukan dengan susu manis yang pas.', 
        foto: '/images/milk tea.jpg' 
    },

    // --- MAKANAN ---
    { 
        id: 1, 
        nama: 'Indomie Goreng', 
        kategori: 'makanan', 
        harga: 'Rp 12.000', 
        deskripsi: 'Mie instan goreng legendaris disajikan hangat dengan telur dan taburan bawang goreng.', 
        foto: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=60'
    },
    { 
        id: 2, 
        nama: 'Burger', 
        kategori: 'makanan', 
        harga: 'Rp 28.000', 
        deskripsi: 'Burger daging sapi gurih dengan keju leleh, selada segar, dan saus spesial.', 
        foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 3, 
        nama: 'French Fries', 
        kategori: 'makanan', 
        harga: 'Rp 15.000', 
        deskripsi: 'Kentang goreng renyah di luar dan lembut di dalam dengan taburan garam gurih.', 
        foto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 4, 
        nama: 'Pisang Goreng', 
        kategori: 'makanan', 
        harga: 'Rp 14.000', 
        deskripsi: 'Pisang manis digoreng tepung krispi keemasan disajikan hangat.', 
        foto: '/images/pisang goreng.jpg' 
    },
    { 
        id: 5, 
        nama: 'Roti Bakar', 
        kategori: 'makanan', 
        harga: 'Rp 16.000', 
        deskripsi: 'Roti panggang mentega dengan isian cokelat lumer dan keju melimpah.', 
        foto: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 6, 
        nama: 'Hotdog', 
        kategori: 'makanan', 
        harga: 'Rp 24.000', 
        deskripsi: 'Sosis sapi juicy dalam roti lembut dilengkapi saus tomat, sambal, dan mayones.', 
        foto: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=500&q=60' 
    },
    { 
        id: 7, 
        nama: 'Nasi Goreng', 
        kategori: 'makanan', 
        harga: 'Rp 20.000', 
        deskripsi: 'Nasi goreng racikan khas kafe dengan suwiran ayam, telur, dan kerupuk renyah.', 
        foto: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=60' 
    }
];

app.get('/', (req, res) => {
    const kategoriFilter = req.query.kategori;
    let hasilMenu = menus;
    if (kategoriFilter) {
        hasilMenu = menus.filter(item => item.kategori.toLowerCase() === kategoriFilter.toLowerCase());
    }
    res.render('index', { menus: hasilMenu, kategoriAktif: kategoriFilter || 'Semua' });
});

app.get('/menu/:id', (req, res) => {
    const menuId = parseInt(req.params.id);
    const menuDetail = menus.find(item => item.id === menuId);
    if (!menuDetail) {
        return res.status(404).send('<h2>Menu tidak ditemukan!</h2><a href="/">Kembali ke Katalog</a>');
    }
    res.render('detail', { menu: menuDetail });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});