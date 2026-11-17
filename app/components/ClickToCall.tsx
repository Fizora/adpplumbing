"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuExternalLink, LuMail, LuPhone, LuX } from "react-icons/lu";
import { contactInfo, languagesList } from "@/app/const/data";
import { uiByLang } from "@/app/const/ui";
import { useLanguage, LangCode } from "@/app/context/LanguageContext";

const NOTICE_KEY = "adp-demo-notice-seen";

const modalTranslations: Record<
  LangCode,
  {
    badge: string;
    title: string;
    introPrefix: string;
    introBold: string;
    introSuffix: string;
    disclaimerTitle: string;
    disclaimerPart1: string;
    disclaimerPart2: string;
    disclaimerPart3: string;
    visitBtn: string;
    contactBtn: string;
    closeBtn: string;
  }
> = {
  en: {
    badge: "Pro Tier Demo Notice",
    title: "Demo Website & Content by Lexentify",
    introPrefix:
      "The entire website design, fictional brand name (ADP Plumbing), and written content on this page are a portfolio ",
    introBold: "Pro Tier demo project (5 Pages)",
    introSuffix: " created by ",
    disclaimerTitle: "Image Asset Disclaimer:",
    disclaimerPart1:
      "All photos and visual assets used in this demo are free assets sourced from ",
    disclaimerPart2:
      ". If you are the copyright owner or object to the use of any image or content, please contact us at ",
    disclaimerPart3: " so we can remove it immediately.",
    visitBtn: "Visit Lexentify.com",
    contactBtn: "Contact Us",
    closeBtn: "I Understand, Continue to Demo",
  },
  id: {
    badge: "Pemberitahuan Demo Pro Tier",
    title: "Website & Konten Demo by Lexentify",
    introPrefix:
      "Seluruh tampilan website, nama merek fiktif (ADP Plumbing), serta teks konten di dalam halaman ini merupakan ",
    introBold: "demo project Pro Tier (5 Halaman)",
    introSuffix: " portofolio yang dibuat oleh ",
    disclaimerTitle: "Penafikan Aset Gambar (Disclaimer):",
    disclaimerPart1:
      "Seluruh aset foto/gambar yang digunakan dalam demo ini merupakan aset gratis yang diperoleh melalui ",
    disclaimerPart2:
      ". Apabila Anda adalah pemilik hak cipta atau merasa keberatan dengan penggunaan gambar/konten tertentu, silakan hubungi kami melalui ",
    disclaimerPart3: " agar dapat segera kami hapus.",
    visitBtn: "Kunjungi Lexentify.com",
    contactBtn: "Hubungi Kami",
    closeBtn: "Saya Mengerti, Lanjutkan Melihat Demo",
  },
  ja: {
    badge: "Proプラン デモのお知らせ",
    title: "Lexentifyによるデモサイトおよびコンテンツ",
    introPrefix:
      "当ページのウェブサイトデザイン、架空のブランド名（ADP Plumbing）、およびすべてのテキストコンテンツは、",
    introBold: "Proプラン デモプロジェクト（全5ページ）",
    introSuffix: "（ポートフォリオ作品）として制作されたものです：",
    disclaimerTitle: "画像素材に関する免責事項：",
    disclaimerPart1:
      "本デモで使用されているすべての写真・画像素材は、フリー素材サイト ",
    disclaimerPart2:
      " より取得したものです。著作権者の方で、画像やコンテンツの使用に異議がある場合は、",
    disclaimerPart3: " までご連絡いただければ速やかに削除いたします。",
    visitBtn: "Lexentify.com を訪問",
    contactBtn: "お問い合わせ",
    closeBtn: "理解しました（デモを見る）",
  },
  zh: {
    badge: "Pro 套餐演示声明",
    title: "由 Lexentify 制作的演示网站与内容",
    introPrefix:
      "本页面的整体网站设计、虚构品牌名称（ADP Plumbing）以及所有文字内容均为作品集 ",
    introBold: "Pro 套餐演示项目（5个页面）",
    introSuffix: "，制作方为 ",
    disclaimerTitle: "图片素材免责声明：",
    disclaimerPart1: "本演示中使用的所有照片与视觉素材均来自免费素材平台 ",
    disclaimerPart2:
      "。如果您是版权所有者或对某些图片/内容的使用有异议，请通过 ",
    disclaimerPart3: " 与我们联系，我们将立即予以删除。",
    visitBtn: "访问 Lexentify.com",
    contactBtn: "联系我们",
    closeBtn: "我已了解，继续浏览演示",
  },
  th: {
    badge: "ประกาศโปรเจกต์ตัวอย่างแพ็กเกจ Pro",
    title: "เว็บไซต์และเนื้อหาตัวอย่างโดย Lexentify",
    introPrefix:
      "การออกแบบเว็บไซต์ทั้งหมด ชื่อแบรนด์สมมติ (ADP Plumbing) และเนื้อหาข้อความในหน้านี้เป็น ",
    introBold: "โปรเจกต์ตัวอย่างแพ็กเกจ Pro (5 หน้า)",
    introSuffix: " สำหรับพอร์ตโฟลิโอที่สร้างโดย ",
    disclaimerTitle: "ข้อจำกัดความรับผิดชอบเกี่ยวกับรูปภาพ:",
    disclaimerPart1: "รูปภาพและสื่อทั้งหมดที่ใช้ในเดโมนี้เป็นทรัพยากรฟรีจาก ",
    disclaimerPart2:
      " หากคุณเป็นเจ้าของลิขสิทธิ์หรือไม่พึงพอใจกับการใช้รูปภาพหรือเนื้อหาใดๆ โปรดติดต่อเราที่ ",
    disclaimerPart3: " เพื่อดำเนินการลบออกทันที",
    visitBtn: "เยี่ยมชม Lexentify.com",
    contactBtn: "ติดต่อเรา",
    closeBtn: "ฉันเข้าใจแล้ว เข้าสู่หน้าตัวอย่าง",
  },
  vi: {
    badge: "Thông báo Dự án Mẫu Gói Pro",
    title: "Website & Nội dung Demo bởi Lexentify",
    introPrefix:
      "Toàn bộ giao diện website, tên thương hiệu hư cấu (ADP Plumbing) và nội dung văn bản trên trang này là ",
    introBold: "dự án demo Gói Pro (5 Trang)",
    introSuffix: " thuộc danh mục sản phẩm được thực hiện bởi ",
    disclaimerTitle: "Tuyên bố miễn trừ trách nhiệm hình ảnh:",
    disclaimerPart1:
      "Tất cả hình ảnh được sử dụng trong bản demo này đều là tài nguyên miễn phí từ ",
    disclaimerPart2:
      ". Nếu bạn là chủ sở hữu bản quyền hoặc không hài lòng với việc sử dụng bất kỳ hình ảnh/nội dung nào, vui lòng liên hệ qua ",
    disclaimerPart3: " để chúng tôi gỡ bỏ ngay lập tức.",
    visitBtn: "Truy cập Lexentify.com",
    contactBtn: "Liên hệ",
    closeBtn: "Tôi đã hiểu, Tiếp tục xem Demo",
  },
};

