"use client";

import { classNameHero, classNamesHero } from "./style";
import { Button, Image as ImageUI } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import Image from "next/image";
import { Link } from "@/navigation";

type HeroProps = {
  profileImage: string;
};

const Hero = ({ profileImage }: HeroProps) => {
  const t = useTranslations("Hero");

  const classNames = useMemo(() => classNamesHero, []);
  const className = useMemo(() => classNameHero, []);

  return (
    <section className={className.heroWrapper}>
      <div className={className.heroContentWrapper}>
        <div className={className.heroDescriptionWrapper}>
          <Reveal>
            <h1 className={className.heroDescriptionTitle}>
              {t("hi-im-keila")}
              <span className={className.heroDescriptionTitleDot}>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={className.heroDescriptionSubtitle}>
              {t("im-a")} <span className={className.heroDescriptionSubtitleRole}>{t("frontend-developer")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={className.heroDescription}>{t("im-passionate-about")}</p>
          </Reveal>
          <Reveal>
            <Button color="secondary" radius="sm">
              {t("contact-me")}
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.4} origin="top" className={className.heroImageWrapper}>
          <Link href="#contact">
            <ImageUI
              as={Image}
              priority
              isZoomed
              radius="full"
              placeholder="blur"
              blurDataURL={profileImage}
              src="/assets/keila.jpeg"
              alt={`"Keila Fernandes | ${t("frontend-developer")}`}
              width={250}
              height={250}
              quality={100}
              classNames={classNames.image}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
