import generateMetadata from "@/components/metadata";

let metadata = {};

export default async function Index() {
  metadata = await generateMetadata({ pageName: "home" });

  return <>Home</>;
}
export { metadata };
