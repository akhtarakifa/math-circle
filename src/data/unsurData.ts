// src/data/unsurData.ts
import { UnsurItem } from '@/types';

export const unsurData: UnsurItem[] = [
  {
    id: 'pusat',
    nama: 'Titik Pusat',
    simbol: 'O',
    deskripsi: 'Titik yang menjadi acuan semua jarak pada lingkaran.',
    detail: 'Semua titik pada lingkaran berjarak sama terhadap titik pusat. Biasanya dilambangkan huruf O.',
  },
  {
    id: 'jarijari',
    nama: 'Jari-Jari',
    simbol: 'r',
    deskripsi: 'Ruas garis dari titik pusat ke titik mana pun pada lingkaran.',
    detail: 'Semua jari-jari dalam satu lingkaran panjangnya sama. Simbol r berasal dari kata radius.',
  },
  {
    id: 'diameter',
    nama: 'Diameter',
    simbol: 'd',
    deskripsi: 'Ruas garis yang menghubungkan dua titik pada lingkaran melalui pusat.',
    detail: 'Rumus: d = 2r. Diameter adalah tali busur terpanjang dalam sebuah lingkaran.',
  },
  {
    id: 'busur',
    nama: 'Busur',
    simbol: '⌒AB',
    deskripsi: 'Bagian dari keliling lingkaran (garis melengkung).',
    detail: 'Busur minor < setengah lingkaran. Busur mayor > setengah lingkaran.',
  },
  {
    id: 'talibusur',
    nama: 'Tali Busur',
    simbol: 'AB',
    deskripsi: 'Ruas garis lurus yang menghubungkan dua titik pada lingkaran.',
    detail: 'Tidak harus melalui pusat. Diameter adalah tali busur khusus yang melalui pusat.',
  },
  {
    id: 'apotema',
    nama: 'Apotema',
    simbol: 'a',
    deskripsi: 'Jarak tegak lurus dari titik pusat ke suatu tali busur.',
    detail: 'Apotema membagi tali busur menjadi dua bagian sama panjang dan merupakan jarak terpendek dari pusat ke tali busur.',
  },
  {
    id: 'juring',
    nama: 'Juring',
    simbol: '⌔',
    deskripsi: 'Daerah yang dibatasi oleh dua jari-jari dan busur di antara keduanya.',
    detail: 'Berbentuk seperti potongan pizza. Juring minor: sudut pusat < 180°. Juring mayor: sudut pusat > 180°.',
  },
  {
    id: 'tembereng',
    nama: 'Tembereng',
    simbol: '◔',
    deskripsi: 'Daerah yang dibatasi oleh satu tali busur dan busur lingkaran.',
    detail: 'Tembereng minor: daerah lebih kecil. Tembereng mayor: daerah lebih besar.',
  },
];
