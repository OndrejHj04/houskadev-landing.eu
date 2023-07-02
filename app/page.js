import { getProjects } from "@/sanity/sanity-utils";
import "./styles.scss";

export default async function Home() {
  const data = await getProjects();

  return (
    <div className="body">
      <div className="banner">
        <h2 className="text md:text-3xl text-2xl">
          Lorem ipsum dolor sit amet 20%!
        </h2>
      </div>
      <div className="hero">
        <div className="container"></div>
      </div>
      <div className="content">
        <div className="container">
          <div></div>
          <img src="space.png" />
        </div>
      </div>
      <div className="waves">
        <img src="waveTop.png" className="wave-top" />
        <div className="container11"></div>
        <img src="waveBottom.png" className="wave-left" />
      </div>
    </div>
  );
}
