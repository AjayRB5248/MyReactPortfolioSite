import React from "react";
import "./certificate.css";
import IMG1 from "../../assets/certificate1.jpeg";
import IMG2 from "../../assets/certificate2.jpeg";
import IMG3 from "../../assets/certificate3.jpeg";
import IMG4 from "../../assets/certificate4.jpeg";
import IMG5 from "../../assets/certificate5.png";
import IMG6 from "../../assets/certificate6.png";
import IMG7 from "../../assets/certificate7.png";

const Certificate = () => {
  const data = [
    {
      id: 5,
      image: IMG5,
      title: "Hacker Rank",
      credential: "https://www.hackerrank.com/certificates/612761f7d2db",
    },
    {
      id: 6,
      image: IMG6,
      title: "AWS Academy Graduate",
      credential:
        "https://www.credly.com/badges/56cf4732-92e8-46d1-8b87-a0aed0f5cc5c/public_url",
    },
    {
      id: 7,
      image: IMG7,
      title: "Server-side Development with MERN",
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/2R7DYXV5JFY2",
    },
    {
      id: 1,
      image: IMG1,
      title: "React Js",
      credential:
        "https://www.linkedin.com/learning/certificates/4eb930f23d724c557a3dfbcf0f8c934c114872b3f07a3555094707ca34620e4e?trk=share_certificate",
    },
    {
      id: 2,
      image: IMG2,
      title: "Next Js",
      credential:
        "https://www.linkedin.com/learning/certificates/5c466b411e401c774daba7eee96629d2a21f13d75171cd3c2f00d0cc71f1d59b?trk=share_certificate",
    },
    {
      id: 3,
      image: IMG3,
      title: "RestFul Api",
      credential:
        "https://www.linkedin.com/learning/certificates/32e83770d6472028c1908c77037a152ca9c7a82195cebbaac3a93a979383ad30?trk=share_certificate",
    },
    {
      id: 4,
      image: IMG4,
      title: "Git & GitHub",
      credential:
        "https://www.linkedin.com/learning/certificates/ae479a645fb19f4a9fc29e62da418a08b38905f216c43b4adba6c0823946acea?trk=share_certificate",
    },
  ];
  return (
    <section id="certificate">
      <h5>Certificates I Have Received</h5>
      <h2>Certificates</h2>
      <div className="container certificate__container">
        {data.map(({ id, image, title, credential }) => {
          return (
            <article className="certificate_item" key={id}>
              <div className="certificate_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="certificate_item-cta">
                <a
                  href={credential}
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Credential
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Certificate;
