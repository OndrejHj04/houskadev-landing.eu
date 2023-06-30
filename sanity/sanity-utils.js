import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "6yym9s53",
    dataset: "production",
    apiVersion: "2023-06-29",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        name
    }`
  );
}
