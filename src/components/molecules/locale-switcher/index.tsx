"use client";

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@nextui-org/react";
import { classNameLocale, classNamesLocale } from "./style";
import { useCallback, useMemo, useTransition } from "react";
import { localesMap } from "./constants/localeMap";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Locale } from "./types";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

const LocaleSwitcher = () => {
  const router = useRouter();
  const localActive = useLocale();

  const [isPending, startTransition] = useTransition();

  const { width } = useWindowSize();

  const currentLocale = useMemo(() => localesMap.find((l) => l.value === localActive), [localActive]);

  const onChangeLocale = useCallback(
    (nextLocale: Locale) => {
      startTransition(() => {
        router.replace(`/${nextLocale.value}`);
      });
    },
    [router]
  );

  const getFlag = useCallback(
    (label: string, flag: string) => (
      <Image
        width={15}
        height={15}
        alt={label || ""}
        src={flag || ""}
        loading="lazy"
        className={classNameLocale.localeFlag}
      />
    ),
    []
  );

  const flag = useMemo(() => getFlag(currentLocale?.label || "", currentLocale?.flag || ""), [getFlag, currentLocale]);

  return (
    <Dropdown isDisabled={isPending} classNames={classNamesLocale.dropdown}>
      <DropdownTrigger>
        <Button
          variant="ghost"
          color="secondary"
          startContent={width > 640 && flag}
          className={classNameLocale.localeFlagButton}
        >
          {width > 640 ? currentLocale?.label : flag}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="locales" selectedKeys={[localActive]} color="secondary">
        {localesMap.map((locale) => (
          <DropdownItem
            key={locale.value}
            onPress={() => onChangeLocale(locale)}
            startContent={getFlag(locale.label, locale.flag)}
          >
            {locale.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LocaleSwitcher;
