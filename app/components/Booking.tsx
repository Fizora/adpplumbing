"use client";

import { useEffect, useState } from "react";
import { LuChevronDown, LuCircleCheck, LuPhone } from "react-icons/lu";
import { contactInfo, landingContentByLang } from "@/app/const/data";
import { uiByLang } from "@/app/const/ui";
import { useLanguage } from "@/app/context/LanguageContext";

interface BookingProps {
  defaultSuburb?: string;
}

const field =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink transition-shadow placeholder:text-muted/50 focus:border-ink focus:shadow-[0_1px_0_0_var(--color-ink)] focus:outline-none focus-visible:outline-none";
const label = "mb-0.5 block text-sm text-muted";

const Booking = ({ defaultSuburb = "" }: BookingProps) => {
  const { lang } = useLanguage();
  const { booking } = landingContentByLang[lang];
  const ui = uiByLang[lang];

  const [submitted, setSubmitted] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: defaultSuburb,
    service: booking.serviceOptions[0],
    urgency: booking.urgencyOptions[0],
    notes: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      suburb: defaultSuburb || prev.suburb,
      service: booking.serviceOptions[0],
      urgency: booking.urgencyOptions[0],
    }));
  }, [lang, defaultSuburb, booking.serviceOptions, booking.urgencyOptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update =
    (key: keyof typeof formData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setFormData({ ...formData, [key]: e.target.value });

  return (
    <section id="booking" className="py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <h2 className="heading-light text-4xl text-ink sm:text-5xl">
              {booking.heading}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {booking.subheading}
            </p>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="text-sm text-muted">{booking.urgentCallLabel}</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="mt-2 inline-flex items-center gap-3 text-3xl font-light tracking-tight text-ink transition-colors hover:text-copper sm:text-4xl"
            >
              <LuPhone className="text-2xl text-copper" />
              {contactInfo.displayPhone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-96 flex-col items-start justify-center rounded-3xl bg-surface p-8 sm:p-12">
              <LuCircleCheck className="text-4xl text-copper" />
              <h3 className="mt-5 text-3xl font-light tracking-tight text-ink">
                {booking.successState.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                {booking.successState.thanks}{" "}
                <span className="font-semibold text-ink">{formData.name}</span>.{" "}
                {booking.successState.desc1}{" "}
                <span className="font-semibold text-ink">{formData.phone}</span>{" "}
                {booking.successState.desc2}{" "}
                <span className="font-semibold text-ink">
                  {formData.service}
                </span>
                .
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 cursor-pointer text-sm font-semibold text-marine underline underline-offset-4 hover:text-copper"
              >
                {booking.successState.resetBtn}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-surface p-6 sm:p-10"
            >
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-name" className={label}>
                    {booking.formLabels.name}
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={booking.formLabels.namePlaceholder}
                    value={formData.name}
                    onChange={update("name")}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className={label}>
                    {booking.formLabels.phone}
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={booking.formLabels.phonePlaceholder}
                    value={formData.phone}
                    onChange={update("phone")}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="booking-suburb" className={label}>
                    {booking.formLabels.suburb}
                  </label>
                  <input
                    id="booking-suburb"
                    type="text"
                    required
                    autoComplete="postal-code"
                    placeholder={booking.formLabels.suburbPlaceholder}
                    value={formData.suburb}
                    onChange={update("suburb")}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="booking-service" className={label}>
                    {booking.formLabels.service}
                  </label>
                  <select
                    id="booking-service"
                    value={formData.service}
                    onChange={update("service")}
                    className={field}
                  >
                    {booking.serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                aria-expanded={showMore}
                onClick={() => setShowMore((v) => !v)}
                className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-marine transition-colors hover:text-copper"
              >
                {ui.moreDetails}
                <LuChevronDown
                  className={`transition-transform duration-200 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                inert={!showMore}
                className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                  showMore ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-7 pt-6">
                    <div>
                      <label htmlFor="booking-urgency" className={label}>
                        {booking.formLabels.urgency}
                      </label>
                      <select
                        id="booking-urgency"
                        value={formData.urgency}
                        onChange={update("urgency")}
                        className={field}
                      >
                        {booking.urgencyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="booking-notes" className={label}>
                        {booking.formLabels.notes}
                      </label>
                      <textarea
                        id="booking-notes"
                        rows={3}
                        placeholder={booking.formLabels.notesPlaceholder}
                        value={formData.notes}
                        onChange={update("notes")}
                        className={`${field} resize-none`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 w-full cursor-pointer rounded-full bg-marine px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-marine-hover"
              >
                {booking.submitText}
              </button>

              <p className="mt-4 text-center text-sm text-muted">
                {booking.disclaimer}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
