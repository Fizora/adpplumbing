"use client";

import { useState } from "react";
import { LuChevronDown, LuCircleCheck, LuPhone } from "react-icons/lu";
import {
  contactInfo,
  landingContentByLang,
  type SuburbPageData,
} from "@/app/const/data";
import type { Station } from "@/app/const/suburb";
import { uiByLang, suburbUiByLang } from "@/app/const/ui";
import { useLanguage } from "@/app/context/LanguageContext";

interface StationBookingProps {
  suburb: SuburbPageData;
  station: Station;
}

const field =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink transition-shadow placeholder:text-muted/50 focus:border-ink focus:shadow-[0_1px_0_0_var(--color-ink)] focus:outline-none focus-visible:outline-none";
const label = "mb-0.5 block text-sm text-muted";

const StationBooking = ({ suburb, station }: StationBookingProps) => {
  const { lang } = useLanguage();
  const { booking } = landingContentByLang[lang];
  const ui = uiByLang[lang];
  const suburbUi = suburbUiByLang[lang];

  const [submitted, setSubmitted] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // PERBAIKAN: Simpan index (angka) alih-alih string
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburbIndex: 0,
    serviceIndex: 0,
    urgencyIndex: 0,
    notes: "",
  });

  // Ambil nilai string asli berdasarkan index dan bahasa yang aktif saat ini
  const selectedSuburb =
    station.coverage[formData.suburbIndex] || station.coverage[0];
  const selectedService =
    booking.serviceOptions[formData.serviceIndex] || booking.serviceOptions[0];
  const selectedUrgency =
    booking.urgencyOptions[formData.urgencyIndex] || booking.urgencyOptions[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST ke /api/booking dengan
    // { ...formData, suburb: selectedSuburb, service: selectedService, urgency: selectedUrgency, unit: station.callsign }
    setSubmitted(true);
  };

  const updateIndex =
    (key: "suburbIndex" | "serviceIndex" | "urgencyIndex") =>
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setFormData({ ...formData, [key]: Number(e.target.value) });

  const updateText =
    (key: "name" | "phone" | "notes") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [key]: e.target.value });

  return (
    <section id="booking" className="bg-surface py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <h2 className="heading-light text-4xl text-ink sm:text-5xl">
            {suburbUi.bookUnit.replace("{name}", suburb.name)}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {suburbUi.requestGoesTo
              .replace("{unitName}", station.unitName)
              .replace("{base}", station.base)}
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line text-sm">
            <div className="grid grid-cols-[8rem_1fr] gap-4 py-4">
              <dt className="text-muted">{suburbUi.unit}</dt>
              <dd className="font-medium text-ink">
                {station.unitName} ({station.callsign})
              </dd>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-4 py-4">
              <dt className="text-muted">{suburbUi.typicalArrival}</dt>
              <dd className="font-medium text-ink">{suburb.responseEta}</dd>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-4 py-4">
              <dt className="text-muted">{suburbUi.covers}</dt>
              <dd className="text-ink">{station.coverage.join(", ")}</dd>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-4 py-4">
              <dt className="text-muted">{suburbUi.onTheVan}</dt>
              <dd className="text-ink">{station.equipment.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-10">
            <p className="text-sm text-muted">{booking.urgentCallLabel}</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="mt-2 inline-flex items-center gap-3 text-3xl font-light tracking-tight text-ink transition-colors hover:text-copper"
            >
              <LuPhone className="text-2xl text-copper" />
              {contactInfo.displayPhone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-96 flex-col items-start justify-center rounded-3xl bg-porcelain p-8 sm:p-12">
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
                  {/* Gunakan string yang sudah di-derive dari index */}
                  {selectedService}
                </span>
                .
              </p>
              <p className="mt-3 text-sm text-muted">
                {suburbUi.dispatchedTo
                  .replace("{unitName}", station.unitName)
                  .replace("{callsign}", station.callsign)
                  .replace("{suburb}", selectedSuburb)}
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
              className="rounded-3xl bg-porcelain p-6 sm:p-10"
            >
              <input type="hidden" name="unit" value={station.callsign} />

              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="station-name" className={label}>
                    {booking.formLabels.name}
                  </label>
                  <input
                    id="station-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={booking.formLabels.namePlaceholder}
                    value={formData.name}
                    onChange={updateText("name")}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="station-phone" className={label}>
                    {booking.formLabels.phone}
                  </label>
                  <input
                    id="station-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={booking.formLabels.phonePlaceholder}
                    value={formData.phone}
                    onChange={updateText("phone")}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="station-suburb" className={label}>
                    {booking.formLabels.suburb}
                  </label>
                  <select
                    id="station-suburb"
                    value={formData.suburbIndex}
                    onChange={updateIndex("suburbIndex")}
                    className={field}
                  >
                    {station.coverage.map((name, idx) => (
                      <option key={name} value={idx}>
                        {name} {suburb.postcode}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="station-service" className={label}>
                    {booking.formLabels.service}
                  </label>
                  <select
                    id="station-service"
                    value={formData.serviceIndex}
                    onChange={updateIndex("serviceIndex")}
                    className={field}
                  >
                    {booking.serviceOptions.map((option, idx) => (
                      <option key={option} value={idx}>
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
                      <label htmlFor="station-urgency" className={label}>
                        {booking.formLabels.urgency}
                      </label>
                      <select
                        id="station-urgency"
                        value={formData.urgencyIndex}
                        onChange={updateIndex("urgencyIndex")}
                        className={field}
                      >
                        {booking.urgencyOptions.map((option, idx) => (
                          <option key={option} value={idx}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="station-notes" className={label}>
                        {booking.formLabels.notes}
                      </label>
                      <textarea
                        id="station-notes"
                        rows={3}
                        placeholder={booking.formLabels.notesPlaceholder}
                        value={formData.notes}
                        onChange={updateText("notes")}
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

export default StationBooking;
