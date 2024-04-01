import React, { AnchorHTMLAttributes } from "react";

type ExternalLinkProps = React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, ...props }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;
