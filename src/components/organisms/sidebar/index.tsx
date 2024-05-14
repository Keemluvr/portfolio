"use client";

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

  return (
    <motion.nav
      className={classNameSidebar.sidebarNav}
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classNameSidebar.sidebarLogoWrapper}>
        <div className={classNameSidebar.sidebarlogo}>
          K<span className={classNameSidebar.sidebarLogoDot}>.</span>
        </div>
      </div>
      {items.map((item) => (
        <Link key={item.label} href={item.link} className={classNameSidebar.sidebarItem(sectionInView, item)}>
          {t(item.label)}
        </Link>
      ))}
    </motion.nav>
  );
};

export default Sidebar;
