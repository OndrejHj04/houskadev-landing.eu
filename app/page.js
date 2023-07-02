import { getProjects } from "@/sanity/sanity-utils";
import "./styles.scss";

export default async function Home() {
  const data = await getProjects();

  return (
    <div className="body">
      <div className="banner"></div>
      <div className="hero">
        <div className="title"></div>
        <div className="rectangles">
          <div className="rect-left"></div>
          <div className="rect-right"></div>
        </div>
      </div>
      <div className="section">
        <div className="content"></div>
      </div>
      <div className="waves">
        <img src="waveTop.png" className="wave-top" />
        <div className="content">
          <div className="contain"></div>
        </div>
        <img src="waveBottom.png" className="wave-bottom" />
      </div>
    </div>
  );
}
