"use client";
import { getWindow } from "@/sanity/sanity-utils";
import "./styles.scss";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({ shown: false, title: "" });

  useEffect(() => {
    getWindow().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <div className="body">
      {data.shown && (
        <div className="banner">
          <img
            src="close.png"
            className="close"
            onClick={() => setData((c) => ({ ...c, shown: false }))}
          />
          <h3 className="title">{data.title}</h3>
        </div>
      )}
      <div className="hero">
        <div className="title-box">
          <h1 className="title">Lorem ipsum dolor sit amet</h1>
        </div>
        <div className="rectangles">
          <div className="rect-left"></div>
          <div className="rect-right">
            <h4 className="text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit!!!
            </h4>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="text-container">
            <h2 className="title">Lorem ipsum dolor sit amet</h2>
            <p className="parag">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem
              justo, commodo ut, suscipit at, pharetra vitae, orci. Phasellus
              enim erat, vestibulum vel, aliquam a, posuere eu, velit.
            </p>
          </div>
          <div className="image-container">
            <img src="space.png" />
          </div>
        </div>
      </div>
      <div className="waves">
        <img src="waveTop.png" className="wave-top" />
        <div className="content">
          <div className="graph-container">
            <div className="graph-title">
              <h3 className="title">Lorem ipsum</h3>
              <p className="parag">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer rutrum, orci vestibulum ullamcorper ultricies.
              </p>
            </div>
            <div className="graphs">
              <img src="chartLeft.png" className="graph" />
              <img src="chartRight.png" className="graph" />
            </div>
          </div>
        </div>
        <img src="waveBottom.png" className="wave-bottom" />
      </div>
    </div>
  );
}
