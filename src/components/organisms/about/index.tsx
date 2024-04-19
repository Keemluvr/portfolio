"use client";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { classNameAbout } from "./style";
import { SectionHeader } from "@/components/molecules/section-header";
import { useMemo } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import { Stats } from "@/components/molecules/stats";
import SocialNetwork from "@/components/molecules/social-network";

const About = () => {
  const t = useTranslations("About");
  const className = useMemo(() => classNameAbout, []);

  return (
    <section id="about" className={className.aboutWrapper}>
      <SectionHeader title="about" />
      <div className={className.aboutContent}>
        <div className={className.aboutDescription}>
          <Reveal>
            <p className={className.aboutDescriptionFirstLetter}>{t("howdy-im-keila")}</p>
          </Reveal>
          <Reveal>
            <p>{t("my-skills-include")}</p>
          </Reveal>
          <Reveal>
            <p>{t("when-im-not-coding")}</p>
          </Reveal>
          <Reveal>
            <p>{t("im-always-looking-for")}</p>
          </Reveal>
          <Reveal>
            <div className={className.aboutLinksWrapper}>
              <div className={className.aboutLinksTitle}>
                <span>{t("my-links")}</span>
                <AiOutlineArrowRight />
              </div>
              <SocialNetwork />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About;
