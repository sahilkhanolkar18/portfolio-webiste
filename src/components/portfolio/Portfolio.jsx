import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio-1"></img>
          </div>
          <h3>Crown Clothing</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahilkhanolkar18/Crown-Clothing-Ecommerce-Portfolio"
              className="btn"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://lustrous-nougat-5186d1.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              without
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio-1"></img>
          </div>
          <h3>Movix Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahilkhanolkar18/movie-website-portfolio"
              className="btn"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://6496df31fd42ee579fc83f15--jovial-palmier-4d91d4.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              without
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio-1"></img>
          </div>
          <h3>Youtube Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahilkhanolkar18/youtube-clone-portfolio"
              className="btn"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dapper-seahorse-f16b46.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              without
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio-1"></img>
          </div>
          <h3>Title of Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
              without
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio-1"></img>
          </div>
          <h3>Title of Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
              without
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio-1"></img>
          </div>
          <h3>Title of Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              without
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
              without
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
