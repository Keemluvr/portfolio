"use client";

import { useMemo } from "react";
import { Reveal } from "@/components/atoms/motion-effects/reveal";
import ExternalLink from "@/components/atoms/external-link";
import socialList from "./constants/social-list";
import { classNameSocialNetwork } from "./style";

const SocialNetwork = () => {
  const social = useMemo(() => socialList, []);
  const className = useMemo(() => classNameSocialNetwork, []);

  return (
    <div className={className.SocialNetworkWrapper}>
      {social.map((item, index) => (
        <div key={item.label} className={className.SocialNetworkItem}>
          <Reveal delay={Number(`0.${index + 4}`)} origin="top">
            <ExternalLink href={item.link} aria-label={item.label}>
              {item.icon}
            </ExternalLink>
          </Reveal>
        </div>
      ))}
    </div>
  );
};

export default SocialNetwork;
