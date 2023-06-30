import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects, "xdd");
  return (
    <div>
      Perfect website!!!
      <div>
        {projects.map((project, i) => (
          <p key={i}>{project.name}</p>
        ))}
      </div>
    </div>
  );
}
