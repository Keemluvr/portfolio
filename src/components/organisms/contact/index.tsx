"use client";

import { EMAIL, LINKEDIN, WHATSAPP } from "@/constants/social";
import { classNameContact } from "./style";
import { useTranslations } from "next-intl";
import { AiFillMail } from "react-icons/ai";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import ExternalLink from "@/components/atoms/external-link";
import Link from "next/link";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className={classNameContact.contactWrapper}>
      <Reveal>
        <h4 className={classNameContact.contactTitle}>
          {t("contact")}
          <span className={classNameContact.contactTitleDot}>.</span>
        </h4>
      </Reveal>
      <Reveal>
        <p className={classNameContact.contactCopy}>
          {t("shoot-me-an-email")} {t("you-can-also-find-me-on")}{" "}
          <ExternalLink href={LINKEDIN} className={classNameContact.contactLink}>
            Linkedin
          </ExternalLink>{" "}
          {t("or")}{" "}
          <ExternalLink href={WHATSAPP} className={classNameContact.contactLink}>
            WhatsApp
          </ExternalLink>{" "}
          {t("if-thats-more-your-speed")}
        </p>
      </Reveal>
      <Reveal>
        <Link href={`mailto:${EMAIL}`} className={classNameContact.contactEmail}>
          <AiFillMail className={classNameContact.contactIcon} />
          <span>{EMAIL}</span>
        </Link>
      </Reveal>
    </section>
  );
};

export default Contact;
