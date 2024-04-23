import Home from "@/components/templates/home";
import generateMetadata from "@/components/organisms/metadata";

let metadata = {};

interface HomeProps {
  params: { locale: string };
}

export default async function HomePage({ params: { locale } }: HomeProps) {
  metadata = generateMetadata({ pageName: "home", locale });
  return <Home />;
}
export { metadata };
