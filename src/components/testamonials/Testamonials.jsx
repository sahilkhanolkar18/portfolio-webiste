import React from "react";
import "./testamonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testamonials = () => {
  return (
    <section id="testamonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testamonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testamonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className="clients__name">Dr. Mithun James</h5>
          <small className="clients__review">
            This React developer is exceptional! Their expertise in React shines
            through their clean code, efficient problem-solving, and seamless
            integration of UI components. Highly recommended!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testamonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className="clients__name">Rakesh Lanjewar</h5>
          <small className="clients__review">
            I can't say enough positive things about this React developer. Their
            attention to detail, passion for clean code, and ability to tackle
            complex problems have significantly elevated our React projects.
            Trustworthy and highly skilled!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testamonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className="clients__name">Kanchan Pitalwar</h5>
          <small className="clients__review">
            This React developer is a true React wizard! Their ability to turn
            complex ideas into elegant React components is simply impressive. A
            reliable and talented professional worth working with.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testamonials;
