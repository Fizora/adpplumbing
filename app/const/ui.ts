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