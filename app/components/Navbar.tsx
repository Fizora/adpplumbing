"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LuCheck, LuChevronDown, LuGlobe, LuMenu, LuX } from "react-icons/lu";
import {
  contactInfo,
  languagesList,
  navLinksByLang,
  suburbPages,
} from "@/app/const/data";
import { uiByLang } from "@/app/const/ui";
import { useLanguage } from "@/app/context/LanguageContext";

const linkBase =
  "rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const ui = uiByLang[lang];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lastY = useRef(0);
  const langRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  const navLinks = navLinksByLang[lang].filter((l) => l.href !== "/#booking");
  const currentLang = languagesList.find((l) => l.code === lang);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > lastY.current && y > 120) {
        setHidden(true);
        setAreasOpen(false);
        setLangOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || mobileOpen
            ? "border-line bg-porcelain/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Link
            href="/"
            aria-label={contactInfo.brandName}
            className="flex items-baseline gap-2"
          >
            <span className="text-2xl font-semibold tracking-tight text-ink">
              ADP
            </span>
            <span className="text-sm font-light text-muted">Plumbing</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              if (link.href === "/#suburb") {
                return (
                  <div
                    key={link.href}
                    ref={areasRef}
                    className="relative"
                    onMouseEnter={() => setAreasOpen(true)}
                    onMouseLeave={() => setAreasOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={areasOpen}
                      onClick={() => setAreasOpen((v) => !v)}
                      className={`${linkBase} inline-flex cursor-pointer items-center gap-1.5`}
                    >
                      {link.label}
                      <LuChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          areasOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {areasOpen && (
                      <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                        <div className="rounded-2xl border border-line bg-surface p-1.5 shadow-[0_24px_48px_-24px_rgba(14,43,49,0.35)]">
                          <p className="px-3 pb-1 pt-2 text-xs text-muted">
                            {ui.areasMenuTitle}
                          </p>
                          {suburbPages.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/suburb/${s.slug}`}
                              onClick={() => setAreasOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-porcelain"
                            >
                              <span className="text-sm font-medium text-ink">
                                {s.name}
                                <span className="ml-2 font-normal text-muted">
                                  {s.postcode}
                                </span>
                              </span>
                              <span className="text-xs text-muted">
                                {s.responseEta}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/#suburb"
                            onClick={() => setAreasOpen(false)}
                            className="mt-1 block rounded-xl border-t border-line px-3 py-2.5 text-sm font-medium text-marine hover:bg-porcelain"
                          >
                            {ui.areasViewAll}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={linkBase}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden px-3 text-sm font-medium text-ink transition-colors hover:text-copper xl:inline"
            >
              {contactInfo.displayPhone}
            </a>

            <div className="relative" ref={langRef}>
              <button
                type="button"
                aria-label="Select language"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <LuGlobe className="text-base" />
                {currentLang?.label}
                <LuChevronDown
                  className={`text-xs transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-line bg-surface p-1.5 shadow-[0_24px_48px_-24px_rgba(14,43,49,0.35)]">
                  {languagesList.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLang(item.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-porcelain ${
                        lang === item.code
                          ? "font-semibold text-marine"
                          : "text-ink/75"
                      }`}
                    >
                      {item.name}
                      {lang === item.code && <LuCheck className="text-base" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#booking"
              className="hidden rounded-full bg-marine px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-marine-hover sm:inline-flex"
            >
              {ui.navCta}
            </Link>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="cursor-pointer rounded-full p-2 text-2xl text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              {mobileOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-porcelain lg:hidden">
            <div className="container-x py-6">
              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-line py-3.5 text-2xl font-light tracking-tight text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <p className="mt-8 text-sm text-muted">{ui.areasMenuTitle}</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {suburbPages.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/suburb/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/#booking"
                onClick={() => setMobileOpen(false)}
                className="mt-8 flex w-full items-center justify-center rounded-full bg-marine px-6 py-3.5 text-base font-semibold text-white"
              >
                {ui.navCta}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
