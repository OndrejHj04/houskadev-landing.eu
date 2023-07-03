import { SanityClient } from "next-sanity-client/dist/client";

export async function getWindow() {
  const client = new SanityClient({
    projectId: "6yym9s53",
    dataset: "production",
    apiVersion: "2023-06-29",
  });

  return client.fetch({
    query: `*[_type == "window"]{shown, title}[0]`,
    config: {
      cache: "force-cache",
      next: { revalidate: 10 },
    },
  });
}
