import React from "react";
import "../Features/features.css";

import feature5 from "../../assets/images/feature/preview.png";

import { Card, Col, Container, Row } from "react-bootstrap";



const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:false,
    autoplaySpeed:1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow:false,
          nextArrow:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:false,
          nextArrow:false,
        },
      },
    ],
  };

  
  return (
    <>
    
      <section className="feature-section">
        <Container>
          <Row>
            <Col lg = "6" md="6" sm = "12">
            <div className="image-container">

              <img src={feature5} className="img-fluid hover-image"></img>
              </div>
            </Col>
            <Col lg = "6" md="6" sm = "12">
              <p className="fs-6 m-3"><strong>Wanderlust Journeys</strong></p>
              <p className="fs-3 m-3"><strong>Discover the world, effortlessly</strong></p>
            <p className = "fs-6 m-3">At Wanderlust Journeys, we are dedicated to providing you with unforgettable travel experiences. Whether you're seeking adventure in the mountains, relaxation by the sea, or cultural immersion in bustling cities, we have something for everyone. Our team of travel experts works around the clock to ensure that every aspect of your journey is seamless, from start to finish.</p>
            <Row>
              <Col md="6">
                <p className="text-success fs-1 mt-5 ms-2">100+</p>
                <p className="fs-6 mt-3 ms-2">Travel Destinations</p>
                <p className="text-success fs-1 mt-5 ms-2">200+</p>
                <p className="fs-6 mt-3 ms-2">Guided Tours.</p>
              </Col>
              <Col md="6">
                <p className="text-success fs-1 mt-5 ms-2">80+</p>
                <p className="fs-6 mt-3 ms-2">Luxury Accommodations.</p>
                <p className="text-success fs-1 mt-5 ms-2">150+</p>
                <p className="fs-6 mt-3 ms-2">Happy Travelers Around the World.</p>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;