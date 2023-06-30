import { createClient } from "next-sanity";

export default async function Home() {
  const client = createClient({
    projectId: "6yym9s53",
    dataset: "production",
    apiVersion: "2023-06-29",
  });

  const data = await client.fetch(`*[_type == "project"]{name}`, {});

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
