import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
import { Line } from "react-chartjs-2";


import {
  Button,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";


export default function LandingPage() {

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
   
  const astronaut = useRef(null)
  const rocket = useRef(null)
  const terminal = useRef(null)
  const spaceship = useRef(null)
  const coding = useRef(null)
 

  useEffect(()=>{
    Lottie.loadAnimation({
      container: astronaut.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Lottie/astronaut.json')
    })
  }, [])
  useEffect(()=>{
    Lottie.loadAnimation({
      container: rocket.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Lottie/rocket.json')
    })
  }, [])
  useEffect(()=>{
    Lottie.loadAnimation({
      container: terminal.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Lottie/terminal.json')
    })
  }, [])
  useEffect(()=>{
    Lottie.loadAnimation({
      container: spaceship.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Lottie/spaceship.json')
    })
  }, [])
  useEffect(()=>{
    Lottie.loadAnimation({
      container: coding.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Lottie/coding.json')
    })
  }, [])

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            // src={require("assets/img/blob.png").default}
          />
            <img
              alt="..."
              className="path2"
              // src={require("assets/img/path2.png").default}
            />
          <img
            alt="..."
            className="shapes triangle"
            // src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            // src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            // src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            // src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center" >

            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">

                <h1 className="text-white" style={{fontSize:"35px"}}>
                  RGIT Codecell <br /><br/>
                  {/* <span className="text-white">Moving ahead</span> */}
                </h1>
                <p className="text-white mb-3"  style={{fontSize:"20px"}}>
                The Platform Where We Collaborate To Bring Out The Best Coders In Us
                </p>
                <div className="btn-wrapper mb-3">
                  <Button
                    className="btn-link"
                    color="success"
                    href="#about"
                    size="sm"
                  >
                  <p className="category text-success d-inline">
                    Let's Explore
                  </p>
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.linkedin.com/company/rgit-codecell/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
  
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.instagram.com/rgitcodecell"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </div>
                </div>
                
              </Col>

              <Col lg="6" md="6" >
                <div ref={astronaut }>

                </div>
             </Col> 
              
            </Row>
            
          </div>
        

        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              // src={require("assets/img/path4.png").default}
            />
            <Container>
              <Row className="row-grid justify-content-between">
               
                <Col md="6">
                  <div className="pl-md-5">
                    <h1 id="about" style={{fontSize:"35px"}}>
                     About
                     Us
                    </h1>
                    <hr className="line-info" />
                    <br/>
                    <p style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>
                    Codecell was established in 2019 by a group of budding programmers who envisioned a platform where everyone could join together 
                    with like minded people and grow. Despite being a committee that is fairly new compared to many others, we have established a 
                    community of over 150 students and conducted our college's first Hackathon in our first year.
                    </p>
                    <br />
                    <p style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>
                    Codecell helps you in introducing yourself to the world of programming and assists you as you code. You get to interact with other 
                    coders to grow your knowledge base and participate in coding challenges. During your growth as a programmer, we and your peers will 
                    help out in any manner possible by providing knowledge about topics that are requested.

                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
                <Col lg="6" md="6">
                    <div ref={terminal}></div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <div className="rocket" ref={rocket}></div>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            // src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            // src={require("assets/img/path5.png").default}
          />
          <img
            alt="..."
            className="path3"
            // src={require("assets/img/path2.png").default}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text" style={{fontSize:"35px"}}> Upcoming Event</h1>
                <hr className="line-info" />
                <br/><br/>
                <Row className="row-grid justify-content-between">
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1 style={{fontSize:"30px"}}>
                          Recursion 3.0
                        </h1>
                        <br/>
                        <p style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>
                        Recursion 3.0 is a hackathon being held by RGIT CESS and RGIT Codecell. It’s a 24 hour Hackathon, where all the teams will ideate to find suitable solutions for the problem statements they will be presented with. It is a sequel to Recursion 2020, which marked the first ever hackathon to be held in Rajiv Gandhi Institute of Technology. The domains will be Machine learning, App development, Blockchain and Web development. The hackathon will serve as a fun challenge to all programmers who participate in it.
                        </p>
                      
                        <br />
                        <a
                          className="font-weight-bold text-info mt-5"
                          href="/Events"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Show all{" "}
                          <i className="tim-icons icon-minimal-right text-info" />
                        </a>
                      </div>
                    </Col>
                    
                    <Col lg="6" md="6">
                      <Card>
                        <CardImg top width="10%" src="https://www.rgitcodecell.in/assets/img/sponsersLogo/recursion_poster.jpeg"/>
                      </Card>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            // src={require("assets/img/path5.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="6">
                <div ref={coding}></div>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3 style={{fontSize:"35px"}}>What's there inside for you ?</h3>
                  <p style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>
                  The Platform Where We Collaborate To Bring Out The Best Coders In Us
                  </p>
                  <ul className="list-unstyled mt-5" >
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6 style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>Networking and Seminars/Webinars</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6 style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>Hackathons</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6 style={{fontSize:"15px", textAlign: 'justify', textJustify: 'inter-word'}}>Reach and Teach</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            // src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            // src={require("assets/img/path2.png").default}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    {/* <hr className="line-info" /> */}
                    <h5 className="card-category" style={{fontSize:"15px"}}>Total Events</h5>
                    <CardTitle tag="h2" style={{fontSize:"35px"}}>Events Organized</CardTitle>
                    <hr className="line-info" />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            // src={require("assets/img/path3.png").default}
          />
          <Container>
            <Row>
              <Col md="4">
                {/* <hr className="line-info" /> */}
                <h1 style={{fontSize:"35px"}}>
                  Wanna{" "}
                 <span className="text-info">JOIN US ?</span>
                 <hr className="line-info" />
                </h1>
              </Col>
            </Row>
            <Row>
              
              <Col lg="12">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <div ref={spaceship}></div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Hit the Button bellow</h4>
                        <span>To Join with us</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      JOIN
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
