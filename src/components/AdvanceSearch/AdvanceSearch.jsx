import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// import
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { Link } from "react-router-dom";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectedLocation =(value)=>{
    console.log("Location", value)
  }

  const selectedGuest =(value)=>{
    console.log("Guest ", value)
  }


  return (
      <>
          <section className="box-search-advance">
              <Container>
                  <Row>
                      <Col md={12} xs={12}>
                          <div className="box-search shadow-sm">
                              <div className="item-search">
                                  {/*  Using Props to Pass Data */}
                                  <CustomDropdown
                                      label="Location"
                                      onSelect={selectedLocation}
                                      options={[
                                          "Dinh Doc Lap,Viet Nam",
                                          "Ho Ba Mau, Viet Nam",
                                          "Phu Ket, Thailand",
                                          "Vinh Ha Long, Viet Nam",
                                          "Lang Co, Hue, Viet Nam",
                                      ]}
                                  />
                              </div>
                              <div className="item-search item-search-2">
                                  <label className="item-search-label">
                                      {" "}
                                      Check in{" "}
                                  </label>
                                  <DatePicker
                                      selected={startDate}
                                      onChange={(date) => setStartDate(date)}
                                      selectsStart
                                      startDate={startDate}
                                      endDate={endDate}
                                      dateFormat="dd, MMMM, yyyy"
                                  />
                              </div>
                              <div className="item-search item-search-2">
                                  <label className="item-search-label">
                                      {" "}
                                      Check Out{" "}
                                  </label>
                                  <DatePicker
                                      selected={endDate}
                                      onChange={(date) => setEndDate(date)}
                                      selectsEnd
                                      startDate={endDate}
                                      endDate={startDate}
                                      dateFormat="dd, MMMM, yyyy"
                                  />
                              </div>
                              <div className="item-search bd-none">
                                  <CustomDropdown
                                      label="Guest"
                                      onSelect={selectedGuest}
                                      options={[
                                          "2 adults, 1 children",
                                          "	2 adults, 1 children",
                                          "2 adults, 3 children",
                                          "1 adult, 2 children",
                                          "1 adult, 3 children",
                                          "1 adult, 1 children"
                                      ]}
                                  />
                              </div>
                              <div className="item-search bd-none">
                                  <Link to="/search" style={{ textDecoration: "none" }}>
                                      <Button className="primaryBtn flex-even d-flex justify-content-center" >
                                          <i className="bi bi-search me-2"></i>{" "}
                                          Search
                                      </Button>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      </>
  );
};

export default AdvanceSearch;
