"use client";

import { EMAIL, LINKEDIN, WHATSAPP } from "@/constants/social";
import { classNameContact } from "./style";
import { useTranslations } from "next-intl";
import { AiFillMail } from "react-icons/ai";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import ExternalLink from "@/components/atoms/external-link";
import Link from "next/link";
import { useMemo } from "react";

const Contact = () => {
  const t = useTranslations("Contact");
  const className = useMemo(() => classNameContact, []);

  return (
    <section id="contact" className={className.contactWrapper}>
      <Reveal>
        <h4 className={className.contactTitle}>
          {t("contact")}
          <span className={className.contactTitleDot}>.</span>
        </h4>
      </Reveal>
      <Reveal>
        <p className={className.contactCopy}>
          {t("shoot-me-an-email")} {t("you-can-also-find-me-on")}{" "}
          <ExternalLink href={LINKEDIN} className={className.contactLink}>
            Linkedin
          </ExternalLink>{" "}
          {t("or")}{" "}
          <ExternalLink href={WHATSAPP} className={className.contactLink}>
            WhatsApp
          </ExternalLink>{" "}
          {t("if-thats-more-your-speed")}
        </p>
      </Reveal>
      <Reveal>
        <Link href={`mailto:${EMAIL}`} className={className.contactEmail}>
          <AiFillMail className={className.contactIcon} />
          <span>{EMAIL}</span>
        </Link>
      </Reveal>
    </section>
  );
};

export default Contact;
