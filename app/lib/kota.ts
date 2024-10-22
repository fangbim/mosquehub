import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export const KOTA = {
    cities: [
      "SIMEULUE",
      "ACEH SINGKIL",
      "ACEH SELATAN",
      "ACEH TENGGARA",
      "ACEH TIMUR",
      "ACEH TENGAH",
      "ACEH BARAT",
      "ACEH BESAR",
      "PIDIE",
      "BIREUEN",
      "ACEH UTARA",
      "ACEH BARAT DAYA",
      "GAYO LUES",
      "ACEH TAMIANG",
      "NAGAN RAYA",
      "ACEH JAYA",
      "BENER MERIAH",
      "PIDIE JAYA",
      "BANDA ACEH",
      "SABANG",
      "LANGSA",
      "LHOKSEUMAWE",
      "SUBULUSSALAM",
      "NIAS",
      "MANDAILING NATAL",
      "TAPANULI SELATAN",
      "TAPANULI TENGAH",
      "TAPANULI UTARA",
      "TOBA SAMOSIR",
      "LABUHAN BATU",
      "ASAHAN",
      "SIMALUNGUN",
      "DAIRI",
      "KARO",
      "DELI SERDANG",
      "LANGKAT",
      "NIAS SELATAN",
      "HUMBANG HASUNDUTAN",
      "PAKPAK BHARAT",
      "SAMOSIR",
      "SERDANG BEDAGAI",
      "BATU BARA",
      "PADANG LAWAS UTARA",
      "PADANG LAWAS",
      "LABUHAN BATU SELATAN",
      "LABUHAN BATU UTARA",
      "NIAS UTARA",
      "NIAS BARAT",
      "SIBOLGA",
      "TANJUNG BALAI",
      "PEMATANG SIANTAR",
      "TEBING TINGGI",
      "MEDAN",
      "BINJAI",
      "PADANGSIDIMPUAN",
      "GUNUNGSITOLI",
      "KEPULAUAN MENTAWAI",
      "PESISIR SELATAN",
      "SOLOK",
      "SIJUNJUNG",
      "TANAH DATAR",
      "PADANG PARIAMAN",
      "AGAM",
      "LIMA PULUH KOTA",
      "PASAMAN",
      "SOLOK SELATAN",
      "DHARMASRAYA",
      "PASAMAN BARAT",
      "PADANG",
      "SOLOK",
      "SAWAH LUNTO",
      "PADANG PANJANG",
      "BUKITTINGGI",
      "PAYAKUMBUH",
      "PARIAMAN",
      "KUANTAN SINGINGI",
      "INDRAGIRI HULU",
      "INDRAGIRI HILIR",
      "PELALAWAN",
      "S I A K",
      "KAMPAR",
      "ROKAN HULU",
      "BENGKALIS",
      "ROKAN HILIR",
      "KEPULAUAN MERANTI",
      "PEKANBARU",
      "D U M A I",
      "KERINCI",
      "MERANGIN",
      "SAROLANGUN",
      "BATANG HARI",
      "MUARO JAMBI",
      "TANJUNG JABUNG TIMUR",
      "TANJUNG JABUNG BARAT",
      "TEBO",
      "BUNGO",
      "JAMBI",
      "SUNGAI PENUH",
      "OGAN KOMERING ULU",
      "OGAN KOMERING ILIR",
      "MUARA ENIM",
      "LAHAT",
      "MUSI RAWAS",
      "MUSI BANYUASIN",
      "BANYU ASIN",
      "OGAN KOMERING ULU SELATAN",
      "OGAN KOMERING ULU TIMUR",
      "OGAN ILIR",
      "EMPAT LAWANG",
      "PENUKAL ABAB LEMATANG ILIR",
      "MUSI RAWAS UTARA",
      "PALEMBANG",
      "PRABUMULIH",
      "PAGAR ALAM",
      "LUBUKLINGGAU",
      "BENGKULU SELATAN",
      "REJANG LEBONG",
      "BENGKULU UTARA",
      "KAUR",
      "SELUMA",
      "MUKOMUKO",
      "LEBONG",
      "KEPAHIANG",
      "BENGKULU TENGAH",
      "BENGKULU",
      "LAMPUNG BARAT",
      "TANGGAMUS",
      "LAMPUNG SELATAN",
      "LAMPUNG TIMUR",
      "LAMPUNG TENGAH",
      "LAMPUNG UTARA",
      "WAY KANAN",
      "TULANGBAWANG",
      "PESAWARAN",
      "PRINGSEWU",
      "MESUJI",
      "TULANG BAWANG BARAT",
      "PESISIR BARAT",
      "BANDAR LAMPUNG",
      "METRO",
      "BANGKA",
      "BELITUNG",
      "BANGKA BARAT",
      "BANGKA TENGAH",
      "BANGKA SELATAN",
      "BELITUNG TIMUR",
      "PANGKAL PINANG",
      "KARIMUN",
      "BINTAN",
      "NATUNA",
      "LINGGA",
      "KEPULAUAN ANAMBAS",
      "B A T A M",
      "TANJUNG PINANG",
      "KEPULAUAN SERIBU",
      "JAKARTA SELATAN",
      "JAKARTA TIMUR",
      "JAKARTA PUSAT",
      "JAKARTA BARAT",
      "JAKARTA UTARA",
      "BOGOR",
      "SUKABUMI",
      "CIANJUR",
      "BANDUNG",
      "GARUT",
      "TASIKMALAYA",
      "CIAMIS",
      "KUNINGAN",
      "CIREBON",
      "MAJALENGKA",
      "SUMEDANG",
      "INDRAMAYU",
      "SUBANG",
      "PURWAKARTA",
      "KARAWANG",
      "BEKASI",
      "BANDUNG BARAT",
      "PANGANDARAN",
      "BOGOR",
      "SUKABUMI",
      "BANDUNG",
      "CIREBON",
      "BEKASI",
      "DEPOK",
      "CIMAHI",
      "TASIKMALAYA",
      "BANJAR",
      "CILACAP",
      "BANYUMAS",
      "PURBALINGGA",
      "BANJARNEGARA",
      "KEBUMEN",
      "PURWOREJO",
      "WONOSOBO",
      "MAGELANG",
      "BOYOLALI",
      "KLATEN",
      "SUKOHARJO",
      "WONOGIRI",
      "KARANGANYAR",
      "SRAGEN",
      "GROBOGAN",
      "BLORA",
      "REMBANG",
      "PATI",
      "KUDUS",
      "JEPARA",
      "DEMAK",
      "SEMARANG",
      "TEMANGGUNG",
      "KENDAL",
      "BATANG",
      "PEKALONGAN",
      "PEMALANG",
      "TEGAL",
      "BREBES",
      "MAGELANG",
      "SURAKARTA",
      "SALATIGA",
      "SEMARANG",
      "PEKALONGAN",
      "TEGAL",
      "KULON PROGO",
      "BANTUL",
      "GUNUNG KIDUL",
      "SLEMAN",
      "YOGYAKARTA",
      "PACITAN",
      "PONOROGO",
      "TRENGGALEK",
      "TULUNGAGUNG",
      "BLITAR",
      "KEDIRI",
      "MALANG",
      "LUMAJANG",
      "JEMBER",
      "BANYUWANGI",
      "BONDOWOSO",
      "SITUBONDO",
      "PROBOLINGGO",
      "PASURUAN",
      "SIDOARJO",
      "MOJOKERTO",
      "JOMBANG",
      "NGANJUK",
      "MADIUN",
      "MAGETAN",
      "NGAWI",
      "BOJONEGORO",
      "TUBAN",
      "LAMONGAN",
      "GRESIK",
      "BANGKALAN",
      "SAMPANG",
      "PAMEKASAN",
      "SUMENEP",
      "KEDIRI",
      "BLITAR",
      "MALANG",
      "PROBOLINGGO",
      "PASURUAN",
      "MOJOKERTO",
      "MADIUN",
      "SURABAYA",
      "BATU",
      "PANDEGLANG",
      "LEBAK",
      "TANGERANG",
      "SERANG",
      "TANGERANG",
      "CILEGON",
      "SERANG",
      "TANGERANG SELATAN",
      "JEMBRANA",
      "TABANAN",
      "BADUNG",
      "GIANYAR",
      "KLUNGKUNG",
      "BANGLI",
      "KARANG ASEM",
      "BULELENG",
      "DENPASAR",
      "LOMBOK BARAT",
      "LOMBOK TENGAH",
      "LOMBOK TIMUR",
      "SUMBAWA",
      "DOMPU",
      "BIMA",
      "SUMBAWA BARAT",
      "LOMBOK UTARA",
      "MATARAM",
      "BIMA",
      "SUMBA BARAT",
      "SUMBA TIMUR",
      "KUPANG",
      "TIMOR TENGAH SELATAN",
      "TIMOR TENGAH UTARA",
      "BELU",
      "ALOR",
      "LEMBATA",
      "FLORES TIMUR",
      "SIKKA",
      "ENDE",
      "NGADA",
      "MANGGARAI",
      "ROTE NDAO",
      "MANGGARAI BARAT",
      "SUMBA TENGAH",
      "SUMBA BARAT DAYA",
      "NAGEKEO",
      "MANGGARAI TIMUR",
      "SABU RAIJUA",
      "MALAKA",
      "KUPANG",
      "SAMBAS",
      "BENGKAYANG",
      "LANDAK",
      "MEMPAWAH",
      "SANGGAU",
      "KETAPANG",
      "SINTANG",
      "KAPUAS HULU",
      "SEKADAU",
      "MELAWI",
      "KAYONG UTARA",
      "KUBU RAYA",
      "PONTIANAK",
      "SINGKAWANG",
      "KOTAWARINGIN BARAT",
      "KOTAWARINGIN TIMUR",
      "KAPUAS",
      "BARITO SELATAN",
      "BARITO UTARA",
      "SUKAMARA",
      "LAMANDAU",
      "SERUYAN",
      "KATINGAN",
      "PULANG PISAU",
      "GUNUNG MAS",
      "BARITO TIMUR",
      "MURUNG RAYA",
      "PALANGKA RAYA",
      "TANAH LAUT",
      "BARU",
      "BANJAR",
      "BARITO KUALA",
      "TAPIN",
      "HULU SUNGAI SELATAN",
      "HULU SUNGAI TENGAH",
      "HULU SUNGAI UTARA",
      "TABALONG",
      "TANAH BUMBU",
      "BALANGAN",
      "BANJARMASIN",
      "BANJAR BARU",
      "PASER",
      "KUTAI BARAT",
      "KUTAI KARTANEGARA",
      "KUTAI TIMUR",
      "BERAU",
      "PENAJAM PASER UTARA",
      "MAHAKAM HULU",
      "BALIKPAPAN",
      "SAMARINDA",
      "BONTANG",
      "MALINAU",
      "BULUNGAN",
      "TANA TIDUNG",
      "NUNUKAN",
      "TARAKAN",
      "BOLAANG MONGONDOW",
      "MINAHASA",
      "KEPULAUAN SANGIHE",
      "KEPULAUAN TALAUD",
      "MINAHASA SELATAN",
      "MINAHASA UTARA",
      "BOLAANG MONGONDOW UTARA",
      "SIAU TAGULANDANG BIARO",
      "MINAHASA TENGGARA",
      "BOLAANG MONGONDOW SELATAN",
      "BOLAANG MONGONDOW TIMUR",
      "MANADO",
      "BITUNG",
      "TOMOHON",
      "KOTAMOBAGU",
      "BANGGAI KEPULAUAN",
      "BANGGAI",
      "MOROWALI",
      "POSO",
      "DONGGALA",
      "TOLI-TOLI",
      "BUOL",
      "PARIGI MOUTONG",
      "TOJO UNA-UNA",
      "SIGI",
      "BANGGAI LAUT",
      "MOROWALI UTARA",
      "PALU",
      "KEPULAUAN SELAYAR",
      "BULUKUMBA",
      "BANTAENG",
      "JENEPONTO",
      "TAKALAR",
      "GOWA",
      "SINJAI",
      "MAROS",
      "PANGKAJENE DAN KEPULAUAN",
      "BARRU",
      "BONE",
      "SOPPENG",
      "WAJO",
      "SIDENRENG RAPPANG",
      "PINRANG",
      "ENREKANG",
      "LUWU",
      "TANA TORAJA",
      "LUWU UTARA",
      "LUWU TIMUR",
      "TORAJA UTARA",
      "MAKASSAR",
      "PAREPARE",
      "PALOPO",
      "BUTON",
      "MUNA",
      "KONAWE",
      "KOLAKA",
      "KONAWE SELATAN",
      "BOMBANA",
      "WAKATOBI",
      "KOLAKA UTARA",
      "BUTON UTARA",
      "KONAWE UTARA",
      "KOLAKA TIMUR",
      "KONAWE KEPULAUAN",
      "MUNA BARAT",
      "BUTON TENGAH",
      "BUTON SELATAN",
      "KENDARI",
      "BAUBAU",
      "BOALEMO",
      "GORONTALO",
      "POHUWATO",
      "BONE BOLANGO",
      "GORONTALO UTARA",
      "GORONTALO",
      "MAJENE",
      "POLEWALI MANDAR",
      "MAMASA",
      "MAMUJU",
      "MAMUJU UTARA",
      "MAMUJU TENGAH",
      "MALUKU TENGGARA BARAT",
      "MALUKU TENGGARA",
      "MALUKU TENGAH",
      "BURU",
      "KEPULAUAN ARU",
      "SERAM BAGIAN BARAT",
      "SERAM BAGIAN TIMUR",
      "MALUKU BARAT DAYA",
      "BURU SELATAN",
      "AMBON",
      "TUAL",
      "HALMAHERA BARAT",
      "HALMAHERA TENGAH",
      "KEPULAUAN SULA",
      "HALMAHERA SELATAN",
      "HALMAHERA UTARA",
      "HALMAHERA TIMUR",
      "PULAU MOROTAI",
      "PULAU TALIABU",
      "TERNATE",
      "TIDORE KEPULAUAN",
      "FAKFAK",
      "KAIMANA",
      "TELUK WONDAMA",
      "TELUK BINTUNI",
      "MANOKWARI",
      "SORONG SELATAN",
      "SORONG",
      "RAJA AMPAT",
      "TAMBRAUW",
      "MAYBRAT",
      "MANOKWARI SELATAN",
      "PEGUNUNGAN ARFAK",
      "SORONG",
      "MERAUKE",
      "JAYAWIJAYA",
      "JAYAPURA",
      "NABIRE",
      "KEPULAUAN YAPEN",
      "BIAK NUMFOR",
      "PANIAI",
      "PUNCAK JAYA",
      "MIMIKA",
      "BOVEN DIGOEL",
      "MAPPI",
      "ASMAT",
      "YAHUKIMO",
      "PEGUNUNGAN BINTANG",
      "TOLIKARA",
      "SARMI",
      "KEEROM",
      "WAROPEN",
      "SUPIORI",
      "MAMBERAMO RAYA",
      "NDUGA",
      "LANNY JAYA",
      "MAMBERAMO TENGAH",
      "YALIMO",
      "PUNCAK",
      "DOGIYAI",
      "INTAN JAYA",
      "DEIYAI",
      "JAYAPURA",
    ].map((city) => capitalizeFirstLetter(city))
  }
  