import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { suburbPages, type SuburbPageData } from "@/app/const/data";
// TAMBAHKAN BARIS INI:
import type { LangCode } from "@/app/context/LanguageContext";

// ... (sisa kode interface Station dan array stations biarkan saja) ...
/**
 * Station / armada yang bertugas di tiap suburb.
 * Form booking di halaman suburb dikirim ke unit ini.
 *
 * `coverage` diambil dari localLandmarkNote di data.ts.
 * `base` dan `equipment` kecuali Parramatta adalah placeholder —
 * ganti dengan data asli kalau brand ini dipakai sungguhan.
 */
export interface Station {
  slug: string;
  unitName: string;
  callsign: string;
  base: string;
  coverage: string[];
  equipment: string[];
}

export const stations: Station[] = [
  {
    slug: "parramatta",
    unitName: "Parramatta Unit",
    callsign: "ADP-PAR",
    base: "Church Street, Parramatta",
    coverage: ["Parramatta CBD", "North Parramatta", "Harris Park", "Westmead"],
    equipment: [
      "5,000 PSI hydro-jetter",
      "CCTV drain camera",
      "Hot water spare parts",
    ],
  },
  {
    slug: "chatswood",
    unitName: "Chatswood Unit",
    callsign: "ADP-CHW",
    base: "Chatswood CBD",
    coverage: ["Chatswood", "Chatswood West", "Roseville", "Willoughby"],
    equipment: [
      "Trenchless relining kit",
      "Continuous-flow hot water units",
      "Acoustic leak detector",
    ],
  },
  {
    slug: "bondi",
    unitName: "Bondi Unit",
    callsign: "ADP-BND",
    base: "Bondi Junction",
    coverage: ["Bondi Beach", "North Bondi", "Bondi Junction", "Tamarama"],
    equipment: [
      "Marine-grade brass fittings",
      "High-pressure jetter",
      "Thermal leak camera",
    ],
  },
  {
    slug: "cronulla",
    unitName: "Cronulla Unit",
    callsign: "ADP-CRN",
    base: "Cronulla town centre",
    coverage: ["Cronulla", "Woolooware", "Caringbah", "Miranda"],
    equipment: [
      "High-pressure jetter",
      "Gas bayonet & fitting kit",
      "Stormwater pit clearing gear",
    ],
  },
];

export function getSuburb(slug: string): SuburbPageData {
  const suburb = suburbPages.find((s) => s.slug === slug);
  if (!suburb) notFound();
  return suburb;
}

export function getStation(slug: string): Station {
  const station = stations.find((s) => s.slug === slug);
  if (!station) notFound();
  return station;
}

export function suburbMetadata(slug: string): Metadata {
  const { metaTitle, metaDescription } = getSuburb(slug);
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: { title: metaTitle, description: metaDescription },
  };
}

// Tambahkan di bagian bawah app/const/suburb.ts

