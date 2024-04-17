"use client";

import { useMemo } from "react";
import { classNameSidebar } from "./style";
import { useTranslations } from "next-intl";
import { SidebarItem } from "./types";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import UseSectionInView from "@/hooks/useSectionInView";

type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar = ({ items }: SidebarProps) => {
  const t = useTranslations("Sidebar");
  const sectionInView = UseSectionInView();
  const className = useMemo(() => classNameSidebar, []);

  return (
    <motion.nav className={className.sidebarNav} initial={{ x: -70 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
      <div className={className.sidebarLogoWrapper}>
        <div className={className.sidebarlogo}>
          K<span className={className.sidebarLogoDot}>.</span>
        </div>
      </div>
      {items.map((item) => (
        <Link key={item.label} href={item.link} className={className.sidebarItem(sectionInView, item)}>
          {t(item.label)}
        </Link>
      ))}
    </motion.nav>
  );
};

export default Sidebar;
