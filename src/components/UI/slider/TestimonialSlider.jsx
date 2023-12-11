import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Edspert.id sangatlah membantu dalam proses membina lulusan IT
          Sehingga dapat memberikan kelas yang terbaik untuk para anak anak
          dan memberikan bakat teknologi di bidang programmer
          "
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Bill Gates</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "Para mentornya sangat bagus dalam memberikan materi dan dapat meneyelesaikan
        masalah kodingan saya dengan baik dan membantu saya untuk mengarahkan 
        solusi
          "
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Ellie Poter</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "Edspert.id Mantap dan terbaik!
          "
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Stave Jobs</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
