import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { suburbPages, type SuburbPageData } from "@/app/const/data";

/**
 * Station / armada yang bertugas di tiap suburb.
 * Form booking di halaman suburb dikirim ke unit ini.
 *
 * `coverage` diambil dari localLandmarkNote di data.ts.
 * `base` dan `equipment` kecuali Parramatta adalah placeholder —
 * ganti dengan data asli kalau brand ini dipakai sungguhan.
 */
export interface Station {
  slug: string;
  unitName: string;
  callsign: string;
  base: string;
  coverage: string[];
  equipment: string[];
}

export const stations: Station[] = [
  {
    slug: "parramatta",
    unitName: "Parramatta Unit",
    callsign: "ADP-PAR",
    base: "Church Street, Parramatta",
    coverage: ["Parramatta CBD", "North Parramatta", "Harris Park", "Westmead"],
    equipment: [
      "5,000 PSI hydro-jetter",
      "CCTV drain camera",
      "Hot water spare parts",
    ],
  },
  {
    slug: "chatswood",
    unitName: "Chatswood Unit",
    callsign: "ADP-CHW",
    base: "Chatswood CBD",
    coverage: ["Chatswood", "Chatswood West", "Roseville", "Willoughby"],
    equipment: [
      "Trenchless relining kit",
      "Continuous-flow hot water units",
      "Acoustic leak detector",
    ],
  },
  {
    slug: "bondi",
    unitName: "Bondi Unit",
    callsign: "ADP-BND",
    base: "Bondi Junction",
    coverage: ["Bondi Beach", "North Bondi", "Bondi Junction", "Tamarama"],
    equipment: [
      "Marine-grade brass fittings",
      "High-pressure jetter",
      "Thermal leak camera",
    ],
  },
  {
    slug: "cronulla",
    unitName: "Cronulla Unit",
    callsign: "ADP-CRN",
    base: "Cronulla town centre",
    coverage: ["Cronulla", "Woolooware", "Caringbah", "Miranda"],
    equipment: [
      "High-pressure jetter",
      "Gas bayonet & fitting kit",
      "Stormwater pit clearing gear",
    ],
  },
];

export function getSuburb(slug: string): SuburbPageData {
  const suburb = suburbPages.find((s) => s.slug === slug);
  if (!suburb) notFound();
  return suburb;
}

export function getStation(slug: string): Station {
  const station = stations.find((s) => s.slug === slug);
  if (!station) notFound();
  return station;
}

export function suburbMetadata(slug: string): Metadata {
  const { metaTitle, metaDescription } = getSuburb(slug);
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: { title: metaTitle, description: metaDescription },
  };
}
