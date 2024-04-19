import Sidebar from "@/components/organisms/sidebar";
import Header from "@/components/organisms/header";
import Hero from "@/components/organisms/hero";
import About from "@/components/organisms/about";
import getLocalBase64 from "@/lib/getLocalBase64";
import Contact from "@/components/organisms/contact";

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
      label: "experience",
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
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