export const stationsByLang: Record<LangCode, Station[]> = {
  en: stations, // Asli
  id: [
    {
      ...stations[0],
      unitName: "Unit Parramatta",
      base: "Church Street, Parramatta",
      equipment: [
        "Hydro-jetter 5.000 PSI",
        "Kamera saluran CCTV",
        "Suku cadang air panas",
      ],
    },
    {
      ...stations[1],
      unitName: "Unit Chatswood",
      base: "Pusat Kota Chatswood",
      equipment: [
        "Kit pelapisan tanpa galian",
        "Unit air panas aliran kontinu",
        "Detektor kebocoran akustik",
      ],
    },
    {
      ...stations[2],
      unitName: "Unit Bondi",
      base: "Bondi Junction",
      equipment: [
        "Fitting kuningan kelas marine",
        "Jetter tekanan tinggi",
        "Kamera kebocoran termal",
      ],
    },
    {
      ...stations[3],
      unitName: "Unit Cronulla",
      base: "Pusat kota Cronulla",
      equipment: [
        "Jetter tekanan tinggi",
        "Kit pemasangan gas bayonet",
        "Peralatan pembersih pit air hujan",
      ],
    },
  ],
  ja: [
    {
      ...stations[0],
      unitName: "パラマッタユニット",
      base: "チャーチストリート、パラマッタ",
      equipment: [
        "5,000 PSI ハイドロジェッター",
        "CCTV排水管カメラ",
        "給湯器スペアパーツ",
      ],
    },
    {
      ...stations[1],
      unitName: "チャッツウッドユニット",
      base: "チャッツウッドCBD",
      equipment: ["非開削ライニングキット", "連続流給湯器", "音響漏水探知機"],
    },
    {
      ...stations[2],
      unitName: "ボンダイユニット",
      base: "ボンダイジャンクション",
      equipment: [
        "船舶グレードの真鍮継手",
        "高圧ジェッター",
        "サーマル漏水カメラ",
      ],
    },
    {
      ...stations[3],
      unitName: "クロヌラユニット",
      base: "クロヌラタウンセンター",
      equipment: ["高圧ジェッター", "ガス口金具キット", "雨水桝清掃用具"],
    },
  ],
  zh: [
    {
      ...stations[0],
      unitName: "Parramatta小队",
      base: "Parramatta Church Street",
      equipment: ["5,000 PSI高压水射流机", "CCTV管道摄像头", "热水器备件"],
    },
    {
      ...stations[1],
      unitName: "Chatswood小队",
      base: "Chatswood CBD",
      equipment: ["非开挖内衬套件", "即热式热水器", "声学漏水探测器"],
    },
    {
      ...stations[2],
      unitName: "Bondi小队",
      base: "Bondi Junction",
      equipment: ["船用级黄铜配件", "高压水射流机", "热成像漏水摄像头"],
    },
    {
      ...stations[3],
      unitName: "Cronulla小队",
      base: "Cronulla镇中心",
      equipment: ["高压水射流机", "燃气接口安装套件", "雨水坑清理工具"],
    },
  ],
  th: [
    {
      ...stations[0],
      unitName: "หน่วย Parramatta",
      base: "Church Street, Parramatta",
      equipment: [
        "Hydro-jetter 5,000 PSI",
        "กล้องตรวจท่อ CCTV",
        "อะไหล่เครื่องทำน้ำร้อน",
      ],
    },
    {
      ...stations[1],
      unitName: "หน่วย Chatswood",
      base: "ใจกลางเมือง Chatswood",
      equipment: [
        "ชุดบุท่อไม่ขุด",
        "เครื่องทำน้ำร้อนแบบต่อเนื่อง",
        "เครื่องตรวจจับการรั่วซึมด้วยเสียง",
      ],
    },
    {
      ...stations[2],
      unitName: "หน่วย Bondi",
      base: "Bondi Junction",
      equipment: [
        "ข้อต่อทองเหลืองระดับmarine",
        "เครื่องฉีดน้ำแรงดันสูง",
        "กล้องความร้อนตรวจจับการรั่ว",
      ],
    },
    {
      ...stations[3],
      unitName: "หน่วย Cronulla",
      base: "ใจกลางเมือง Cronulla",
      equipment: [
        "เครื่องฉีดน้ำแรงดันสูง",
        "ชุดติดตั้งจุดแก๊ส",
        "อุปกรณ์ทำความสะอาดบ่อน้ำฝน",
      ],
    },
  ],
  vi: [
    {
      ...stations[0],
      unitName: "Đơn vị Parramatta",
      base: "Church Street, Parramatta",
      equipment: [
        "Máy phun áp lực 5.000 PSI",
        "Camera cống CCTV",
        "Phụ tùng nước nóng",
      ],
    },
    {
      ...stations[1],
      unitName: "Đơn vị Chatswood",
      base: "Trung tâm Chatswood",
      equipment: [
        "Bộ dụng cụ lót ống không đào",
        "Máy nước nóng liên tục",
        "Máy dò rò rỉ âm thanh",
      ],
    },
    {
      ...stations[2],
      unitName: "Đơn vị Bondi",
      base: "Bondi Junction",
      equipment: [
        "Phụ kiện đồng thau cấp biển",
        "Máy phun áp lực cao",
        "Camera nhiệt dò rò rỉ",
      ],
    },
    {
      ...stations[3],
      unitName: "Đơn vị Cronulla",
      base: "Trung tâm thị trấn Cronulla",
      equipment: [
        "Máy phun áp lực cao",
        "Bộ lắp đặt gas",
        "Thiết bị vệ sinh hố ga",
      ],
    },
  ],
};
