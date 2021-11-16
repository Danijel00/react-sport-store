import React from "react";
import "./Testimonial.css";
import SwiperCore, { Autoplay, EffectCube, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "../Swiper/swiper.min.css";

// install Swiper modules
SwiperCore.use([Autoplay, EffectCube, Pagination]);

function Testimonial() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 40,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        loop: true,
        grabCursor: true,
      }}
      pagination={pagination}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="section testimonial" id="testimonial">
          <div className="testimonial__container">
            <div className="testimonial__box">
              <div className="client__image">
                <img
                  src={require("../../images/profiles/profile1.jpg").default}
                  alt="profile1"
                />
              </div>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque maiores velit repellendus, corporis vel odit veniam
                reprehenderit, libero tempora voluptatem dolorem cupiditate
                possimus, quaerat totam debitis. Laborum corporis accusamus odit
                explicabo vero nemo sit voluptatibus corrupti nesciunt.
                Voluptate esse tempora vel dolores aperiam assumenda, minima
                eius, distinctio ad ratione iusto!
              </p>
              <div className="client__info">
                <h3>Murray Donovan</h3>
                <span>Front-end Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="section testimonial" id="testimonial">
          <div className="testimonial__container">
            <div className="testimonial__box">
              <div className="client__image">
                <img
                  src={require("../../images/profiles/profile2.jpg").default}
                  alt="profile1"
                />
              </div>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque maiores velit repellendus, corporis vel odit veniam
                reprehenderit, libero tempora voluptatem dolorem cupiditate
                possimus, quaerat totam debitis. Laborum corporis accusamus odit
                explicabo vero nemo sit voluptatibus corrupti nesciunt.
                Voluptate esse tempora vel dolores aperiam assumenda, minima
                eius, distinctio ad ratione iusto!
              </p>
              <div className="client__info">
                <h3>Rose Donovan</h3>
                <span>Back-end Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="section testimonial" id="testimonial">
          <div className="testimonial__container">
            <div className="testimonial__box">
              <div className="client__image">
                <img
                  src={require("../../images/profiles/profile3.jpg").default}
                  alt="profile1"
                />
              </div>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque maiores velit repellendus, corporis vel odit veniam
                reprehenderit, libero tempora voluptatem dolorem cupiditate
                possimus, quaerat totam debitis. Laborum corporis accusamus odit
                explicabo vero nemo sit voluptatibus corrupti nesciunt.
                Voluptate esse tempora vel dolores aperiam assumenda, minima
                eius, distinctio ad ratione iusto!
              </p>
              <div className="client__info">
                <h3>Clark Kent</h3>
                <span>Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="section testimonial" id="testimonial">
          <div className="testimonial__container">
            <div className="testimonial__box">
              <div className="client__image">
                <img
                  src={require("../../images/profiles/profile4.jpg").default}
                  alt="profile1"
                />
              </div>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque maiores velit repellendus, corporis vel odit veniam
                reprehenderit, libero tempora voluptatem dolorem cupiditate
                possimus, quaerat totam debitis. Laborum corporis accusamus odit
                explicabo vero nemo sit voluptatibus corrupti nesciunt.
                Voluptate esse tempora vel dolores aperiam assumenda, minima
                eius, distinctio ad ratione iusto!
              </p>
              <div className="client__info">
                <h3>Danijel Kocic</h3>
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Testimonial;
