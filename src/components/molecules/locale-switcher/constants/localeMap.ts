import { EN, PT } from "@/constants/locales";
import { Locale } from "../types";

export const localesMap: Locale[] = [
  {
    label: "EN",
    value: EN,
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.0/flags/4x3/us.svg"
  },
  {
    value: PT,
    label: "PT",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.0/flags/4x3/br.svg"
  }
];
