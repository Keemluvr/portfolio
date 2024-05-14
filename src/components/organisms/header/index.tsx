"use client";

import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { classNameHeader, classNamesHeader } from "./style";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import { CV } from "@/constants/links";
import LocaleSwitcher from "@/components/molecules/locale-switcher";
import ExternalLink from "@/components/atoms/external-link";
import socialList from "../../molecules/social-network/constants/social-list";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Header");

  const resumeLink = useMemo(() => CV[locale as keyof typeof CV], [locale]);

  return (
    <Navbar
      shouldHideOnScroll
      className={classNameHeader.navbarWrapper}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={classNamesHeader.navbar}
    >
      <NavbarContent className={classNameHeader.navBarContent}>
        {socialList.map((item, index) => (
          <NavbarItem key={item.label} className={classNameHeader.navbarItem}>
            <Reveal delay={Number(`0.${index + 4}`)} origin="top">
              <ExternalLink href={item.link} aria-label={item.label}>
                {item.icon}
              </ExternalLink>
            </Reveal>
          </NavbarItem>
        ))}
      </NavbarContent>

      <div className={classNameHeader.navbarRightWrapper}>
        <NavbarContent justify="center" className={classNameHeader.navbarRightContent}>
          <NavbarItem key="locale">
            <Reveal delay={0.3} origin="top">
              <LocaleSwitcher />
            </Reveal>
          </NavbarItem>
          <NavbarItem key="my-resume">
            <Reveal delay={0} origin="top">
              <ExternalLink href={resumeLink} className={classNameHeader.navbarExternalLink}>
                <Button size="md" variant="bordered" color="secondary" className={classNameHeader.navbarMyResumeButton}>
                  {t("my-resume")}
                </Button>
              </ExternalLink>
            </Reveal>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default Header;
