import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutImg from "../../assets/images/about/aboutimg.png";
import "../About/about.css";
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";
import bestPriceImg from "../../assets/images/about/bi_shield-check.png";
import easyBookingImg from "../../assets/images/about/healthicons_i-schedule-school-date-time-outline.png";
import customerServiceImg from "../../assets/images/about/ri_customer-service-2-line.png";
import about1 from "../../assets/images/about/Rectangle 25.png";
import group113 from "../../assets/images/about/Group 113.png";
import group114 from "../../assets/images/about/Group 114.png";
import group115 from "../../assets/images/about/Group 115.png";
import group116 from "../../assets/images/about/Group 116.png";

const About = () => {
    useEffect(() => {
        document.title = "About us";
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Breadcrumbs title="About us" pagename="About us" />
            <section className="py-5">
                <Container>
                    <Row>
                        <h3 className="h2 fw-bold text-center">
                            Why Choose Us?
                        </h3>
                        <p className="mb-4 body-text text-center">
                            These popular destinations have a lot to offer
                        </p>
                        <Col md="4" className="text-center">
                            <img
                                src={bestPriceImg}
                                alt="Best price guarantee"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "80%" }}
                            />
                            <h3 className="h2">Best price guarantee</h3>
                            <p className="mb-2 body-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </Col>
                        <Col md="4" className="text-center">
                            <img
                                src={easyBookingImg}
                                alt="Easy Booking"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "80%" }}
                            />
                            <h3 className="h2">Easy Booking</h3>
                            <p className="mb-2 body-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </Col>
                        <Col md="4" className="text-center">
                            <img
                                src={customerServiceImg}
                                alt="Customer Service 24h"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "80%" }}
                            />
                            <h3 className="h2">Customer Service 24h</h3>
                            <p className="mb-2 body-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-4 align-items-center">
                        <Col md="8">
                            <h3 className="h2 fw-bold">About Travel Smart</h3>
                            <p className="mb-2 body-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Amet dictum et in feugiat.
                                Platea in diam, est congue. Posuere sapien morbi
                                augue ultrices. Et facilisi orci sollicitudin
                                placerat lacus lacus nibh. Egestas semper massa
                                viverra massa proin in morbi placerat. Pharetra
                                nec, est non integer nisi, ut faucibus. Non, in
                                nam sollicitudin vitae volutpat ac molestie.
                                Turpis pellentesque sit pellentesque id cras
                                lobortis tortor, blandit.
                            </p>
                            <p className="mb-2 body-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Amet dictum et in feugiat.
                                Platea in diam, est congue. Posuere sapien morbi
                                augue ultrices. Et facilisi orci sollicitudin
                                placerat lacus lacus nibh. Egestas semper massa
                                viverra massa proin in morbi placerat. Pharetra
                                nec, est non integer nisi, ut faucibus. Non, in
                                nam sollicitudin vitae volutpat ac molestie.
                                Turpis pellentesque sit pellentesque id cras
                                lobortis tortor, blandit.
                            </p>
                        </Col>
                        <Col md="4" className="text-center">
                            <img
                                src={about1}
                                alt="About Travel Smart"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "100%" }}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-4"></Row>
                    <Row className="mt-4">
                        <Col md="3">
                            <img
                                src={group113}
                                alt="About Travel Smart"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "100%" }}
                            />
                        </Col>
                        <Col md="3">
                            <img
                                src={group114}
                                alt="About Travel Smart"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "100%" }}
                            />
                        </Col>
                        <Col md="3">
                            <img
                                src={group115}
                                alt="About Travel Smart"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "100%" }}
                            />
                        </Col>
                        <Col md="3">
                            <img
                                src={group116}
                                alt="About Travel Smart"
                                className="img-fluid mb-3"
                                style={{ maxWidth: "100%" }}
                            />
                        </Col>
                    </Row>
                </Container>

                {/* <Container>
                    <Row>
                        <Col md="8">
                            <div className="about-content">
                                <div className="about-image position-relative">
                                    <img
                                        src={aboutImg}
                                        alt="about"
                                        className="img-fluid rounded-5"
                                    />
                                    <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                                        <h3 className="h2 fw-bold text-white">
                                            HOW WE ARE BEST FOR TRAVEL!
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <h2 className="h2 font-bold pt-4 pb-2">
                                HOW WE ARE BEST FOR TRAVEL!
                            </h2>
                            <p className="body-text mb-2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                            <p className="body-text mb-2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                            <p className="body-text mb-2">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </Col>
                        <Col md="4">
                            <Card className="border-0 shadow-sm rounded-3 mb-4">
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-center align-items-center my-2">
                                        <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                                            <img
                                                src={icons1}
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h5">
                                        50+ Destination
                                    </Card.Title>
                                    <p className="mb-2 body-text">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </Card.Body>
                            </Card>

                            <Card className="border-0 shadow-sm rounded-3 mb-4">
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-center align-items-center my-2">
                                        <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                                            <img
                                                src={icons2}
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h5">
                                        Best Price In The Industry
                                    </Card.Title>
                                    <p className="mb-2 body-text">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </Card.Body>
                            </Card>

                            <Card className="border-0 shadow-sm rounded-3 mb-4">
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-center align-items-center my-2">
                                        <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                                            <img
                                                src={icons3}
                                                alt="icon"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h5">
                                        Super Fast Booking
                                    </Card.Title>
                                    <p className="mb-2 body-text">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> */}
            </section>
        </>
    );
};

export default About;
