import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "HSC 23 Academic To Admission ICT book full couse",
    lesson: 180,
    students: 12,
    rating: 6,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 75,
    students: 12.5,
    rating: 5.8,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX and frontend web development Beginners to advanced",
    lesson: 69,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Main Courses</h2>
                <p>
                 Empowering Success: Three Essential Courses for HSC Achievement and Real-Life Triumph
                 Unlocking Potential: The Triad of Courses for HSC and Lifelong Success
                 Pathway to Excellence: Completing Three Courses for HSC and Real-World Prosperity
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
