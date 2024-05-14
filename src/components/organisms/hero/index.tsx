"use client";

import { classNameHero, classNamesHero } from "./style";
import { Button, Image as ImageUI } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import { Link } from "@/navigation";
import { DotGrid } from "@/components/molecules/dot-grid";
import Image from "next/image";

type HeroProps = {
  profileImage: string;
};

const Hero = ({ profileImage }: HeroProps) => {
  const t = useTranslations("Hero");
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  return (
    <section className={classNameHero.heroWrapper}>
      <div className={classNameHero.heroContentWrapper}>
        <DotGrid isLoaded={isLoadedImage} />
        <div className={classNameHero.heroDescriptionWrapper}>
          <Reveal>
            <h1 className={classNameHero.heroDescriptionTitle}>
              {t("hi-im-keila")}
              <span className={classNameHero.heroDescriptionTitleDot}>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={classNameHero.heroDescriptionSubtitle}>
              {t("im-a")} <span className={classNameHero.heroDescriptionSubtitleRole}>{t("frontend-developer")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={classNameHero.heroDescription}>{t("im-passionate-about")}</p>
          </Reveal>
          <Reveal>
            <Link href="#contact">
              <Button color="secondary" radius="sm" className={classNameHero.heroContactButton}>
                {t("contact-me")}
              </Button>
            </Link>
          </Reveal>
        </div>
        <div className={classNameHero.heroImageWrapper}>
          <Reveal origin="top">
            <ImageUI
              as={Image}
              priority
              isZoomed
              radius="full"
              placeholder="blur"
              blurDataURL={profileImage}
              onLoad={() => setIsLoadedImage(true)}
              src="/assets/keila.jpeg"
              alt={`"Keila Fernandes | ${t("frontend-developer")}`}
              width={250}
              height={250}
              quality={100}
              classNames={classNamesHero.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
