import { MetadataRoute } from "next";
import { WEBSITE } from "@/constants/links";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Keila Fernandes",
    short_name: "Keila",
    icons: [
      {
        src: `${WEBSITE}/favicon/android-chrome-72x72.png`,
        sizes: "72x72",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    start_url: WEBSITE,
    display: "standalone"
  };
}