const ClickToCall = () => {
  const { lang, setLang } = useLanguage();
  const ui = uiByLang[lang];
  const t = modalTranslations[lang];

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [barVisible, setBarVisible] = useState(false);

  // Modal demo hanya sekali per sesi (tidak muncul lagi tiap pindah halaman)
  useEffect(() => {
    try {
      if (sessionStorage.getItem(NOTICE_KEY)) return;
    } catch {
      /* storage tidak tersedia, tampilkan saja */
    }
    setShowDisclaimer(true);
  }, []);

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
    try {
      sessionStorage.setItem(NOTICE_KEY, "1");
    } catch {
      /* abaikan */
    }
  };

  useEffect(() => {
    if (!showDisclaimer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDisclaimer();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showDisclaimer]);

  // Bar call baru muncul setelah hero terlewat, agar tidak menggandakan CTA hero
  useEffect(() => {
    const onScroll = () => setBarVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 motion-reduce:transition-none sm:inset-x-auto sm:bottom-6 sm:right-6 ${
          barVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3 rounded-full bg-marine p-1.5 pl-5 text-white shadow-[0_16px_40px_-16px_rgba(10,32,37,0.6)]">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-3 py-1"
          >
            <LuPhone className="shrink-0 text-lg text-marine-muted" />
            <span className="leading-tight">
              <span className="block text-xs text-marine-muted">
                {ui.callBarLabel}
              </span>
              <span className="block text-base font-semibold">
                {contactInfo.displayPhone}
              </span>
            </span>
          </a>

          <Link
            href="#booking"
            className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-semibold text-marine transition-colors hover:bg-mist"
          >
            {ui.bookShort}
          </Link>
        </div>
      </div>

      {showDisclaimer && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-marine-deep/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-3xl bg-surface p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-1">
                {languagesList.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLang(item.code)}
                    className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      lang === item.code
                        ? "bg-marine text-white"
                        : "text-muted hover:bg-porcelain hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={closeDisclaimer}
                aria-label="Close"
                className="shrink-0 cursor-pointer rounded-full p-1.5 text-xl text-muted transition-colors hover:bg-porcelain hover:text-ink"
              >
                <LuX />
              </button>
            </div>

            <p className="mt-6 text-sm font-medium text-copper">{t.badge}</p>
            <h3
              id="demo-modal-title"
              className="mt-1 text-2xl font-semibold tracking-tight text-ink"
            >
              {t.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t.introPrefix}
              <strong className="font-semibold text-ink">{t.introBold}</strong>
              {t.introSuffix}
              <a
                href="https://lexentify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-marine underline underline-offset-2 hover:text-copper"
              >
                lexentify.com
                <LuExternalLink className="text-xs" />
              </a>
              .
            </p>

            <div className="mt-4 rounded-2xl bg-porcelain p-4 text-sm leading-relaxed text-muted">
              <strong className="mb-1 block font-semibold text-ink">
                {t.disclaimerTitle}
              </strong>
              {t.disclaimerPart1}
              <span className="font-medium text-ink">Pexels</span>
              {t.disclaimerPart2}
              <a
                href="mailto:info@lexentify.com"
                className="font-semibold text-marine underline underline-offset-2 hover:text-copper"
              >
                info@lexentify.com
              </a>
              {t.disclaimerPart3}
            </div>

            <button
              type="button"
              autoFocus
              onClick={closeDisclaimer}
              className="mt-6 w-full cursor-pointer rounded-full bg-marine px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-marine-hover"
            >
              {t.closeBtn}
            </button>

            <div className="mt-4 flex items-center justify-center gap-6 text-sm">
              <a
                href="https://lexentify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-ink"
              >
                {t.visitBtn}
                <LuExternalLink className="text-base" />
              </a>
              <a
                href="mailto:info@lexentify.com"
                className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-ink"
              >
                <LuMail className="text-base" />
                {t.contactBtn}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickToCall;
