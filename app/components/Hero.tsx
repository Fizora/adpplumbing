"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuCircleCheck,
  LuClock,
  LuPhone,
  LuShieldCheck,
  LuStar,
} from "react-icons/lu";
import { landingContentByLang } from "@/app/const/data";
import { uiByLang } from "@/app/const/ui";
import { useLanguage } from "@/app/context/LanguageContext";

const trustIcons = [LuShieldCheck, LuClock, LuCircleCheck];

const Hero = () => {
  const { lang } = useLanguage();
  const { hero, testimonials } = landingContentByLang[lang];
  const ui = uiByLang[lang];

  return (
    <section className="pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="heading-light text-[2.5rem] text-ink sm:text-6xl lg:text-[4.25rem]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-marine px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-marine-hover"
              >
                {hero.primaryCta.text}
              </Link>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-2 py-3 text-base font-medium text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-copper"
              >
                <LuPhone className="text-copper" />
                {hero.secondaryCta.text}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-t-full rounded-b-3xl bg-mist lg:max-w-none">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-surface/95 px-4 py-2 text-sm shadow-sm backdrop-blur">
                <LuStar className="text-copper" fill="currentColor" />
                <span className="font-semibold text-ink">
                  {testimonials.overallRating}
                </span>
                <span className="text-muted">{testimonials.totalReviews}</span>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-8">
          {ui.trust.map((text, i) => {
            const Icon = trustIcons[i];
            return (
              <li
                key={text}
                className="flex items-center gap-3 text-sm text-ink/80"
              >
                <Icon className="shrink-0 text-lg text-copper" />
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
