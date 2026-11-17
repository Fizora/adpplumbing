import type { Metadata } from "next";
import SuburbTemplate from "@/app/components/suburb/SuburbTemplate";
import { suburbMetadata } from "@/app/const/suburb";

export const metadata: Metadata = suburbMetadata("cronulla");

export default function CronullaPage() {
  return <SuburbTemplate slug="cronulla" />;
}
