import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/coding.png";


import "../../../styles/category.css";

const categoryData = [
  {
    display: "Frontend Courses",
    imgUrl: categoryImg01,
  },
  {
    display: "Backend Courses",
    imgUrl: categoryImg01,
  },

  {
    display: "Mobile Courses",
    imgUrl: categoryImg01,
  },

  {
    display: "Database Courses",
    imgUrl: categoryImg01,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
