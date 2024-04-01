import { getPlaiceholder } from "plaiceholder";

export default async function getLocalBase64(imageUrl: string, withoutBaseURL = false) {
  try {
    const baseURL = withoutBaseURL ? "" : process.env.INITIAL_PATH_URL;
    const res = await fetch(`${baseURL}${imageUrl}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer), { size: 10 });

    return base64;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
  }
}
