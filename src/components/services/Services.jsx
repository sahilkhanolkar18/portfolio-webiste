import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User-Centric Design: Intuitive, user-friendly interfaces.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Wireframing and Prototyping: Visual blueprints, interactive
                prototypes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Visual Design and Branding: Captivating, on-brand aesthetics.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information Architecture: Logical, easy navigation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Usability Testing and User Research: Valuable insights,
                optimized experiences.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Web Apps: Tailored, unique solutions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design: Seamless experiences, any device.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development: Engaging, optimized websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization: Faster, efficient websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance & Support: Secure, reliable upkeep.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Strategy: Valuable, targeted content plan.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Compelling Copywriting: Engaging, persuasive writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Content Creation: Eye-catching images, videos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Optimization: SEO-friendly, readable content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Promotion: Wide distribution, maximum impact.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
