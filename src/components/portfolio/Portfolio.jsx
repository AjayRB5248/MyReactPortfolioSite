import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/other.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Disease Prediction Using Machine Learning",
    github:
      "https://github.com/arb12345/DiseasePredictionAndDoctorRecommendation",
    demo: "https://diseasepredictionsite.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Booking Nepal",
    github: "https://github.com/arb12345/HotelBookingNepal",
    demo: "https://hotel-booking-nepal.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "PizzaMandu",
    github: "https://github.com/arb12345/PizzaMandu",
    demo: "https://pizzamandu-ajay075bct005-acemedunp.vercel.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "ACEM MIS",
    github: "https://github.com/arb12345/Acem_MIS_Major_project",
  },
  {
    id: 5,
    image: IMG5,
    title: "Other Projects...",
    github: "https://github.com/arb12345",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Github
                </a>
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
