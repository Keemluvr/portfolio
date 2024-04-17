import Home from "@/components/templates/home";
import generateMetadata from "@/components/organisms/metadata";

let metadata = {};

export default async function HomePage() {
  metadata = generateMetadata({ pageName: "home" });
  return <Home />;
}
export { metadata };
