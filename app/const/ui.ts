import type { LangCode } from "@/app/context/LanguageContext";

/**
 * Teks UI kecil yang sebelumnya di-hardcode berbahasa Inggris di komponen
 * (tombol nav, label kartu suburb, trust strip, dll.).
 * data.ts tidak diubah.
 */
export interface UiStrings {
  navCta: string;
  areasMenuTitle: string;
  areasViewAll: string;
  trust: [string, string, string];
  plumberIn: (name: string) => string;
  eta: string;
  alsoServicing: string;
  callBarLabel: string;
  bookShort: string;
  moreDetails: string;
}

export const uiByLang: Record<LangCode, UiStrings> = {
  en: {
    navCta: "Get a quote",
    areasMenuTitle: "Service areas",
    areasViewAll: "All areas",
    trust: [
      "NSW licensed and insured",
      "60-minute response",
      "Fixed price before work starts",
    ],
    plumberIn: (name) => `Plumber ${name}`,
    eta: "Typical arrival",
    alsoServicing: "Also servicing",
    callBarLabel: "24/7 emergency",
    bookShort: "Book online",
    moreDetails: "Add urgency and details",
  },
  id: {
    navCta: "Minta penawaran",
    areasMenuTitle: "Area layanan",
    areasViewAll: "Semua area",
    trust: [
      "Berlisensi & diasuransikan NSW",
      "Respons 60 menit",
      "Harga tetap sebelum kerja dimulai",
    ],
    plumberIn: (name) => `Plumber ${name}`,
    eta: "Estimasi tiba",
    alsoServicing: "Juga melayani",
    callBarLabel: "Darurat 24/7",
    bookShort: "Pesan online",
    moreDetails: "Tambah urgensi & detail",
  },
  ja: {
    navCta: "見積もり",
    areasMenuTitle: "対応エリア",
    areasViewAll: "すべてのエリア",
    trust: ["NSW公認・保険加入済み", "60分で到着", "作業前に固定価格を提示"],
    plumberIn: (name) => `${name}の配管工`,
    eta: "到着目安",
    alsoServicing: "その他の対応エリア",
    callBarLabel: "24時間緊急対応",
    bookShort: "オンライン予約",
    moreDetails: "緊急度・詳細を追加",
  },
  zh: {
    navCta: "获取报价",
    areasMenuTitle: "服务区域",
    areasViewAll: "全部区域",
    trust: ["NSW持牌并已投保", "60分钟响应", "动工前确定固定价格"],
    plumberIn: (name) => `${name}水管工`,
    eta: "预计到达",
    alsoServicing: "其他服务区域",
    callBarLabel: "24/7 紧急服务",
    bookShort: "在线预约",
    moreDetails: "补充紧急程度与详情",
  },
  th: {
    navCta: "ขอใบเสนอราคา",
    areasMenuTitle: "พื้นที่ให้บริการ",
    areasViewAll: "ทุกพื้นที่",
    trust: [
      "มีใบอนุญาตและประกัน NSW",
      "ตอบสนองใน 60 นาที",
      "ราคาคงที่ก่อนเริ่มงาน",
    ],
    plumberIn: (name) => `ช่างประปา ${name}`,
    eta: "ถึงภายใน",
    alsoServicing: "ให้บริการเพิ่มเติม",
    callBarLabel: "ฉุกเฉิน 24/7",
    bookShort: "จองออนไลน์",
    moreDetails: "เพิ่มความเร่งด่วนและรายละเอียด",
  },
  vi: {
    navCta: "Nhận báo giá",
    areasMenuTitle: "Khu vực phục vụ",
    areasViewAll: "Tất cả khu vực",
    trust: [
      "Có giấy phép & bảo hiểm NSW",
      "Phản hồi trong 60 phút",
      "Giá cố định trước khi làm",
    ],
    plumberIn: (name) => `Thợ ống nước ${name}`,
    eta: "Đến trong",
    alsoServicing: "Cũng phục vụ",
    callBarLabel: "Khẩn cấp 24/7",
    bookShort: "Đặt lịch",
    moreDetails: "Thêm mức khẩn cấp & chi tiết",
  },
};

// ... (kode uiByLang yang sudah ada sebelumnya biarkan saja) ...

