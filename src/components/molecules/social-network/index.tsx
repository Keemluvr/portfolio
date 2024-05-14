"use client";

import ExternalLink from "@/components/atoms/external-link";
import socialList from "./constants/social-list";
import { classNameSocialNetwork } from "./style";
import { Reveal } from "@/components/atoms/motion-effects/reveal";

const SocialNetwork = () => {
  return (
    <div className={classNameSocialNetwork.SocialNetworkWrapper}>
      {socialList.map((item, index) => (
        <div key={item.label} className={classNameSocialNetwork.SocialNetworkItem}>
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
