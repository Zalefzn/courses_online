import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/coding.png";
import certi from '../assets/images/certificate.png';
import cs from '../assets/images/cs.png';

import products from "../assets/fake-data/products.js";

import codingCategoryImg01 from "../assets/images/coding2.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Fast Response",
    imgUrl: cs,
    desc: "Kami Memiliki Layanan yang terbaik untuk kamu yang sedang mencari kursus sesuai dengan kebutuhan kamu.",
  },

  {
    title: "Get Certificate",
    imgUrl: certi,
    desc: "Kami Memiliki Layanan yang terbaik untuk kamu yang sedang mencari kursus sesuai dengan kebutuhan kamu.",
  },
  {
    title: "Learn From Anywhere",
    imgUrl: featureImg01,
    desc: "Kami Memiliki Layanan yang terbaik untuk kamu yang sedang mencari kursus sesuai dengan kebutuhan kamu.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotCourses, setHotCourses] = useState([]);

  useEffect(() => {
    const filteredCourses = products.filter((item) => item.category === "Frontend Courses");
    const sliceCourses = filteredCourses.slice(0, 4);
    setHotCourses(sliceCourses);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Frontend") {
      const filteredProducts = products.filter(
        (item) => item.category === "Frontend Courses"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Backend") {
      const filteredProducts = products.filter(
        (item) => item.category === "Backend Courses"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "Mobile Courses"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Belajar Bersama Membuat Mudah</h5>
                <h1 className="mb-4 hero__title">
                  <span>KODING?</span> hanya di <br /> Edspert.id
                  <span> Terpecaya</span>
                </h1>

                <p>
                  Belajar koding bersama kami dengan berbagai pilihan kursus sesuai
                  dengan kebutuhanmu, ayo tunggu apa lagi segera bergabung!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__courses-btn">
                    <Link to="/courses">See all online courses</Link>
                  </button>
                </div>

              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Apa Layanan Kami</h5>
              <h2 className="feature__title">Belajar bersama kami dapat</h2>
              <h2 className="feature__title">
                 membuat anda <span> jago koding</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Dengan Edspert.id kami menyediakan layanan yang dapat membuat anda<br /> 
                terbantu dalam menyelesaikan permasalahan yang kalian hadapi
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Khursus banyak diminati</h2>
            </Col>

            <Col lg="12">
              <div className="courses__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "coursesBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Frontend" ? "coursesBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Frontend")}
                >
                  <img src={codingCategoryImg01} alt="" />
                  Frontend Courses
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Backend" ? "coursesBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Backend")}
                >
                  <img src={codingCategoryImg01} alt="" />
                  Backend Courses
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Mobile" ? "coursesBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Mobile")}
                >
                  <img src={codingCategoryImg01} alt="" />
                  Mobile Course
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Kenapa <span>Edspert.id?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Edspert.id sudah di percaya oleh banyak orang, terlebih kami menyediakan 
                  banyak kebutuhan khursus online yang dapat meningkatkan kemampuan kalian
                  di bidang IT, kami menjamin lulusan terbaik kami di pastikan dapat bekerja
                  sama dengan BUMN dan Perusahan besar di indonesia
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Mentor Expert dibidangnya
                    </p>
                    <p className="choose__us-desc">
                    Para mentor terpilih di edspert.id adalah para mentor 
                    berpengalaman yang siap membimbing kamu.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Materi dan kurikulum yang relavan
                    </p>
                    <p className="choose__us-desc">
                    Kurikulum kelas di edspert selalu di perbarui dan di sesuaikan 
                    dengan kebutuhan industri saat ini.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Real life project
                      {" "}
                    </p>
                    <p className="choose__us-desc">
                    Selain teori, terdapat project di setiap kelas yang akan kamu kerjakan 
                    di bawah bimbingan mentor. Project tersebut dapat menambah portfolio kamu.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Khursus Top</h2>
            </Col>

            {hotCourses.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  Apa yang dikatakan <span>customers</span> kami
                </h2>
                <p className="testimonial__desc">
                  kami mengutamakan layanan terbaik dan khursus terbaik untuk setiap
                  pelanggan yang sudah mendaftar kepada kami.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
