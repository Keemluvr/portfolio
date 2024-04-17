import { NextIntlClientProvider } from "next-intl";
import { poppins } from "../fonts";
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
    <html lang={locale} className="min-h-full">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={clsx(poppins.className, "min-h-full ")}>
          <Providers>{children}</Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
