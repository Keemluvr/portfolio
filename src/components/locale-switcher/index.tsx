"use client";

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { Locale, localesMap } from "@/constants/locales";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

const LocaleSwitcher = () => {
  const router = useRouter();
  const localActive = useLocale();
  const currentLocale = localesMap.find((l) => l.value === localActive);
  const [isPending, startTransition] = useTransition();
  const { width } = useWindowSize();

  const onChangeLocale = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(`/${nextLocale.value}`);
    });
  };

  const flag = (label: string | undefined, flag: string | undefined) => (
    <Image width={15} height={15} alt={label || ""} src={flag || ""} />
  );

  return (
    <Dropdown isDisabled={isPending} classNames={{ content: "max-w-20 min-w-20" }}>
      <DropdownTrigger>
        <Button
          variant="ghost"
          color="secondary"
          startContent={width > 640 && flag(currentLocale?.label, currentLocale?.flag)}
          className="min-w-10"
        >
          {width > 640 ? currentLocale?.label : flag(currentLocale?.label, currentLocale?.flag)}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="locales" selectedKeys={[localActive]} color="secondary">
        {localesMap.map((locale) => (
          <DropdownItem
            key={locale.value}
            onPress={() => onChangeLocale(locale)}
            startContent={flag(locale.label, locale.flag)}
          >
            {locale.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LocaleSwitcher;
