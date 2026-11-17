import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

// Satu keluarga font variabel (200–800). Subset vietnamese ikut dimuat
// karena situs ini punya versi Tiếng Việt.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADP Plumbing | 24/7 Emergency Sydney Plumbers & Blocked Drains",
  description:
    "Licensed NSW residential plumbers & gas fitters. 60-minute emergency response, hydro-jet drain clearing, hot water repairs, and upfront flat-rate pricing across Sydney.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
