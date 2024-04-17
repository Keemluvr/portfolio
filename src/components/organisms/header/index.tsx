"use client";

import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { classNameHeader, classNamesHeader } from "./style";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import LocaleSwitcher from "@/components/molecules/locale-switcher";
import ExternalLink from "@/components/atoms/external-link";
import socialList from "./constants/social-list";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Header");

  const social = useMemo(() => socialList, []);
  const classNames = useMemo(() => classNamesHeader, []);
  const className = useMemo(() => classNameHeader, []);
  const resumeLink = useMemo(() => `/files/Keila Fernandes - ${locale.toUpperCase()}.pdf`, [locale]);

  return (
    <Navbar
      shouldHideOnScroll
      className={className.navbarWrapper}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={classNames.navbar}
    >
      <NavbarContent className={className.navBarContent}>
        {social.map((item, index) => (
          <NavbarItem key={item.label} className={className.navbarItem}>
            <Reveal delay={Number(`0.${index + 4}`)} origin="top">
              <ExternalLink href={item.link} aria-label={item.label}>
                {item.icon}
              </ExternalLink>
            </Reveal>
          </NavbarItem>
        ))}
      </NavbarContent>

      <div className={className.navbarRightWrapper}>
        <NavbarContent justify="center" className={className.navbarRightContent}>
          <NavbarItem key="locale">
            <Reveal delay={0.3} origin="top">
              <LocaleSwitcher />
            </Reveal>
          </NavbarItem>
          <NavbarItem key="my-resume">
            <Reveal delay={0} origin="top">
              <ExternalLink href={resumeLink} className={className.navbarExternalLink}>
                <Button size="md" variant="bordered" color="secondary" className={className.navbarMyResumeButton}>
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
