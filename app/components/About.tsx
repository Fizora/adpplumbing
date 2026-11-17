"use client";

import Image from "next/image";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";

const About = () => {
  const { lang } = useLanguage();
  const { about } = landingContentByLang[lang];

  // Dikurasi: 2 angka (tahun & jumlah pekerjaan), 3 pilar, 1 paragraf.
  // Rating & 24/7 sudah muncul di hero dan floating bar.
  const stats = [about.stats[0], about.stats[2]];
  const pillars = about.pillars.slice(0, 3);

  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-mist">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="heading-light text-4xl text-ink sm:text-5xl">
            {about.heading}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {about.paragraphs[0]}
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-sm text-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 text-4xl font-light tracking-tight text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8"
              >
                <h3 className="font-semibold text-ink">{pillar.title}</h3>
                <p className="text-muted">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
