"use client";

import { useState } from "react";
import { LuStar } from "react-icons/lu";
import { landingContentByLang } from "@/app/const/data";
import { useLanguage } from "@/app/context/LanguageContext";

// Dikurasi: 3 ulasan dengan layanan berbeda (saluran, air panas, relining)
const PICKED = [0, 1, 5];

const Testimonials = () => {
  const { lang } = useLanguage();
  const { testimonials } = landingContentByLang[lang];
  const [active, setActive] = useState(0);

  const picks = PICKED.map((i) => testimonials.reviews[i]).filter(Boolean);
  const review = picks[Math.min(active, picks.length - 1)];

  return (
    <section id="reviews" className="bg-surface py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <h2 className="heading-light text-4xl text-ink sm:text-5xl">
            {testimonials.heading}
          </h2>

          <div className="mt-8 flex items-end gap-4">
            <span className="text-6xl font-light leading-none tracking-tight text-ink">
              {testimonials.overallRating}
            </span>
            <div className="pb-1">
              <div className="flex gap-0.5 text-copper" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LuStar key={i} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted">
                {testimonials.totalReviews}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <figure
            key={active}
            id="review-panel"
            role="tabpanel"
            className="min-h-60"
          >
            <blockquote className="text-2xl font-light leading-snug tracking-tight text-ink sm:text-3xl">
              {review.text}
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-semibold text-ink">{review.name}</p>
              <p className="mt-0.5 text-sm text-muted">
                {review.suburb} — {review.service}
              </p>
            </figcaption>
          </figure>

          <div
            role="tablist"
            aria-label={testimonials.heading}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6"
          >
            {picks.map((r, i) => (
              <button
                key={r.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="review-panel"
                onClick={() => setActive(i)}
                className={`cursor-pointer border-b-2 pb-1 text-sm transition-colors ${
                  i === active
                    ? "border-ink font-semibold text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
