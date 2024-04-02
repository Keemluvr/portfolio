"use client";

import { CODE_PEN, GITHUB, INSTAGRAM, LINKEDIN } from "@/constants/social";
import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Reveal } from "../motion-effects/reveal";
import LocaleSwitcher from "../locale-switcher";
import Linkedin from "../svg/linkedin";
import Github from "../svg/github";
import ExternalLink from "../external-link";
import CodePen from "../svg/code-pen";
import Instagram from "../svg/instagram";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Header");

  const social = [
    {
      label: "Linkedin",
      icon: <Linkedin />,
      link: LINKEDIN
    },
    {
      label: "Github",
      icon: <Github />,
      link: GITHUB
    },
    {
      label: "Instagram",
      icon: <Instagram />,
      link: INSTAGRAM
    },
    {
      label: "Code Pen",
      icon: <CodePen />,
      link: CODE_PEN
    }
  ];

  return (
    <Navbar
      className="flex mx-auto"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "py-4",
        wrapper: "flex justify-center h-auto min-h-16 max-w-max min-w-full",
        item: "font-normal text-lg"
      }}
    >
      <NavbarContent className="gap-2 sm:gap-4">
        {social.map((item, index) => (
          <NavbarItem key={item.label}>
            <Reveal delay={Number(`0.${index + 4}`)} origin="top">
              <ExternalLink href={item.link} aria-label={item.label}>
                {item.icon}
              </ExternalLink>
            </Reveal>
          </NavbarItem>
        ))}
      </NavbarContent>

      <div className="w-full flex justify-end">
        <NavbarContent justify="center" className="gap-2 sm:gap-4">
          <NavbarItem key="locale">
            <Reveal delay={0.3} origin="top">
              <LocaleSwitcher />
            </Reveal>
          </NavbarItem>
          <NavbarItem key="my-resume">
            <Reveal delay={0} origin="top">
              <ExternalLink href={`/files/Keila Fernandes - ${locale.toUpperCase()}.pdf`}>
                <Button size="md" variant="bordered" color="secondary" className="uppercase">
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
