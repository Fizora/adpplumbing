"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";

const Services = () => {
  const { lang } = useLanguage();
  const { services } = landingContentByLang[lang];
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="heading-light text-4xl text-ink sm:text-5xl lg:col-span-7">
            {services.heading}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            {services.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Panel gambar: ikut berganti sesuai layanan yang dibuka */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-mist">
                {services.items.map((item, i) => (
                  <Image
                    key={item.title}
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="40vw"
                    className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="divide-y divide-line border-y border-line lg:col-span-7">
            {services.items.map((item, i) => {
              const open = i === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActive(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`text-2xl tracking-tight transition-colors sm:text-[1.75rem] ${
                        open
                          ? "font-medium text-ink"
                          : "font-light text-ink/55 hover:text-ink"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="flex shrink-0 items-center gap-4">
                      <span className="hidden text-sm text-muted sm:inline">
                        {item.tag}
                      </span>
                      <LuPlus
                        className={`text-xl text-ink transition-transform duration-300 ${
                          open ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    inert={!open}
                    className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-7 pr-10">
                        <p className="max-w-lg leading-relaxed text-muted">
                          {item.description}
                        </p>
                        <p className="mt-3 text-sm font-medium text-copper">
                          {item.priceHint}
                        </p>

                        <div className="relative mt-5 aspect-16/10 overflow-hidden rounded-2xl bg-mist lg:hidden">
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>

                        <Link
                          href={item.href}
                          className="mt-5 inline-flex rounded-full bg-marine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-marine-hover"
                        >
                          {item.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
