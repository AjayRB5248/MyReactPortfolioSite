import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <AiFillHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <DiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandJavascript className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                <h4>React Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <SiRedux className="experience_details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandNextjs className="experience_details-icon" />
              <div>
                <h4>Next Js</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Back End Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <DiNodejs className="experience_details-icon" />
              <div>
                <h4>Node Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDb</h4>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress className="experience_details-icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience_details">
              <SiNestjs className="experience_details-icon" />
              <div>
                <h4>Nest Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <SiPostgresql className="experience_details-icon" />
              <div>
                <h4>PostgreSQl</h4>
              </div>
            </article>
            <article className="experience_details">
              <FaAws className="experience_details-icon" />
              <div>
                <h4>AWS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
