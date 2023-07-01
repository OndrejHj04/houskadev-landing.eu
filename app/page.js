import { getProjects } from "@/sanity/sanity-utils";
import "./styles.scss";
import Image from "next/image";

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
        <div className="container">
          <h1 className="title md:text-6xl text-5xl">
            Lorem ipsum dolor sit amet
          </h1>
          <img src="rectangleLeft.png" className="reactangle-left" />
          <img src="reactangleRight.png" className="reactangle-right" />
        </div>
      </div>
    </div>
  );
}
