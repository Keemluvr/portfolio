import Sidebar from "@/components/organisms/sidebar";
import Header from "@/components/organisms/header";
import Hero from "@/components/organisms/hero";
import About from "@/components/organisms/about";
import Projects from "@/components/organisms/projects";
import Experience from "@/components/organisms/experience";
import Contact from "@/components/organisms/contact";
import getLocalBase64 from "@/lib/getLocalBase64";
import { Spacer } from "@nextui-org/react";

const Home = async () => {
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
      label: "exp",
      link: "#experience"
    },
    {
      label: "contact",
      link: "#contact"
    }
  ];

  const profileImage = (await getLocalBase64("/assets/keila.jpeg")) || "";

  return (
    <div className="grid grid-cols-[60px_1fr]">
      <Sidebar items={navItems}></Sidebar>
      <main>
        <Header />
        <Hero profileImage={profileImage} />
        <Spacer y={20} />
        <About />
        <Spacer y={40} />
        <Projects />
        <Spacer y={40} />
        <Experience />
        <Spacer y={20} />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
