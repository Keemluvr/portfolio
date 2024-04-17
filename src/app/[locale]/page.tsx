import generateMetadata from "@/components/metadata";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

let metadata = {};

export default async function Index() {
  metadata = await generateMetadata({ pageName: "home" });

  const navItems = [
    {
      label: "about",
      link: "#about"
    },
    {
      label: "projects",
      link: "#projects"
    },
    {
      label: "experience",
      link: "#experience"
    },
    {
      label: "contact",
      link: "#contact"
    }
  ];

  return (
    <div className="grid grid-cols-[60px_1fr]">
      <Sidebar items={navItems}></Sidebar>
      <main>
        <Header />
      </main>
    </div>
  );
}
export { metadata };
