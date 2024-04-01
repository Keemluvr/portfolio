export const EN = "en";
export const BR = "pt";

export const locales = [EN, BR];

export const defaultLocale = EN;

export type Locale = {
  value: string;
  label: string;
  flag: string;
};

export const localesMap: Locale[] = [
  {
    label: "EN",
    value: EN,
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.0/flags/4x3/us.svg"
  },
  {
    value: BR,
    label: "BR",
    flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.0/flags/4x3/br.svg"
  }
];
