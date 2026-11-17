"use client";

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { landingContentByLang } from "@/app/const/data";
import { uiByLang } from "@/app/const/ui";
import { useLanguage } from "@/app/context/LanguageContext";

const Suburbs = () => {
  const { lang } = useLanguage();
  const { suburbs } = landingContentByLang[lang];
  const ui = uiByLang[lang];

  return (
    <section id="suburb" className="bg-marine py-20 text-mist sm:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="heading-light text-4xl text-white sm:text-5xl lg:col-span-7">
            {suburbs.heading}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-marine-muted lg:col-span-5 lg:justify-self-end">
            {suburbs.subheading}
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {suburbs.featuredSuburbs.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group flex min-h-56 flex-col justify-between gap-10 border-b border-white/15 py-8 transition-colors hover:bg-white/5 sm:px-8 lg:border-b-0 ${
                i > 0 ? "lg:border-l lg:border-white/15" : "lg:pl-0"
              } ${i % 2 === 1 ? "sm:border-l sm:border-white/15" : ""}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm text-marine-muted">
                    {s.postcode} · {s.region}
                  </p>
                  <LuArrowUpRight className="text-xl text-marine-muted transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-light tracking-tight text-white">
                  {ui.plumberIn(s.name)}
                </h3>
              </div>

              <div>
                <p className="text-sm text-marine-muted">{ui.eta}</p>
                <p className="mt-1 text-2xl font-light text-white">{s.eta}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-marine-muted">
            <span className="text-mist">{ui.alsoServicing}: </span>
            {suburbs.otherSuburbs.join(", ")}
          </p>
          <Link
            href={suburbs.cta.href}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-marine transition-colors hover:bg-mist"
          >
            {suburbs.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Suburbs;
