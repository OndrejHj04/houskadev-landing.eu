import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const data = await getProjects();

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
