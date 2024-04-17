import Header from "@/components/organisms/header";
import Sidebar from "@/components/organisms/sidebar";

export default async function Home() {
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
