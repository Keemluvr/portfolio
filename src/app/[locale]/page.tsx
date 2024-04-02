import Header from "@/components/header";
import generateMetadata from "@/components/metadata";

let metadata = {};

export default async function Index() {
  metadata = await generateMetadata({ pageName: "home" });

  return (
    <>
      <Header />
    </>
  );
}
export { metadata };
