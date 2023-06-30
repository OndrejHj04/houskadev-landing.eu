import { createClient } from "next-sanity";
import { SanityClient } from "next-sanity-client/dist/client";

export default async function Home() {
  const client = new SanityClient({
    projectId: "6yym9s53",
    dataset: "production",
    apiVersion: "2023-06-29",
  });

  const data = await client.fetch({
    query: `*[_type == "project"]{name}`,
    config: {
      cache: "force-cache",
      next: { revalidate: 10 },
    },
  });

  return (
    <div>
      Perfect website!!
      <div>
        {data.map((project, i) => (
          <p key={i}>{project.name}</p>
        ))}
      </div>
    </div>
  );
}