// Tambahkan kode ini di bagian paling bawah:
export const suburbUiByLang: Record<LangCode, any> = {
  en: {
    home: "Home",
    serviceAreas: "Service areas",
    typicalArrival: "Typical arrival",
    dispatchUnit: "Dispatch unit",
    basedAt: "Based at",
    otherAreas: "Other service areas",
    unit: "Unit",
    covers: "Covers",
    onTheVan: "On the van",
    bookUnit: "Book the {name} unit",
    requestGoesTo:
      "Your request goes straight to the {unitName}, based at {base}. Expect a call or SMS within 10 minutes.",
    dispatchedTo: "Dispatched to {unitName} ({callsign}) for {suburb}.",
  },
  id: {
    home: "Beranda",
    serviceAreas: "Area Layanan",
    typicalArrival: "Waktu Kedatangan",
    dispatchUnit: "Unit Pengiriman",
    basedAt: "Basis Operasi",
    otherAreas: "Area layanan lainnya",
    unit: "Unit",
    covers: "Mencakup",
    onTheVan: "Di dalam van",
    bookUnit: "Pesan unit {name}",
    requestGoesTo:
      "Permintaan Anda langsung dikirim ke {unitName}, yang berbasis di {base}. Tunggu panggilan atau SMS dalam 10 menit.",
    dispatchedTo: "Dikirim ke {unitName} ({callsign}) untuk {suburb}.",
  },
  ja: {
    home: "ホーム",
    serviceAreas: "対応エリア",
    typicalArrival: "標準到着時間",
    dispatchUnit: "配車ユニット",
    basedAt: "拠点",
    otherAreas: "その他の対応エリア",
    unit: "ユニット",
    covers: "カバーエリア",
    onTheVan: "車両搭載装備",
    bookUnit: "{name}ユニットを予約",
    requestGoesTo:
      "リクエストは{base}を拠点とする{unitName}に直接送信されます。10分以内に電話またはSMSでご連絡します。",
    dispatchedTo: "{suburb}の{unitName} ({callsign}) に配車されました。",
  },
  zh: {
    home: "首页",
    serviceAreas: "服务区域",
    typicalArrival: "预计到达",
    dispatchUnit: "派遣小队",
    basedAt: "驻扎地点",
    otherAreas: "其他服务区域",
    unit: "小队",
    covers: "覆盖范围",
    onTheVan: "车内装备",
    bookUnit: "预约{name}小队",
    requestGoesTo:
      "您的请求将直接发送给驻扎在{base}的{unitName}。预计在10分钟内会接到电话或短信。",
    dispatchedTo: "已派遣{unitName} ({callsign}) 前往{suburb}。",
  },
  th: {
    home: "หน้าแรก",
    serviceAreas: "พื้นที่ให้บริการ",
    typicalArrival: "เวลามาถึงโดยปกติ",
    dispatchUnit: "หน่วยจัดส่ง",
    basedAt: "ฐานที่ตั้ง",
    otherAreas: "พื้นที่ให้บริการอื่นๆ",
    unit: "หน่วย",
    covers: "ครอบคลุม",
    onTheVan: "อุปกรณ์ในรถ",
    bookUnit: "จองหน่วย {name}",
    requestGoesTo:
      "คำขอของคุณจะถูกส่งตรงไปยัง {unitName} ซึ่งตั้งอยู่ที่ {base} คาดว่าจะได้รับโทรศัพท์หรือ SMS ภายใน 10 นาที",
    dispatchedTo: "จัดส่งไปยัง {unitName} ({callsign}) สำหรับ {suburb}",
  },
  vi: {
    home: "Trang chủ",
    serviceAreas: "Khu vực phục vụ",
    typicalArrival: "Thời gian đến dự kiến",
    dispatchUnit: "Đơn vị điều phối",
    basedAt: "Trụ sở",
    otherAreas: "Các khu vực phục vụ khác",
    unit: "Đơn vị",
    covers: "Bao gồm",
    onTheVan: "Trang bị trên xe",
    bookUnit: "Đặt đơn vị {name}",
    requestGoesTo:
      "Yêu cầu của bạn được gửi trực tiếp đến {unitName}, đóng tại {base}. Hãy chờ cuộc gọi hoặc SMS trong vòng 10 phút.",
    dispatchedTo: "Đã điều phối đến {unitName} ({callsign}) cho {suburb}.",
  },
};
