import { NextIntlClientProvider } from "next-intl";
import { lato } from "../fonts";
import { Providers } from "../providers";
import { getMessages } from "next-intl/server";
import clsx from "clsx";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={clsx(lato.className)}>
          <Providers>{children}</Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
