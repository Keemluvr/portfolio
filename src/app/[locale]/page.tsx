import Home from "@/components/pages/home";
import generateMetadata from "@/components/templates/metadata";

let metadata = {};

export default async function HomePage() {
  metadata = generateMetadata({ pageName: "home" });
  return <Home />;
}
export { metadata };
