"use client"; // Pastikan ini ada di paling atas

import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuPhone, LuStar } from "react-icons/lu";
import { contactInfo, suburbPagesByLang } from "@/app/const/data";
import { stationsByLang } from "@/app/const/suburb";
import { suburbUiByLang } from "@/app/const/ui";
import { useLanguage } from "@/app/context/LanguageContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ClickToCall from "@/app/components/ClickToCall";
import StationBooking from "@/app/components/suburb/StationBooking";

const SuburbTemplate = ({ slug }: { slug: string }) => {
  const { lang } = useLanguage();

  // Ambil data sesuai bahasa aktif
  const suburbs = suburbPagesByLang[lang];
  const stations = stationsByLang[lang];
  const ui = suburbUiByLang[lang];

  const suburb = suburbs.find((s) => s.slug === slug) || suburbs[0]; // Fallback
  const station = stations.find((s) => s.slug === slug) || stations[0]; // Fallback
  const others = suburbs.filter((s) => s.slug !== slug);
  const review = suburb.localReview;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pb-16 pt-28 sm:pb-24 sm:pt-36">
          <div className="container-x">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <nav aria-label="Breadcrumb" className="text-sm text-muted">
                  <ol className="flex flex-wrap items-center gap-x-2">
                    <li>
                      <Link href="/" className="hover:text-ink">
                        {ui.home}
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link href="/#suburb" className="hover:text-ink">
                        {ui.serviceAreas}
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-ink">
                      {suburb.name}
                    </li>
                  </ol>
                </nav>

                <h1 className="heading-light mt-6 text-[2.5rem] text-ink sm:text-6xl lg:text-[4rem]">
                  {suburb.heroTitle}
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  {suburb.heroDescription}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <Link
                    href="#booking"
                    className="inline-flex items-center justify-center rounded-full bg-marine px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-marine-hover"
                  >
                    {ui.bookUnit.replace("{name}", suburb.name)}
                  </Link>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex items-center justify-center gap-2.5 px-2 py-3 text-base font-medium text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-copper"
                  >
                    <LuPhone className="text-copper" />
                    {contactInfo.displayPhone}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-t-full rounded-b-3xl bg-mist lg:max-w-none">
                  <Image
                    src="/img/hero.jpg"
                    alt={`Licensed ADP Plumbing technician servicing ${suburb.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface/95 px-4 py-2 text-sm shadow-sm backdrop-blur">
                    <span className="font-semibold text-ink">
                      {suburb.name} {suburb.postcode}
                    </span>
                    <span className="ml-2 text-muted">{suburb.region}</span>
                  </div>
                </div>
              </div>
            </div>

            <dl className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <dt className="text-sm text-muted">{ui.typicalArrival}</dt>
                <dd className="mt-1 text-2xl font-light tracking-tight text-ink">
                  {suburb.responseEta}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{ui.dispatchUnit}</dt>
                <dd className="mt-1 text-2xl font-light tracking-tight text-ink">
                  {station.unitName}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{ui.basedAt}</dt>
                <dd className="mt-1 text-2xl font-light tracking-tight text-ink">
                  {station.base}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Local angle */}
        <section className="bg-surface py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <h2 className="heading-light text-4xl text-ink sm:text-5xl">
                {suburb.localAngleTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {suburb.localAngleDescription}
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul className="divide-y divide-line border-y border-line">
                {suburb.commonLocalIssues.map((issue) => (
                  <li key={issue} className="py-5 text-lg text-ink">
                    {issue}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {suburb.localLandmarkNote}
              </p>
            </div>
          </div>
        </section>

        {/* Local review */}
        <section className="py-20 sm:py-28">
          <div className="container-x">
            <div className="flex gap-0.5 text-copper" aria-label="5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <LuStar key={i} fill="currentColor" />
              ))}
            </div>
            <figure className="mt-6 max-w-4xl">
              <blockquote className="text-2xl font-light leading-snug tracking-tight text-ink sm:text-3xl">
                {review.text}
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold text-ink">{review.name}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {review.street} — {review.service}, {review.timeAgo}
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Booking */}
        <StationBooking suburb={suburb} station={station} />

        {/* Area lain */}
        <section className="bg-marine py-16 text-mist sm:py-20">
          <div className="container-x">
            <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
              {ui.otherAreas}
            </h2>
            <div className="mt-8 grid border-t border-white/15 sm:grid-cols-3">
              {others.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/suburb/${s.slug}`}
                  className={`group flex items-start justify-between gap-4 border-b border-white/15 py-6 transition-colors hover:bg-white/5 sm:border-b-0 sm:px-8 ${
                    i > 0 ? "sm:border-l sm:border-white/15" : "sm:pl-0"
                  }`}
                >
                  <div>
                    <p className="text-xl font-light text-white">{s.name}</p>
                    <p className="mt-1 text-sm text-marine-muted">
                      {s.postcode} · {s.responseEta}
                    </p>
                  </div>
                  <LuArrowUpRight className="text-xl text-marine-muted transition-colors group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ClickToCall />
      <Footer />
    </>
  );
};

export default SuburbTemplate;
