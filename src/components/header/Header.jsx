import React, { useEffect, useRef } from "react";
import "./header.css";
import background from "./../../assets/video.mp4";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadVideo = () => {
      const video = videoRef.current;

      video.src = background;

      video.addEventListener("loadeddata", () => {
        video.play();
      });

      return () => {
        video.removeEventListener("loadeddata", () => {});
      };
    };

    window.addEventListener("load", loadVideo);

    return () => {
      window.removeEventListener("load", loadVideo);
    };
  }, []);

  return (
    <header>
      <div className="header__container">
        <video ref={videoRef} preload="auto" muted loop />
        <div className="contents">
          <h5>Hello I'm</h5>
          <h1>Ajay Ranabhat</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>
      </div>
    </header>
  );
};

export default Header;
