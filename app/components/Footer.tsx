"use client";

import Link from "next/link";
import { contactInfo, landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";

const colTitle = "text-sm font-semibold text-white";
const colLink = "text-marine-muted transition-colors hover:text-white";

const Footer = () => {
  const { lang } = useLanguage();
  const { footer } = landingContentByLang[lang];

  return (
    <footer className="bg-marine-deep text-marine-muted">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="text-3xl font-light tracking-tight text-white"
            >
              {contactInfo.brandName}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {footer.description}
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed">
              {footer.license}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-8">
            <div>
              <h3 className={colTitle}>{footer.navTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {footer.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={colLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={colTitle}>{footer.suburbsTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {footer.suburbLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={colLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={colTitle}>{footer.contactTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="font-semibold text-white transition-colors hover:text-marine-muted"
                  >
                    {contactInfo.displayPhone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactInfo.email}`} className={colLink}>
                    {contactInfo.email}
                  </a>
                </li>
                <li className="leading-relaxed">
                  {contactInfo.operationalHours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/#booking" className={colLink}>
              {footer.privacyLabel}
            </Link>
            <Link href="/#booking" className={colLink}>
              {footer.termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
