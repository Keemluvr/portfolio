import { getTranslations } from "next-intl/server";
import { WEBSITE } from "@/constants/links";
import type { Metadata } from "next";
import icons from "./icons";
import meta from "./meta";

export type pages = "home";

type generateMetadataProps = {
  pageName: pages;
  locale: string;
};

const generateMetadata = async ({ pageName, locale }: generateMetadataProps): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const root = `${process.env.INITIAL_PATH_URL}/`;
  const isProduction = process.env.ENVIRONMENT === "production";
  const page = meta[pageName];
  const currentURL = `${WEBSITE}${page?.path}`;
  const siteName = "Keila Fernandes | Frontend Developer";

  return {
    title: page?.name,
    description: t(page?.description),
    applicationName: siteName,
    authors: {
      name: "Keila Daiane Fernandes",
      url: WEBSITE
    },
    referrer: "strict-origin-when-cross-origin",
    robots: "index, follow",
    alternates: {
      canonical: currentURL
    },
    appleWebApp: {
      title: siteName
    },
    icons,
    ...(isProduction && {
      openGraph: {
        title: page?.name,
        description: t(page?.description),
        url: currentURL,
        siteName: siteName,
        images: [
          {
            url: `${root}assets/${page.image.path}`,
            width: page.image.width,
            height: page.image.height
          }
        ],
        locale: "en_US",
        type: "website"
      },
      twitter: {
        site: currentURL,
        description: t(page?.description),
        title: page?.name,
        images: [
          {
            url: `${root}assets/${page.image.path[locale]}`,
            width: page.image.width,
            height: page.image.height
          }
        ]
      }
    })
  };
};

export default generateMetadata;
