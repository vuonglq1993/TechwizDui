import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import PopularCard from "../../components/Cards/PopularCard";
import { popularsData } from "../../utils/data";
import Filters from "./Filters";
import "../Fake/tour.css";

const Tour = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        document.title = "Tours";
        window.scroll(0, 0);
    }, []);

    const filteredData = popularsData.filter((val) =>
        val.location.toLowerCase().includes("vietnam")
    );

    return (
        <>
            <Breadcrumbs title="Search" pagename="Search" />

            <section className="py-5 tour_list">
                <Container>
                    <Row>
                        <Col xl="3" lg="4" md="12" sm="12">
                            <div className="d-lg-none d-block">
                                <button
                                    className="primaryBtn mb-4"
                                    onClick={handleShow}
                                >
                                    <i className="bi bi-funnel"></i> Filters
                                </button>
                            </div>
                            <div className="filters d-lg-block d-none">
                                <Filters />
                            </div>
                        </Col>
                        <Col xl="9" lg="8" md="12" sm="12">
                            <Row>
                                <Col md="12">
                                    <h3 className="h2 fw-bold main_heading">
                                        Search by word "Vietnam"
                                    </h3>
                                </Col>
                            </Row>
                            <Row>
                                {filteredData.map((val, inx) => {
                                    return (
                                        <Col
                                            xl={4}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            className="mb-5"
                                            key={inx}
                                        >
                                            <PopularCard val={val} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Filters />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Tour;
