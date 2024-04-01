import { defaultLocale, locales } from "@/constants/locales";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  localePrefix: "always"
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(en|pt)/:path*`]
};
