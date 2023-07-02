import { getProjects } from "@/sanity/sanity-utils";
import "./styles.scss";

export default async function Home() {
  const data = await getProjects();

  return (
    <div className="body">
      <div className="banner"></div>
      <div className="hero"></div>
      <div className="section"></div>
      <div className="waves"></div>
    </div>
  );
}
